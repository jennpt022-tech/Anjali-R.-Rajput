import { X, Printer, Download, Mail, Linkedin, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { AcademicItem, AchievementItem, PortfolioProfile, ProjectItem } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  academics: AcademicItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
}

export default function ResumeModal({
  isOpen,
  onClose,
  profile,
  academics,
  projects,
  achievements
}: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const undergrad = academics.find((a) => a.id === 'undergraduate') || academics[2];
  const juniorCollege = academics.find((a) => a.id === 'junior-college') || academics[1];
  const secondary = academics.find((a) => a.id === 'secondary') || academics[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full border border-gray-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider">Curriculum Vitae / Resume</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20">
              Live Verified
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-gray-900 text-xs font-bold hover:bg-gray-100 transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#1652F0]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-gray-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-950 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-base font-bold text-[#1652F0] mt-1">
                {profile.role}
              </p>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                Mumbai, Maharashtra, India
              </p>
            </div>

            <div className="text-xs text-gray-600 space-y-1 sm:text-right font-medium">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1652F0]" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#1652F0]" />
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="text-gray-500">
                Academic Standing: <strong className="text-gray-900">{profile.cgpa} CGPA (Grade A+)</strong>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1652F0]">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              BBA Digital Business scholar at K.P.B. Hinduja College of Commerce with high distinction (9.09 CGPA). Experienced in primary field research, brand repositioning strategies, technical SEO deployment, and rapid full-stack web prototyping. Track record of student mentorship and inter-collegiate event leadership.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1652F0] border-b border-gray-200 pb-1">
              Education
            </h2>

            <div className="space-y-4">
              {/* Undergrad */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      {undergrad.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#1652F0]">
                      {undergrad.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-900">2024 – 2028 (Expected)</span>
                    <span className="block text-[11px] font-bold text-[#1652F0]">CGPA: 9.09 (Sem 2 A+)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Key coursework: SEO &amp; Content Architecture, Consumer Behaviour &amp; Psychology, Web Technologies &amp; UX, Business Statistics, Performance Acquisition.
                </p>
              </div>

              {/* Junior College */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      {juniorCollege.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray-700">
                      {juniorCollege.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-900">Passed {juniorCollege.passingYear}</span>
                    <span className="block text-[11px] font-bold text-gray-700">{juniorCollege.gradeOrPercentage}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Commerce with Information Technology and Mathematics.
                </p>
              </div>

              {/* Secondary */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      {secondary.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray-700">
                      {secondary.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-900">Passed {secondary.passingYear}</span>
                    <span className="block text-[11px] font-bold text-gray-700">{secondary.gradeOrPercentage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Strategic Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1652F0] border-b border-gray-200 pb-1">
              Selected Projects &amp; Fieldwork
            </h2>

            <div className="space-y-4">
              {projects.slice(0, 6).map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-gray-950">
                      {p.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">{p.category}</span>
                  </div>
                  {p.anjaliRole && (
                    <p className="text-xs font-semibold text-[#1652F0]">
                      Role: {p.anjaliRole}
                    </p>
                  )}
                  <p className="text-xs text-gray-700">
                    {p.details}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-medium">
                    Outcome: {p.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1652F0] border-b border-gray-200 pb-1">
              Honors, Leadership &amp; Co-Curriculars
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div key={item.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-950">{item.title}</span>
                    <span className="text-[10px] text-gray-500 font-medium">{item.dateOrYear}</span>
                  </div>
                  <p className="text-xs text-[#1652F0] font-semibold">"{item.highlight}"</p>
                  <p className="text-[11px] text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1652F0] border-b border-gray-200 pb-1">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Digital Storytelling',
                'Technical On-Page & Off-Page SEO',
                'Brand Repositioning',
                'Qualitative Field Research',
                'Social Media Content Strategy',
                'Buyer Persona Architecture',
                'Performance Marketing',
                'UI/UX Rapid Prototyping',
                'Vercel Deployment',
                'Event Operations & Stage Coordination'
              ].map((skill, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between shrink-0 print:hidden">
          <span className="text-xs text-gray-500">
            K.P.B. Hinduja College of Commerce, Mumbai
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 text-xs font-bold hover:bg-gray-300 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
