import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const LatestWorks = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const currentLang = i18n.language;

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="latestworks"
      className={`relative  cairo py-8 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br  ${isDarkMode 
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-50' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-70'}
          `}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {t('works.title')}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            className={`h-1 bg-blue-500
             mx-auto rounded-full mb-4`}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } text-lg mb-8 max-w-2xl mx-auto`}
          >
            {t('works.subtitle')}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.titleEn}
              variants={cardVariants}
              className={`relative rounded-lg shadow-md backdrop-blur-md border ${
                isDarkMode
                  ? 'border-gray-800/50 hover:shadow-blue-500/30'
                  : 'border-gray-200 hover:shadow-blue-400/40'
              } overflow-hidden transition-shadow duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode
                    ? 'from-blue-500/5 to-blue-500/5'
                    : 'from-blue-200/10 to-blue-300/10'
                } blur-lg`}
              />
              <ProjectCard {...project} currentLang={currentLang} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Gallery"
            className={`inline-flex items-center gap-1 px-5 py-3 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500'
                : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600'
            } text-white rounded-md shadow-lg transition-all`}
          >
            <span >{t('works.viewMore')}</span>
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWorks;
