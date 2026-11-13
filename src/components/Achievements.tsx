import { Award, Mic, Trophy, Users, Star, ArrowUpRight } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
  onSelectAchievement?: (item: AchievementItem) => void;
}

export default function Achievements({ achievements, onSelectAchievement }: AchievementsProps) {
  const getIcon = (type: AchievementItem['iconType']) => {
    switch (type) {
      case 'academic':
        return <Award className="w-6 h-6 text-white" />;
      case 'speaker':
        return <Mic className="w-6 h-6 text-white" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-white" />;
      case 'leadership':
        return <Users className="w-6 h-6 text-white" />;
      default:
        return <Star className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50/70 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1652F0]">
              <Trophy className="w-4 h-4" />
              <span>Recognitions &amp; Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Key Honours &amp; Campus Impact
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Recognized across academic excellence, student mentorship, and inter-collegiate brand communication competitions.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1652F0]" />
            <span>K.P.B. Hinduja College of Commerce</span>
          </div>
        </div>

        {/* Clean 3-Column Grid with Royal Blue Icon Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAchievement?.(item)}
              className="bg-white rounded-2xl border border-gray-200/90 p-8 shadow-xs hover:shadow-lg hover:border-[#1652F0]/50 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Top Row: Royal Blue Icon Badge + Year Tag */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#1652F0] flex items-center justify-center shadow-md shadow-[#1652F0]/20 transition-transform duration-200 group-hover:scale-105">
                    {getIcon(item.iconType)}
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200/60">
                    {item.dateOrYear}
                  </span>
                </div>

                {/* Badge Category & Title */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1652F0] block mb-1">
                    {item.badgeCategory}
                  </span>
                  <h3 className="text-xl font-bold text-gray-950 tracking-tight leading-snug group-hover:text-[#1652F0] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Highlight Quote / Pill callout */}
                <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl">
                  <p className="text-sm font-bold text-gray-900 leading-snug">
                    "{item.highlight}"
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1652F0]">
                <span>Verified College Honor</span>
                <div className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
