import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-500/5 to-transparent transform rotate-30 blur-3xl animate-pulse-slow" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent transform -rotate-50 blur-3xl animate-pulse-slower" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold text-center text-white mb-6 ${currentLang === 'ar' ? 'font-cairo' : 'font-cairo'}`}
          >
            {t('projects.title')}
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            className="h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-gray-400 text-center max-w-3xl mx-auto text-lg ${currentLang === 'ar' ? 'font-tajawal' : 'font-poppins'}`}
          >
            {t('projects.description')}
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} currentLang={currentLang} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-6 ${currentLang === 'ar' ? 'font-tajawal' : 'font-poppins'}`}>
            {t('projects.ctaTitle')}
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-emerald-600 text-white rounded-lg hover:scale-105 transition-transform"
          >
            <span className={`font-medium ${currentLang === 'ar' ? 'font-tajawal' : 'font-poppins'}`}>
              {t('projects.ctaButton')}
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
