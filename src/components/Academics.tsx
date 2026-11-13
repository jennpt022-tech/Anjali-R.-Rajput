import { useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, ChevronDown, ChevronUp, Clock, CheckCircle2 } from 'lucide-react';
import { AcademicItem } from '../types/portfolio';

interface AcademicsProps {
  academics: AcademicItem[];
}

export default function Academics({ academics }: AcademicsProps) {
  const [selectedSemTab, setSelectedSemTab] = useState<'sem1' | 'sem2' | 'sem3'>('sem2');
  const [isSemExpanded, setIsSemExpanded] = useState(true);

  const undergrad = academics.find((a) => a.id === 'undergraduate') || academics[2];
  const juniorCollege = academics.find((a) => a.id === 'junior-college') || academics[1];
  const secondary = academics.find((a) => a.id === 'secondary') || academics[0];

  return (
    <section id="academics" className="py-20 bg-gray-50/60 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1652F0]">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Education &amp; Academic Journey
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Consistent distinction across secondary, higher secondary, and undergraduate digital business studies in Mumbai.
            </p>
          </div>
        </div>

        {/* 3-Tier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Secondary School (10th Grade) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full">
            {/* Royal Blue accent header */}
            <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">Secondary School</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-semibold backdrop-blur-xs">
                10th Grade
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1">
                    {secondary.institution}
                  </h3>
                  <p className="text-sm font-medium text-[#1652F0]">
                    {secondary.title}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                      Passing Year
                    </span>
                    <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1652F0]" />
                      {secondary.passingYear}
                    </span>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100/50">
                    <span className="block text-[11px] uppercase tracking-wider text-[#1652F0] font-semibold mb-1">
                      Score / Grade
                    </span>
                    <span className="text-sm font-extrabold text-gray-950">
                      {secondary.gradeOrPercentage}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-600">
                  {secondary.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certificate verified &amp; completed</span>
              </div>
            </div>
          </div>

          {/* Card 2: Junior College (12th Grade) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full">
            {/* Royal Blue accent header */}
            <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">Junior College</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-semibold backdrop-blur-xs">
                12th Grade
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1">
                    {juniorCollege.institution}
                  </h3>
                  <p className="text-sm font-medium text-[#1652F0]">
                    {juniorCollege.title}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                      Passing Year
                    </span>
                    <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1652F0]" />
                      {juniorCollege.passingYear}
                    </span>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100/50">
                    <span className="block text-[11px] uppercase tracking-wider text-[#1652F0] font-semibold mb-1">
                      Score / Grade
                    </span>
                    <span className="text-sm font-extrabold text-gray-950">
                      {juniorCollege.gradeOrPercentage}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-600">
                  {juniorCollege.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Commerce &amp; Information Tech stream</span>
              </div>
            </div>
          </div>

          {/* Card 3: Undergraduate Degree (Current) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-[#1652F0] shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full relative">
            {/* Royal Blue accent header */}
            <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">Undergraduate Degree</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-[#1652F0] text-[11px] font-bold shadow-xs">
                Current
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-950 leading-snug">
                    {undergrad.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#1652F0] mt-1">
                    {undergrad.institution}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <span className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                      Graduation Year
                    </span>
                    <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1652F0]" />
                      {undergrad.passingYear} (Expected)
                    </span>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200">
                    <span className="block text-[11px] uppercase tracking-wider text-[#1652F0] font-semibold mb-1">
                      Latest CGPA
                    </span>
                    <span className="text-sm font-extrabold text-[#1652F0] flex items-center gap-1">
                      <Award className="w-4 h-4 text-[#1652F0]" />
                      9.09 (A+)
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-600">
                  {undergrad.description}
                </p>
              </div>

              {/* Quick Prompt to explore Semester Breakdown */}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href="#semester-breakdown"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-50 text-[#1652F0] text-xs font-bold hover:bg-blue-100 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Semester Breakdown Below
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SEMESTER BREAKDOWN (Expandable tabs / clean sub-cards) */}
        <div id="semester-breakdown" className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1652F0]">Detailed Curriculum</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#1652F0] text-[10px] font-bold">
                  BBA Digital Business
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mt-1">
                Semester Breakdown &amp; Performance
              </h3>
            </div>

            <button
              onClick={() => setIsSemExpanded(!isSemExpanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer self-start sm:self-auto"
            >
              <span>{isSemExpanded ? 'Collapse Semesters' : 'Expand Semesters'}</span>
              {isSemExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {isSemExpanded && (
            <div className="pt-6 space-y-6">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 overflow-x-auto">
                <button
                  onClick={() => setSelectedSemTab('sem1')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedSemTab === 'sem1'
                      ? 'bg-[#1652F0] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Semester 1 (8.55 CGPA · A)
                </button>
                <button
                  onClick={() => setSelectedSemTab('sem2')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedSemTab === 'sem2'
                      ? 'bg-[#1652F0] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  Semester 2 (9.09 CGPA · A+)
                </button>
                <button
                  onClick={() => setSelectedSemTab('sem3')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedSemTab === 'sem3'
                      ? 'bg-[#1652F0] text-white shadow-xs'
                      : 'bg-blue-50 text-[#1652F0] hover:bg-blue-100'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  Semester 3 (In Progress)
                </button>
              </div>

              {/* Tab Content */}
              {selectedSemTab === 'sem1' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-gray-50/70 p-6 rounded-xl border border-gray-100">
                  <div className="md:col-span-8 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Top Subjects Completed
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {undergrad.semesters?.[0].subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-800 bg-white p-2.5 rounded-lg border border-gray-200/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 bg-white p-5 rounded-xl border border-gray-200/80 flex flex-col justify-center space-y-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Academic Assessment
                    </span>
                    <div>
                      <div className="text-2xl font-black text-gray-950">
                        {undergrad.semesters?.[0].cgpa}
                      </div>
                      <div className="text-xs font-bold text-emerald-700 mt-0.5">
                        {undergrad.semesters?.[0].grade} · Distinction
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Completed examination cycle at K.P.B. Hinduja College of Commerce with strong standing in Content Strategy &amp; Storytelling and Market &amp; Brand Intelligence.
                    </p>
                  </div>
                </div>
              )}

              {selectedSemTab === 'sem2' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-blue-50/30 p-6 rounded-xl border border-blue-100">
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1652F0]">
                        Top Subjects &amp; Practical Modules
                      </span>
                      <span className="text-xs font-bold text-[#1652F0] bg-blue-100 px-2 py-0.5 rounded-md">
                        Top Academic Honors
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {undergrad.semesters?.[1].subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-900 bg-white p-2.5 rounded-lg border border-blue-200/70 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1652F0] mt-0.5 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 bg-white p-5 rounded-xl border border-blue-200 flex flex-col justify-center space-y-3 shadow-xs">
                    <span className="text-xs font-semibold text-[#1652F0] uppercase tracking-wider">
                      Official Semester Grade
                    </span>
                    <div>
                      <div className="text-3xl font-black text-gray-950 flex items-center gap-2">
                        {undergrad.semesters?.[1].cgpa}
                        <Award className="w-6 h-6 text-[#1652F0]" />
                      </div>
                      <div className="text-xs font-bold text-[#1652F0] mt-0.5">
                        Grade A+ · Outstanding Performance
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-normal">
                      Achieved semester highest standing with exceptional scores in Brand Strategy &amp; Positioning, Social Media Marketing, and Website Designing.
                    </p>
                  </div>
                </div>
              )}

              {selectedSemTab === 'sem3' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 p-6 rounded-xl border border-gray-200">
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Current Ongoing Modules
                      </span>
                      {/* Active Royal Blue "In Progress" pill badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1652F0] text-white text-xs font-bold shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        In Progress
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {undergrad.semesters?.[2].subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-800 bg-white p-2.5 rounded-lg border border-gray-200">
                          <span className="w-2 h-2 rounded-full bg-[#1652F0] mt-1.5 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-center space-y-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Current Status
                    </span>
                    <div>
                      <div className="text-xl font-bold text-gray-950 flex items-center gap-2">
                        Currently Pursuing
                      </div>
                      <div className="text-xs font-semibold text-[#1652F0] mt-0.5">
                        Term Active · Expected Completion Early 2026
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Focusing on quantitative growth modeling, paid media channels, and advanced data-driven brand architectures.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
