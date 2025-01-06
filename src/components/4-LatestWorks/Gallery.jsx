import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';
import { useTheme } from '../../Context/ThemeContext';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const currentLang = i18n.language;
  const [activeTab, setActiveTab] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [columns, setColumns] = useState(3);

  // Responsive columns handler
  const updateColumns = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setColumns(3);
      setVisibleProjects(6);
    } else if (width >= 768) {
      setColumns(2);
      setVisibleProjects(4);
    } else {
      setColumns(1);
      setVisibleProjects(2);
    }
  }, []);

  useEffect(() => {
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [updateColumns]);

  const categories = [
    { id: 'all', label: t('projects.categories.all') },
    { id: 'web', label: t('projects.categories.web') },
    { id: 'mobile', label: t('projects.categories.mobile') },
    { id: 'design', label: t('projects.categories.design') },
  ];

  const filteredProjects = projects.filter(project => 
    activeTab === 'all' ? true : project.category === activeTab
  );

  // Organize projects into balanced columns
  const organizeProjectsInColumns = (projects, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    projects.forEach((project, index) => {
      columns[index % numColumns].push(project);
    });
    return columns;
  };

  const projectColumns = organizeProjectsInColumns(
    filteredProjects.slice(0, visibleProjects),
    columns
  );

  const handleLoadMore = () => {
    const increment = columns === 3 ? 3 : 2;
    setVisibleProjects(prev => Math.min(prev + increment, filteredProjects.length));
  };

  return (
    <div className={`min-h-screen mt-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} font-cairo`}>
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-5xl font-bold mb-6 
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
              bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text`}
            >
              {t('projects.title')}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"
            />
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('projects.description')}
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setVisibleProjects(columns === 3 ? 6 : columns === 2 ? 4 : 2);
                }}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeTab === category.id 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                    : `${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'} 
                       hover:shadow-md hover:scale-105`
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projectColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-6 md:space-y-8">
                <AnimatePresence mode="wait">
                  {column.map((project, index) => (
                    <motion.div
                      key={project.titleEn}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <ProjectCard 
                        {...project} 
                        currentLang={currentLang} 
                        isDarkMode={isDarkMode}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > visibleProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-xl font-medium
                  bg-gradient-to-r from-blue-500 to-blue-600
                  text-white shadow-lg hover:scale-105
                  transition-all duration-300"
              >
                {currentLang === 'ar' ? 'عرض المزيد' : 'Load More'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
