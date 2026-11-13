import React, { useState } from 'react';
import { X, Save, RefreshCw, Upload, Check } from 'lucide-react';
import { AcademicItem, PortfolioProfile, ProjectItem } from '../types/portfolio';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  academics: AcademicItem[];
  onSaveProfile: (profile: PortfolioProfile, academics: AcademicItem[]) => void;
  onAddNewProject: (project: ProjectItem) => void;
  mode?: 'profile' | 'addProject';
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  academics,
  onSaveProfile,
  onAddNewProject,
  mode = 'profile'
}: EditProfileModalProps) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'academics' | 'contact' | 'newProject'>(
    mode === 'addProject' ? 'newProject' : 'academics'
  );

  // Profile form state
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [linkedinUrl, setLinkedinUrl] = useState(profile.linkedinUrl);
  const [portraitUrl, setPortraitUrl] = useState(profile.portraitUrl);

  // Academics form state
  const [tenthSchool, setTenthSchool] = useState(
    academics.find((a) => a.id === 'secondary')?.institution || "K.C. Gandhi English School"
  );
  const [tenthYear, setTenthYear] = useState(
    academics.find((a) => a.id === 'secondary')?.passingYear || "2023"
  );
  const [tenthGrade, setTenthGrade] = useState(
    academics.find((a) => a.id === 'secondary')?.gradeOrPercentage || "92.40%"
  );

  const [twelfthCollege, setTwelfthCollege] = useState(
    academics.find((a) => a.id === 'junior-college')?.institution || "B.K. Birla College of Arts, Science & Commerce"
  );
  const [twelfthYear, setTwelfthYear] = useState(
    academics.find((a) => a.id === 'junior-college')?.passingYear || "2025"
  );
  const [twelfthGrade, setTwelfthGrade] = useState(
    academics.find((a) => a.id === 'junior-college')?.gradeOrPercentage || "86.67%"
  );

  // New Project State
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'Digital Storytelling & Brand',
    brief: '',
    details: '',
    execution: [''],
    outcome: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveAcademicAndProfile = () => {
    const updatedAcademics = academics.map((item) => {
      if (item.id === 'secondary') {
        return {
          ...item,
          institution: tenthSchool,
          passingYear: tenthYear,
          gradeOrPercentage: tenthGrade
        };
      }
      if (item.id === 'junior-college') {
        return {
          ...item,
          institution: twelfthCollege,
          passingYear: twelfthYear,
          gradeOrPercentage: twelfthGrade
        };
      }
      return item;
    });

    const updatedProfile: PortfolioProfile = {
      ...profile,
      name,
      email,
      linkedinUrl,
      portraitUrl
    };

    onSaveProfile(updatedProfile, updatedAcademics);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.brief) return;

    const projectToSubmit: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProject.title || 'Untitled Project',
      category: newProject.category || 'Digital Storytelling & Brand',
      brief: newProject.brief || '',
      details: newProject.details || '',
      execution: (newProject.execution || []).filter(Boolean),
      outcome: newProject.outcome || '',
      tags: tagInput ? tagInput.split(',').map((t) => t.trim()) : ['Case Study', 'Marketing'],
      featured: false
    };

    onAddNewProject(projectToSubmit);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-gray-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider">Customize Portfolio Details</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-gray-200 px-6 pt-3 bg-gray-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('academics')}
            className={`pb-3 border-b-2 px-3 transition-colors cursor-pointer ${
              activeTab === 'academics'
                ? 'border-[#1652F0] text-[#1652F0]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Academic Details
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 border-b-2 px-3 transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'border-[#1652F0] text-[#1652F0]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Contact &amp; Links
          </button>
          <button
            onClick={() => setActiveTab('newProject')}
            className={`pb-3 border-b-2 px-3 transition-colors cursor-pointer ${
              activeTab === 'newProject'
                ? 'border-[#1652F0] text-[#1652F0]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            + Add Project Card
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {activeTab === 'academics' && (
            <div className="space-y-6">
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900">
                Update your Secondary (10th) &amp; Junior College (12th) school names, passing years, or marks. Changes save instantly.
              </div>

              {/* 10th Grade */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1652F0] block">
                  Secondary School (10th Grade)
                </span>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    School Name
                  </label>
                  <input
                    type="text"
                    value={tenthSchool}
                    onChange={(e) => setTenthSchool(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                    placeholder="e.g. St. Xavier's High School"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Passing Year
                    </label>
                    <input
                      type="text"
                      value={tenthYear}
                      onChange={(e) => setTenthYear(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                      placeholder="e.g. 2022"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Percentage / Grade
                    </label>
                    <input
                      type="text"
                      value={tenthGrade}
                      onChange={(e) => setTenthGrade(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                      placeholder="e.g. 92.4% / Grade A+"
                    />
                  </div>
                </div>
              </div>

              {/* 12th Grade */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1652F0] block">
                  Junior College (12th Grade)
                </span>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Junior College Name
                  </label>
                  <input
                    type="text"
                    value={twelfthCollege}
                    onChange={(e) => setTwelfthCollege(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                    placeholder="e.g. K.P.B. Hinduja Junior College of Commerce"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Passing Year
                    </label>
                    <input
                      type="text"
                      value={twelfthYear}
                      onChange={(e) => setTwelfthYear(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                      placeholder="e.g. 2024"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Percentage / Grade
                    </label>
                    <input
                      type="text"
                      value={twelfthGrade}
                      onChange={(e) => setTwelfthGrade(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                      placeholder="e.g. 88.6% / Grade A"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
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
          )}

          {activeTab === 'newProject' && (
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. D2C Organic Growth Experiment"
                  value={newProject.title || ''}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                >
                  <option value="Digital Storytelling & Brand">Digital Storytelling & Brand</option>
                  <option value="SEO & Web Tech">SEO & Web Tech</option>
                  <option value="Brand Repositioning">Brand Repositioning</option>
                  <option value="Growth & Social">Growth & Social</option>
                  <option value="Rapid Prototyping">Rapid Prototyping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Project Brief * (Summary Banner)
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Conducted a 14-day influencer sprint to test engagement velocity."
                  value={newProject.brief || ''}
                  onChange={(e) => setNewProject({ ...newProject, brief: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Project Details &amp; Scope
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your role, team size, tools used, and research framework."
                  value={newProject.details || ''}
                  onChange={(e) => setNewProject({ ...newProject, details: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Outcome &amp; Result
                </label>
                <input
                  type="text"
                  placeholder="e.g. Increased organic impressions by 42% over baseline."
                  value={newProject.outcome || ''}
                  onChange={(e) => setNewProject({ ...newProject, outcome: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. SEO, Content Marketing, Analytics"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] transition-colors cursor-pointer"
              >
                Save &amp; Add to Portfolio Grid
              </button>
            </form>
          )}

        </div>

        {/* Footer */}
        {activeTab !== 'newProject' && (
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
                onClick={handleSaveAcademicAndProfile}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] transition-colors cursor-pointer shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
