import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ConnectFooter from './components/ConnectFooter';
import CaseStudyModal from './components/CaseStudyModal';
import AchievementModal from './components/AchievementModal';
import EditProfileModal from './components/EditProfileModal';
import PdfViewerModal from './components/PdfViewerModal';
import { initialProfile, initialAcademics, initialProjects, initialAchievements } from './data/portfolioData';
import { AcademicItem, AchievementItem, PortfolioProfile, ProjectItem } from './types/portfolio';

export default function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    const saved = localStorage.getItem('anjali_portfolio_profile_v3');
    if (saved) {
      try {
        return { ...initialProfile, ...JSON.parse(saved) };
      } catch (e) {
        console.error(e);
      }
    }
    return initialProfile;
  });

  const [academics, setAcademics] = useState<AcademicItem[]>(() => {
    const saved = localStorage.getItem('anjali_portfolio_academics_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialAcademics;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('anjali_portfolio_projects_v3');
    if (saved) {
      try {
        const parsed: ProjectItem[] = JSON.parse(saved);
        if (parsed.length >= initialProjects.length) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return initialProjects;
  });

  const [achievements] = useState<AchievementItem[]>(initialAchievements);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activePdfProject, setActivePdfProject] = useState<ProjectItem | null>(null);
  const [isCvPdfOpen, setIsCvPdfOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalMode, setEditModalMode] = useState<'profile' | 'addProject'>('profile');

  // Persistence
  useEffect(() => {
    localStorage.setItem('anjali_portfolio_profile_v3', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('anjali_portfolio_academics_v5', JSON.stringify(academics));
  }, [academics]);

  useEffect(() => {
    localStorage.setItem('anjali_portfolio_projects_v3', JSON.stringify(projects));
  }, [projects]);

  const handleUpdatePortrait = (url: string) => {
    setProfile((prev) => ({ ...prev, portraitUrl: url }));
  };

  const handleSaveProfile = (newProfile: PortfolioProfile, newAcademics: AcademicItem[]) => {
    setProfile(newProfile);
    setAcademics(newAcademics);
  };

  const handleAddNewProject = (project: ProjectItem) => {
    setProjects((prev) => [project, ...prev]);
  };

  const scrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCvPdf = () => {
    setActivePdfProject(null);
    setIsCvPdfOpen(true);
  };

  const closePdfModal = () => {
    setActivePdfProject(null);
    setIsCvPdfOpen(false);
  };

  const activePdfUrl = isCvPdfOpen ? profile.cvPdfUrl : activePdfProject?.pdfUrl || '';
  const activePdfTitle = isCvPdfOpen
    ? `${profile.name} — Curriculum Vitae (CV)`
    : activePdfProject?.pdfTitle || activePdfProject?.title || 'Presentation Deck';
  const activePdfCategory = isCvPdfOpen
    ? 'Official Resume / CV'
    : activePdfProject?.category;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#1652F0] selection:text-white">
      {/* 3-Zone Sticky Top Navigation */}
      <Navbar onOpenConnect={scrollToConnect} />

      <main className="flex-1">
        {/* Section 1: Hero / About Me */}
        <Hero
          profile={profile}
          onUpdatePortrait={handleUpdatePortrait}
          onOpenCvPdf={openCvPdf}
        />

        {/* Section 2: Academics */}
        <Academics
          academics={academics}
          onOpenEditModal={() => {
            setEditModalMode('profile');
            setIsEditModalOpen(true);
          }}
        />

        {/* Section 3: Projects */}
        <Projects
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenPdfViewer={(proj) => {
            setIsCvPdfOpen(false);
            setActivePdfProject(proj);
          }}
          onOpenAddProjectModal={() => {
            setEditModalMode('addProject');
            setIsEditModalOpen(true);
          }}
        />

        {/* Section 4: Achievements */}
        <Achievements
          achievements={achievements}
          onSelectAchievement={(item) => setSelectedAchievement(item)}
        />
      </main>

      {/* Section 5: Connect With Me (Footer) */}
      <ConnectFooter
        profile={profile}
        onOpenCvPdf={openCvPdf}
        onEditProfile={() => {
          setEditModalMode('profile');
          setIsEditModalOpen(true);
        }}
      />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPdfViewer={(proj) => {
          setIsCvPdfOpen(false);
          setActivePdfProject(proj);
        }}
      />

      {/* Interactive In-App PDF Deck & CV Viewer Modal */}
      <PdfViewerModal
        isOpen={isCvPdfOpen || !!activePdfProject}
        onClose={closePdfModal}
        pdfUrl={activePdfUrl}
        title={activePdfTitle}
        projectCategory={activePdfCategory}
        externalLink={isCvPdfOpen ? undefined : activePdfProject?.externalLinks?.[0]}
      />

      {/* Achievement Spotlight Modal */}
      <AchievementModal
        item={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />

      {/* Edit Profile & Academics Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        academics={academics}
        onSaveProfile={handleSaveProfile}
        onAddNewProject={handleAddNewProject}
        mode={editModalMode}
      />
    </div>
  );
}
