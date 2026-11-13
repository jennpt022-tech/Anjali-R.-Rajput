import { X, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementModalProps {
  item: AchievementItem | null;
  onClose: () => void;
}

export default function AchievementModal({ item, onClose }: AchievementModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full border border-gray-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1652F0] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-wider">Achievement Spotlight</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1652F0] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {item.badgeCategory}
            </span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {item.dateOrYear}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-950 tracking-tight mb-2">
              {item.title}
            </h3>
            <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm font-bold text-gray-900">
                "{item.highlight}"
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Description &amp; Campus Context
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200/70 flex items-center gap-2.5 text-xs text-gray-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>K.P.B. Hinduja College of Commerce, Mumbai</span>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-[#1652F0] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
