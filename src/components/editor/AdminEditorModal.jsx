import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Save,
  RotateCcw,
  Upload,
  Copy,
  Check,
  User,
  Users,
  Calendar,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { listCustomers, defaultCustomers } from '../../config/customerStore';

export default function AdminEditorModal({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onSelectCustomer,
  onResetCustomer,
}) {
  const [activeTab, setActiveTab] = useState('photos');
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(config)));
  const [copiedJson, setCopiedJson] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const availableCustomers = listCustomers();

  if (!isOpen) return null;

  // Handle generic nested text field change
  const handleChange = (path, value) => {
    setFormData((prev) => {
      const copy = { ...prev };
      const keys = path.split('.');
      let current = copy;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  // Handle local image file upload (converts to base64 data URL)
  const handleImageUpload = (fieldPath, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      handleChange(fieldPath, e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSaveConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2500);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-[#160705] border-2 border-[#E6C687]/70 text-[#FFF8E7] shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E6C687]/30 bg-[#220B08]/90">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#7A1C18] text-[#F5D98A]">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-[#FFF5DB]">
                  கஸ்டமைஸ் எடிட்டர் (Template Editor)
                </h2>
                <p className="font-serif text-xs text-[#E6C687]/80">
                  Reusable Tamil Wedding E-Invitation Manager
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-[#35100B] text-[#E6C687] hover:bg-[#4D1710] border border-[#E6C687]/40 cursor-pointer transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Customer Profile Switcher */}
          <div className="px-4 sm:px-6 py-3 bg-[#1C0806] border-b border-[#E6C687]/20 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif text-[#E8C77F] font-semibold">Active Customer:</span>
              <select
                value={formData.id}
                onChange={(e) => onSelectCustomer(e.target.value)}
                className="bg-[#2D100C] border border-[#E6C687]/50 rounded-lg px-2.5 py-1 text-xs text-[#FFF5DB] font-serif cursor-pointer focus:outline-none focus:border-[#F5D98A]"
              >
                {availableCustomers.map((id) => (
                  <option key={id} value={id}>
                    {defaultCustomers[id]?.displayName || id}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => onResetCustomer(formData.id)}
              className="text-[11px] font-serif text-red-300 hover:text-red-200 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to Original</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#E6C687]/30 bg-[#200A08] text-xs font-serif font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-all ${
                activeTab === 'photos'
                  ? 'border-[#F5D98A] text-[#F5D98A] bg-[#2C0E0B]'
                  : 'border-transparent text-[#FAF0D7]/70 hover:text-[#FFF5DB]'
              }`}
            >
              📸 புகைப்படங்கள் (Photos)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('names')}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-all ${
                activeTab === 'names'
                  ? 'border-[#F5D98A] text-[#F5D98A] bg-[#2C0E0B]'
                  : 'border-transparent text-[#FAF0D7]/70 hover:text-[#FFF5DB]'
              }`}
            >
              👥 மணமக்கள் (Bride & Groom)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ceremony')}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-all ${
                activeTab === 'ceremony'
                  ? 'border-[#F5D98A] text-[#F5D98A] bg-[#2C0E0B]'
                  : 'border-transparent text-[#FAF0D7]/70 hover:text-[#FFF5DB]'
              }`}
            >
              🏛️ முகூர்த்தம் & மண்டபம் (Venue)
            </button>
          </div>

          {/* Scrollable Form Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* TAB 1: PHOTOS */}
            {activeTab === 'photos' && (
              <div className="space-y-6">
                {/* Bride Photo Card */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                      1. மணமகள் புகைப்படம் (Bride Photo)
                    </h3>
                    <span className="text-[10px] text-[#FAF0D7]/60 font-serif">Scene 2</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 rounded-xl bg-black border border-[#E6C687]/40 overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={formData.bride?.photo}
                        alt="Bride"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3A130E] hover:bg-[#4E1A14] border border-[#E6C687]/40 text-xs font-serif cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-[#F5D98A]" />
                        <span>Upload New Bride Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload('bride.photo', e.target.files[0])}
                        />
                      </label>
                      <input
                        type="text"
                        value={formData.bride?.photo || ''}
                        onChange={(e) => handleChange('bride.photo', e.target.value)}
                        placeholder="Or enter image URL"
                        className="w-full px-2.5 py-1 rounded bg-[#180604] border border-[#E6C687]/30 text-xs text-[#FAF0D7]"
                      />
                    </div>
                  </div>

                  {/* Scale & Offset Sliders */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Scale / Zoom: {formData.bride?.scale || 1}x
                      </label>
                      <input
                        type="range"
                        min="0.7"
                        max="1.5"
                        step="0.05"
                        value={formData.bride?.scale || 1}
                        onChange={(e) => handleChange('bride.scale', parseFloat(e.target.value))}
                        className="w-full accent-[#F5D98A]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Vertical Offset: {formData.bride?.offsetY || 0}px
                      </label>
                      <input
                        type="range"
                        min="-60"
                        max="60"
                        step="5"
                        value={formData.bride?.offsetY || 0}
                        onChange={(e) => handleChange('bride.offsetY', parseInt(e.target.value))}
                        className="w-full accent-[#F5D98A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Groom Photo Card */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                      2. மணமகன் புகைப்படம் (Groom Photo)
                    </h3>
                    <span className="text-[10px] text-[#FAF0D7]/60 font-serif">Scene 3</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 rounded-xl bg-black border border-[#E6C687]/40 overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={formData.groom?.photo}
                        alt="Groom"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3A130E] hover:bg-[#4E1A14] border border-[#E6C687]/40 text-xs font-serif cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-[#F5D98A]" />
                        <span>Upload New Groom Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload('groom.photo', e.target.files[0])}
                        />
                      </label>
                      <input
                        type="text"
                        value={formData.groom?.photo || ''}
                        onChange={(e) => handleChange('groom.photo', e.target.value)}
                        placeholder="Or enter image URL"
                        className="w-full px-2.5 py-1 rounded bg-[#180604] border border-[#E6C687]/30 text-xs text-[#FAF0D7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Scale / Zoom: {formData.groom?.scale || 1}x
                      </label>
                      <input
                        type="range"
                        min="0.7"
                        max="1.5"
                        step="0.05"
                        value={formData.groom?.scale || 1}
                        onChange={(e) => handleChange('groom.scale', parseFloat(e.target.value))}
                        className="w-full accent-[#F5D98A]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Vertical Offset: {formData.groom?.offsetY || 0}px
                      </label>
                      <input
                        type="range"
                        min="-60"
                        max="60"
                        step="5"
                        value={formData.groom?.offsetY || 0}
                        onChange={(e) => handleChange('groom.offsetY', parseInt(e.target.value))}
                        className="w-full accent-[#F5D98A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Couple Photo Card */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                      3. தம்பதியர் புகைப்படம் (Couple Photo)
                    </h3>
                    <span className="text-[10px] text-[#FAF0D7]/60 font-serif">Scene 4</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 rounded-xl bg-black border border-[#E6C687]/40 overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={formData.couple?.photo}
                        alt="Couple"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3A130E] hover:bg-[#4E1A14] border border-[#E6C687]/40 text-xs font-serif cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-[#F5D98A]" />
                        <span>Upload New Couple Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload('couple.photo', e.target.files[0])}
                        />
                      </label>
                      <input
                        type="text"
                        value={formData.couple?.photo || ''}
                        onChange={(e) => handleChange('couple.photo', e.target.value)}
                        placeholder="Or enter image URL"
                        className="w-full px-2.5 py-1 rounded bg-[#180604] border border-[#E6C687]/30 text-xs text-[#FAF0D7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: NAMES & LINEAGE */}
            {activeTab === 'names' && (
              <div className="space-y-6">
                {/* Bride Details */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                    மணமகள் விவரங்கள் (Bride Information)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Tamil Name
                      </label>
                      <input
                        type="text"
                        value={formData.bride?.tamilName || ''}
                        onChange={(e) => handleChange('bride.tamilName', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-sm font-tamil text-[#FFF8E7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        English Name
                      </label>
                      <input
                        type="text"
                        value={formData.bride?.englishName || ''}
                        onChange={(e) => handleChange('bride.englishName', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-sm font-serif text-[#FFF8E7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Qualification (Tamil)
                      </label>
                      <input
                        type="text"
                        value={formData.bride?.qualificationTamil || ''}
                        onChange={(e) => handleChange('bride.qualificationTamil', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Parents (Tamil)
                      </label>
                      <input
                        type="text"
                        value={formData.bride?.parentsTamil || ''}
                        onChange={(e) => handleChange('bride.parentsTamil', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs font-tamil text-[#FAF0D7]"
                      />
                    </div>
                  </div>
                </div>

                {/* Groom Details */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                    மணமகன் விவரங்கள் (Groom Information)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Tamil Name
                      </label>
                      <input
                        type="text"
                        value={formData.groom?.tamilName || ''}
                        onChange={(e) => handleChange('groom.tamilName', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-sm font-tamil text-[#FFF8E7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        English Name
                      </label>
                      <input
                        type="text"
                        value={formData.groom?.englishName || ''}
                        onChange={(e) => handleChange('groom.englishName', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-sm font-serif text-[#FFF8E7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Qualification (Tamil)
                      </label>
                      <input
                        type="text"
                        value={formData.groom?.qualificationTamil || ''}
                        onChange={(e) => handleChange('groom.qualificationTamil', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Parents (Tamil)
                      </label>
                      <input
                        type="text"
                        value={formData.groom?.parentsTamil || ''}
                        onChange={(e) => handleChange('groom.parentsTamil', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs font-tamil text-[#FAF0D7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: CEREMONY & VENUE */}
            {activeTab === 'ceremony' && (
              <div className="space-y-6">
                {/* Wedding Date Card */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                    சுபமுகூர்த்த தேதி & நேரம் (Date & Muhurtham)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Day (e.g. 23rd)
                      </label>
                      <input
                        type="text"
                        value={formData.wedding?.dayOrdinal || ''}
                        onChange={(e) => handleChange('wedding.dayOrdinal', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Month & Year (e.g. October 2026)
                      </label>
                      <input
                        type="text"
                        value={formData.wedding?.monthYear || ''}
                        onChange={(e) => handleChange('wedding.monthYear', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Muhurtham Timing (e.g. 7.35 am to 9.00 am)
                      </label>
                      <input
                        type="text"
                        value={formData.wedding?.muhurthamTimeFormatted || ''}
                        onChange={(e) => handleChange('wedding.muhurthamTimeFormatted', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Tamil Date (பஞ்சாங்கம் விவரம்)
                      </label>
                      <input
                        type="text"
                        value={formData.wedding?.tamilDateFull || ''}
                        onChange={(e) => handleChange('wedding.tamilDateFull', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs font-tamil text-[#FAF0D7]"
                      />
                    </div>
                  </div>
                </div>

                {/* Venue Card */}
                <div className="p-4 rounded-2xl bg-[#220B07] border border-[#E6C687]/35 space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#F5D98A]">
                    மண்டபம் & இருப்பிடம் (Venue & Maps)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Venue Name (Tamil)
                      </label>
                      <input
                        type="text"
                        value={formData.venue?.tamilName || ''}
                        onChange={(e) => handleChange('venue.tamilName', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs font-tamil text-[#FAF0D7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Full Address
                      </label>
                      <input
                        type="text"
                        value={formData.venue?.fullAddress || ''}
                        onChange={(e) => handleChange('venue.fullAddress', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-serif text-[#E6C687] block mb-1">
                        Google Maps URL
                      </label>
                      <input
                        type="text"
                        value={formData.venue?.mapsUrl || ''}
                        onChange={(e) => handleChange('venue.mapsUrl', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#180604] border border-[#E6C687]/40 text-xs text-[#FAF0D7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-[#E6C687]/30 bg-[#220B08]/90 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopyJson}
              className="py-2.5 px-3 rounded-xl bg-[#2D100C] hover:bg-[#3E1611] border border-[#E6C687]/40 text-[#E6C687] font-serif text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
            >
              {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedJson ? 'Copied JSON!' : 'Copy Config JSON'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-[#2A0F0B] hover:bg-[#3D140F] text-[#FAF0D7]/80 font-serif text-xs font-semibold cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1A0704] font-serif font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                {saveSuccess ? <Check className="w-4 h-4 text-emerald-900" /> : <Save className="w-4 h-4" />}
                <span>{saveSuccess ? 'Saved!' : 'Save & Update'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
