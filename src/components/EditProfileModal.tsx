import { useState } from 'react';
import { X, Save, Check } from 'lucide-react';
import { AcademicItem, PortfolioProfile } from '../types/portfolio';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  academics: AcademicItem[];
  onSaveProfile: (profile: PortfolioProfile, academics: AcademicItem[]) => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  academics,
  onSaveProfile
}: EditProfileModalProps) {
  if (!isOpen) return null;

  // Profile contact & links form state
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [linkedinUrl, setLinkedinUrl] = useState(profile.linkedinUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveProfile = () => {
    const updatedProfile: PortfolioProfile = {
      ...profile,
      name,
      email,
      linkedinUrl
    };

    onSaveProfile(updatedProfile, academics);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-lg w-full border border-gray-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider">Customize Contact &amp; Links</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
              placeholder="https://www.linkedin.com/in/your-profile"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          {saveSuccess ? (
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check className="w-4 h-4" /> Changes saved!
            </span>
          ) : (
            <span className="text-xs text-gray-500">
              Data persists in your browser
            </span>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveProfile}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
