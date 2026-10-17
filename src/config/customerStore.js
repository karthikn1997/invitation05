import { customer001 } from './customers/customer-001';
import { customer002 } from './customers/customer-002';

const STORAGE_PREFIX = 'wedding_invite_customer_';

export const defaultCustomers = {
  'customer-001': customer001,
  'customer-002': customer002,
};

/**
 * Get active customer config with localStorage overrides if present
 */
export function getCustomerConfig(customerId = 'customer-001') {
  // Check URL param first if in browser
  let effectiveId = customerId;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const urlCust = params.get('customer');
    if (urlCust && (defaultCustomers[urlCust] || localStorage.getItem(STORAGE_PREFIX + urlCust))) {
      effectiveId = urlCust;
    }
  }

  const base = defaultCustomers[effectiveId] || defaultCustomers['customer-001'];

  // Check localStorage overrides
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_PREFIX + effectiveId);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed?.bride?.tamilName === 'தனலட்சுமி' ||
          parsed?.bride?.englishName === 'Dhanalakshmi' ||
          parsed?.music?.file === '/audio/pesamale-bgm.mp3'
        ) {
          localStorage.removeItem(STORAGE_PREFIX + effectiveId);
        } else {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved customer config', e);
    }
  }

  return base;
}

/**
 * Save customer config to localStorage
 */
export function saveCustomerConfig(customerId, updatedConfig) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_PREFIX + customerId, JSON.stringify(updatedConfig));
  } catch (e) {
    console.error('Failed to save customer config', e);
  }
}

/**
 * Reset customer config back to original default
 */
export function resetCustomerConfig(customerId) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_PREFIX + customerId);
  } catch (e) {
    console.error('Failed to reset customer config', e);
  }
}

/**
 * List all available customer IDs
 */
export function listCustomers() {
  const ids = Object.keys(defaultCustomers);
  if (typeof window !== 'undefined') {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const id = key.replace(STORAGE_PREFIX, '');
        if (!ids.includes(id)) {
          ids.push(id);
        }
      }
    }
  }
  return ids;
}
