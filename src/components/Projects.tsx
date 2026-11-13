import { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle, Search, FileText, Download, ExternalLink, UserCheck, PlusCircle } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenPdfViewer: (project: ProjectItem) => void;
  onOpenAddProjectModal: () => void;
}

export default function Projects({
  projects,
  onSelectProject,
  onOpenPdfViewer,
  onOpenAddProjectModal
}: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.anjaliRole && project.anjaliRole.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1652F0]">
              <Briefcase className="w-4 h-4" />
              <span>Real Case Studies &amp; Official Decks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Featured Projects &amp; Presentations
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Complete academic presentations, live deployed hubs, and strategic decks prepared by Anjali Rajput at K.P.B. Hinduja College of Commerce.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddProjectModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-[#1652F0] text-white hover:bg-[#1242c7] transition-all shadow-xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Custom Project</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1652F0] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword, role, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#1652F0] focus:bg-white"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl hover:border-[#1652F0]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* TOP: Project Brief Banner / Box */}
              <div className="bg-[#1652F0]/10 border-b border-[#1652F0]/20 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1652F0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1652F0]" />
                    Project Brief
                  </span>
                  
                  {project.pdfUrl && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1652F0] bg-white px-2 py-0.5 rounded-md border border-[#1652F0]/30 shadow-2xs">
                      <FileText className="w-3 h-3 text-[#1652F0]" />
                      PDF Attached
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  {project.brief}
                </p>
              </div>

              {/* Optional Cover Image */}
              {project.imageUrl && (
                <div className="relative h-44 overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-950 tracking-tight group-hover:text-[#1652F0] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Anjali's Role Callout */}
                  {project.anjaliRole && (
                    <div className="p-2.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-start gap-2">
                      <UserCheck className="w-4 h-4 text-[#1652F0] mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1652F0]">
                          Anjali's Contribution
                        </span>
                        <p className="text-xs font-semibold text-gray-800 leading-snug">
                          {project.anjaliRole}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Scope &amp; Strategic Execution
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  {/* Outcome Box */}
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1652F0] block mb-1">
                      Outcome &amp; Assessment
                    </span>
                    <p className="text-xs font-medium text-gray-800 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Footer Actions: PDF Reader, External Links, and Details */}
                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                  
                  {/* Unboxed Metadata with · separator */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-500">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="inline-flex items-center">
                        <span>{tag}</span>
                        {i < 2 && <span className="ml-2 text-gray-300">·</span>}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {project.pdfUrl && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenPdfViewer(project)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] shadow-xs transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View PDF Presentation</span>
                        </button>

                        <a
                          href={project.pdfUrl}
                          download
                          title="Download PDF"
                          className="p-2 rounded-xl border border-gray-200 text-gray-700 hover:text-[#1652F0] hover:bg-gray-50 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 transition-colors cursor-pointer"
                      >
                        <span>Case Study Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.externalLinks && project.externalLinks[0] && (
                        <a
                          href={project.externalLinks[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold hover:bg-gray-200 transition-colors"
                          title={project.externalLinks[0].label}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#1652F0]" />
                          <span className="hidden sm:inline">{project.externalLinks[0].label.replace("Live ", "")}</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Add Project Card */}
          <div
            onClick={onOpenAddProjectModal}
            className="bg-gray-50/70 border-2 border-dashed border-gray-300 hover:border-[#1652F0] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer group transition-all min-h-[380px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#1652F0] group-hover:scale-110 group-hover:border-[#1652F0] transition-all shadow-xs">
              <PlusCircle className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-gray-900 group-hover:text-[#1652F0] transition-colors">
                Add Another Project / Case Study
              </h4>
              <p className="text-xs text-gray-500 max-w-xs">
                Add future assignments, live client campaigns, or competition decks to your portfolio anytime.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1652F0] bg-blue-50 px-3 py-1.5 rounded-full group-hover:bg-[#1652F0] group-hover:text-white transition-colors">
              + Insert New Project Card
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
