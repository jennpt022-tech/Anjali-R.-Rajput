import React, { useRef } from 'react';
import { Sparkles, Award, ArrowDown, Camera, Check, FileText, Download, MapPin } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroProps {
  profile: PortfolioProfile;
  onUpdatePortrait: (url: string) => void;
  onOpenCvPdf: () => void;
}

export default function Hero({ profile, onUpdatePortrait, onOpenCvPdf }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdatePortrait(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const tickerItems = [
    'Digital Marketing Strategy',
    'Brand Management',
    'Creative & Content Strategy',
    'SEO & Web Design',
    'AI-Assisted Workflows',
    'Digital Marketing Strategy',
    'Brand Management',
    'Creative & Content Strategy',
    'SEO & Web Design',
    'AI-Assisted Workflows'
  ];

  return (
    <section id="about" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-white">
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#1652F0 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 55% width (col-span-7 on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small framed greeting badge with blue corner brackets */}
            <div className="relative inline-flex items-center px-4 py-1.5">
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#1652F0]" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#1652F0]" />
              <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#1652F0]" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#1652F0]" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-[#1652F0] flex items-center gap-1.5">
                <span className="text-[10px]">✦</span> Hello!
              </span>
            </div>

            {/* Bold Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
                I’m{' '}
                <span className="relative inline-block text-gray-950 underline decoration-[#1652F0] decoration-[4px] underline-offset-8">
                  {profile.name}
                </span>
                ,
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-gray-900 tracking-tight leading-snug">
                {profile.role}.
              </p>
            </div>

            {/* CV-Based Professional Summary */}
            <div className="max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed space-y-2 font-normal">
              <p>
                <strong className="font-semibold text-gray-900">{profile.headlineBio}</strong>
              </p>
              <p>
                Hands-on experience leading academic and inter-collegiate projects focused on <strong className="font-semibold text-gray-900">audience analysis, brand positioning, content creation, and AI-assisted marketing workflows</strong>.
              </p>
              <p>
                Skilled in utilizing modern digital platforms — from <strong className="font-semibold text-gray-900">Canva, WordPress &amp; SEO</strong> to Gemini and AI Studio — to deliver impact-driven marketing concepts.
              </p>
            </div>

            {/* Key Quick Indicators from CV */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-gray-600">
              <span className="inline-flex items-center gap-1.5 text-gray-800">
                <Check className="w-4 h-4 text-[#1652F0]" /> {profile.currentCollege}
              </span>
              <span className="hidden sm:inline text-gray-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-gray-800">
                <MapPin className="w-3.5 h-3.5 text-[#1652F0]" /> {profile.location}
              </span>
              <span className="hidden sm:inline text-gray-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-gray-800">
                <Check className="w-4 h-4 text-[#1652F0]" /> Class of {profile.gradYear}
              </span>
            </div>

            {/* CTA Buttons Row: View Projects, Academic Journey, and View/Download CV PDF */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              {/* Solid Royal Blue button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1652F0] text-white text-sm sm:text-base font-semibold shadow-md hover:bg-[#1242c7] hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>

              {/* White outlined button with a black border */}
              <a
                href="#academics"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-gray-900 border-2 border-gray-900 text-sm sm:text-base font-semibold hover:bg-gray-50 hover:text-black active:scale-98 transition-all duration-200 cursor-pointer"
              >
                Academic Journey
              </a>

              {/* View & Download CV PDF controls */}
              <div className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 p-1">
                <button
                  onClick={onOpenCvPdf}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-gray-900 hover:text-[#1652F0] transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#1652F0]" />
                  <span>View CV</span>
                </button>
                <a
                  href={profile.cvPdfUrl}
                  download="Anjali_Rajput_CV.pdf"
                  title="Download Anjali Rajput CV (PDF)"
                  className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#1652F0] hover:bg-[#1652F0] hover:text-white transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 45% width (col-span-5 on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
              
              {/* Organic Royal Blue circular/blob backdrop shape */}
              <div 
                className="absolute inset-0 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-gradient-to-tr from-[#1652F0] to-[#3b74ff] opacity-95 blur-[1px] transform -rotate-3 scale-105 shadow-xl transition-all duration-700" 
              />
              
              {/* Secondary Soft Ambient Glow */}
              <div 
                className="absolute -inset-4 rounded-full bg-[#1652F0]/20 blur-2xl -z-10" 
              />

              {/* Clean Portrait Photo Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white bg-gray-100 shadow-2xl z-10 group">
                <img
                  src={profile.portraitUrl}
                  alt="Anjali Rajput Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'text-center', 'bg-blue-50');
                    }
                  }}
                />

                {/* Photo Swap Utility on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-white text-center">
                  <Camera className="w-7 h-7 mb-2 text-white" />
                  <p className="text-xs font-semibold mb-3">Update Portrait Photo</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-1.5 bg-white text-gray-900 text-xs font-bold rounded-full shadow-sm hover:bg-gray-100 cursor-pointer"
                  >
                    Upload Photo
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Subtle bottom gradient caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-950/75 via-gray-950/20 to-transparent p-4 text-center">
                  <span className="text-xs font-medium text-white/95 tracking-wide">
                    {profile.name} · BBA Digital Business
                  </span>
                </div>
              </div>

              {/* Floating Pill Badge 1: 9.09 CGPA */}
              <div className="absolute -top-3 -left-4 sm:-top-4 sm:-left-6 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1652F0] text-white text-xs sm:text-sm font-bold shadow-lg border-2 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-200">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>{profile.cgpa} CGPA</span>
                </div>
              </div>

              {/* Floating Pill Badge 2: Digital Marketer */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1652F0] text-white text-xs sm:text-sm font-bold shadow-lg border-2 border-white transform rotate-3 hover:rotate-0 transition-transform duration-200">
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Digital Marketer</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Core Skills & Competencies Matrix (From CV) */}
        <div className="mt-14 pt-10 border-t border-gray-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1652F0]">
                Core Skills &amp; Competencies
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mt-0.5">
                Capabilities &amp; Digital Toolkit
              </h2>
            </div>
            <div className="text-xs font-medium text-gray-500">
              {profile.areasOfInterest.join(' · ')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profile.skills.map((group) => (
              <div
                key={group.category}
                className="bg-gray-50/70 rounded-2xl border border-gray-200/80 p-5 space-y-2.5"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1652F0]">
                  {group.category}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION DIVIDER: Full-width tilted/angled Royal Blue ribbon banner */}
      <div className="mt-14 sm:mt-16 relative w-full overflow-hidden py-3 bg-[#1652F0] shadow-md transform -rotate-1 sm:-rotate-1.5 origin-center scale-105">
        <div className="animate-marquee whitespace-nowrap flex items-center select-none text-white font-bold tracking-wider text-sm sm:text-base">
          {tickerItems.map((item, index) => (
            <span key={index} className="inline-flex items-center mx-4">
              <span className="text-yellow-300 mr-4 text-base">✦</span>
              <span className="uppercase">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
