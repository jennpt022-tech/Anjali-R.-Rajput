import React, { useState } from 'react';
import { Copy, Check, FileText, Download, ArrowUp, ExternalLink, Sparkles, Phone, MapPin } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ConnectFooterProps {
  profile: PortfolioProfile;
  onOpenCvPdf: () => void;
  onEditProfile: () => void;
}

export default function ConnectFooter({ profile, onOpenCvPdf, onEditProfile }: ConnectFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="pt-20 pb-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean white card framed with a bold Royal Blue accent border (#1652F0) */}
        <div className="bg-white rounded-3xl border-3 border-[#1652F0] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Royal Blue corner wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none blur-2xl" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1652F0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open for Collaborations &amp; Internships</span>
            </div>

            {/* Headline & Subtext */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]">
                Let’s Connect &amp; Collaborate
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Whether you're looking for a digital marketing strategist, an ambitious summer intern for brand growth campaigns, or a research collaborator — reach out directly via LinkedIn or Gmail.
              </p>
            </div>

            {/* TWO PROMINENT INTERACTIVE ICON BUTTONS FOR LINKEDIN AND GMAIL */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              
              {/* 1. LinkedIn Icon Button */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#1652F0] text-white font-bold text-sm shadow-md hover:bg-[#1242c7] hover:shadow-lg active:scale-98 transition-all cursor-pointer group"
              >
                {/* LinkedIn SVG Icon */}
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* 2. Gmail Icon Button + One-Click Copy Email Utility */}
              <div className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center rounded-full bg-white border-2 border-gray-900 shadow-xs hover:border-[#1652F0] transition-colors p-1.5 group">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold text-gray-900 hover:text-[#1652F0] transition-colors whitespace-nowrap"
                >
                  {/* Gmail / Envelope M Icon */}
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                    />
                  </svg>
                  <span>Gmail</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gray-100 hover:bg-[#1652F0] hover:text-white text-gray-800 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                      <span className="text-emerald-700 group-hover:text-white">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Direct Contact Metadata & CV Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-gray-600 font-medium">
              <span className="font-mono bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-800">
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-700">
                <Phone className="w-3.5 h-3.5 text-[#1652F0]" />
                {profile.phone}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-[#1652F0]" />
                {profile.location}
              </span>
            </div>

            {/* CV PDF View & Download Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                onClick={onOpenCvPdf}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-[#1652F0] border border-blue-200 text-xs font-bold hover:bg-[#1652F0] hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV (PDF)</span>
              </button>

              <a
                href={profile.cvPdfUrl}
                download="Anjali_Rajput_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors"
              >
                <Download className="w-4 h-4 text-[#1652F0]" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onEditProfile}
                className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-700 cursor-pointer text-[11px] ml-2"
              >
                (Customize Links)
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#1652F0] flex items-center justify-center text-white font-bold text-xs">
              AR
            </div>
            <span>
              &copy; {new Date().getFullYear()} {profile.name} · BBA Digital Business, {profile.currentCollege}.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#academics" className="hover:text-gray-900 transition-colors">Academics</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-gray-900 transition-colors">Achievements</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
