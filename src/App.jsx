import React, { useState, useEffect } from 'react';
import CinematicWeddingMaster from './components/CinematicWeddingMaster';
import AdminEditorModal from './components/editor/AdminEditorModal';
import VideoExportModal from './components/export/VideoExportModal';
import {
  getCustomerConfig,
  saveCustomerConfig,
  resetCustomerConfig,
  defaultCustomers,
} from './config/customerStore';

/**
 * Complete, Continuous, Cinematic Tamil Wedding E-Invitation Platform
 * - Unbroken continuous timeline (0s to 38s) with automatic playback
 * - No Next/Previous buttons, no separate slideshow screens
 * - 6-part continuous cinematic sequence (Temple -> Bride -> Groom -> Couple -> Corridor -> Details)
 * - Multi-customer configuration with in-app editor and local photo upload
 * - Genuine MP4 video export workflow
 */
export default function App() {
  const [activeCustomerId, setActiveCustomerId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cust = params.get('customer');
      if (cust && (defaultCustomers[cust] || localStorage.getItem('wedding_invite_customer_' + cust))) {
        return cust;
      }
    }
    return 'customer-001';
  });

  const [config, setConfig] = useState(() => getCustomerConfig(activeCustomerId));
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  useEffect(() => {
    const loaded = getCustomerConfig(activeCustomerId);
    setConfig(loaded);
  }, [activeCustomerId]);

  const handleSaveConfig = (updatedConfig) => {
    setConfig(updatedConfig);
    saveCustomerConfig(updatedConfig.id || activeCustomerId, updatedConfig);
  };

  const handleSelectCustomer = (newCustomerId) => {
    setActiveCustomerId(newCustomerId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('customer', newCustomerId);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleResetCustomer = (customerId) => {
    resetCustomerConfig(customerId);
    const original = defaultCustomers[customerId] || defaultCustomers['customer-001'];
    setConfig(original);
  };

  return (
    <>
      <CinematicWeddingMaster
        config={config}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Admin / Customer Editor Modal */}
      <AdminEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onSelectCustomer={handleSelectCustomer}
        onResetCustomer={handleResetCustomer}
      />

      {/* Genuine MP4 Video Rendering Modal */}
      <VideoExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        config={config}
      />
    </>
  );
}
