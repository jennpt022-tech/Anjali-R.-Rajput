import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export default function Navbar({ onOpenConnect }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'academics', 'projects', 'achievements', 'connect'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Minimal Blue Logo */}
          <a
            href="#about"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1652F0] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1652F0] flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
              AR
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-gray-900 group-hover:text-[#1652F0] transition-colors whitespace-nowrap">
                Anjali Rajput
              </span>
              <span className="text-[11px] font-medium text-gray-500 tracking-wider uppercase whitespace-nowrap">
                Digital Business
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Section Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#1652F0] font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1652F0] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Solid Royal Blue Pill Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConnect}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1652F0] text-white text-sm font-semibold shadow-xs hover:bg-[#1242c7] active:scale-98 transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              Connect With Me
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1652F0]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#1652F0] hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="w-full flex items-center justify-center px-5 py-3 rounded-full bg-[#1652F0] text-white text-sm font-semibold shadow-xs hover:bg-[#1242c7] transition-colors cursor-pointer"
            >
              Connect With Me
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
