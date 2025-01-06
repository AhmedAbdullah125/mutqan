import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';
import { projects } from '../4-LatestWorks/projectsData';

import {
  HeroSection,
  NavigationTabs,
  OverviewSection,
  FeaturesSection,
  TechnicalSection,
  ProcessSection,
  RelatedProjects,
  CallToAction
} from './Sections';

const ProjectDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const currentLang = i18n.language;
  const [activeSection, setActiveSection] = useState('overview');

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const sections = [
    { id: 'overview', label: currentLang === 'ar' ? 'نظرة عامة' : 'Overview' },
    { id: 'features', label: currentLang === 'ar' ? 'المميزات' : 'Features' },
    { id: 'technical', label: currentLang === 'ar' ? 'التفاصيل التقنية' : 'Technical Details' },
    { id: 'process', label: currentLang === 'ar' ? 'مراحل التطوير' : 'Development Process' }
  ];

  return (
    <div className={`min-h-screen mt-20 font-[cairo] ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <HeroSection project={project} currentLang={currentLang} isDarkMode={isDarkMode} />
      
      <NavigationTabs 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
      />

      <div className="container mx-auto px-4 py-12">
        {activeSection === 'overview' && (
          <OverviewSection project={project} currentLang={currentLang} isDarkMode={isDarkMode} />
        )}
        {activeSection === 'features' && (
          <FeaturesSection project={project} currentLang={currentLang} isDarkMode={isDarkMode} />
        )}
        {activeSection === 'technical' && (
          <TechnicalSection project={project} currentLang={currentLang} isDarkMode={isDarkMode} />
        )}
        {activeSection === 'process' && (
          <ProcessSection project={project} currentLang={currentLang} isDarkMode={isDarkMode} />
        )}
      </div>

      <CallToAction 
        project={project}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
      />

      <RelatedProjects 
        currentProject={project}
        projects={projects}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
      />

     
    </div>
  );
};

export default ProjectDetails;
