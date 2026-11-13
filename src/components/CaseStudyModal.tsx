import { X, CheckCircle, ExternalLink, Tag, FileText, Download, UserCheck } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenPdfViewer?: (project: ProjectItem) => void;
}

export default function CaseStudyModal({ project, onClose, onOpenPdfViewer }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-gray-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider">Case Study Deep Dive</span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 font-medium">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Optional Cover Banner */}
        {project.imageUrl && (
          <div className="h-44 sm:h-52 w-full overflow-hidden bg-gray-100">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-black text-gray-950 tracking-tight leading-snug">
              {project.title}
            </h3>
          </div>

          {/* Anjali's Role Callout */}
          {project.anjaliRole && (
            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5">
              <UserCheck className="w-5 h-5 text-[#1652F0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1652F0] block">
                  Anjali Rajput's Contribution
                </span>
                <p className="text-xs font-semibold text-gray-900 leading-snug mt-0.5">
                  {project.anjaliRole}
                </p>
              </div>
            </div>
          )}

          {/* Project Brief Highlight Box */}
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1652F0] block mb-1">
              Project Brief
            </span>
            <p className="text-sm font-semibold text-gray-900 leading-relaxed">
              {project.brief}
            </p>
          </div>

          {/* PDF Attachment Banner if available */}
          {project.pdfUrl && (
            <div className="p-4 rounded-2xl bg-blue-50/70 border-2 border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1652F0] flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-950 block">
                    {project.pdfTitle || "Original Presentation Deck (PDF)"}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Official slides submitted for academic evaluation
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {onOpenPdfViewer && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPdfViewer(project);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1652F0] text-white text-xs font-bold hover:bg-[#1242c7] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Read Deck</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
                <a
                  href={project.pdfUrl}
                  download
                  className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5 text-[#1652F0]" />
                </a>
              </div>
            </div>
          )}

          {/* External Links (Live demo / Google Sheets) */}
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Live URLs &amp; Working Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.externalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-[#1652F0] hover:text-white text-gray-800 text-xs font-semibold transition-all shadow-2xs"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Scope & Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Context &amp; Strategic Objective
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Execution Steps */}
          {project.execution && project.execution.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Methodology &amp; Key Milestones
              </h4>
              <div className="space-y-2.5">
                {project.execution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-[#1652F0] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-800 leading-relaxed font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome & Impact */}
          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
              Measurable Outcome &amp; Assessment
            </span>
            <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Core Competencies Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            K.P.B. Hinduja College of Commerce · BBA Digital Business
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-[#1652F0] transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
