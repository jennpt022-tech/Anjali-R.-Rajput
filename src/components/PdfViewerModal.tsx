import { X, Download, ExternalLink, FileText, Maximize2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  projectCategory?: string;
  externalLink?: { label: string; url: string };
}

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  projectCategory,
  externalLink
}: PdfViewerModalProps) {
  if (!isOpen || !pdfUrl) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full h-[94vh] border border-gray-200 shadow-2xl overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#1652F0] px-4 sm:px-6 py-3.5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {title}
              </h3>
              {projectCategory && (
                <span className="text-[11px] text-blue-100 font-medium tracking-wide">
                  {projectCategory} · Official Presentation Deck / Assignment
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {externalLink && (
              <a
                href={externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-semibold transition-colors"
                title={externalLink.label}
              >
                <span>{externalLink.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-gray-900 text-xs font-bold hover:bg-gray-100 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#1652F0]" />
              <span className="hidden xs:inline">Download PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors hidden sm:inline-flex"
              title="Open raw PDF in new tab"
            >
              <Maximize2 className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="flex-1 w-full h-full bg-gray-100 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title={title}
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info bar */}
        <div className="bg-gray-50 px-4 sm:px-6 py-2.5 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 shrink-0">
          <span className="truncate">
            Document created &amp; submitted by Anjali Rajput (K.P.B. Hinduja College of Commerce)
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1652F0] hover:underline font-semibold"
            >
              Open in full window
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
