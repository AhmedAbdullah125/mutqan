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
      className={`relative  cairo py-8 overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            isDarkMode
              ? 'from-gray-900 via-indigo-700/20 to-transparent'
              : 'from-gray-50 via-blue-200/30 to-transparent'
          } transform rotate-45 blur-2xl`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isDarkMode
              ? 'from-black via-purple-700/10 to-transparent'
              : 'from-white via-purple-300/10 to-transparent'
          } transform -rotate-45 blur-3xl`}
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
            className={`h-1 bg-gradient-to-r ${
              isDarkMode
                ? 'from-emerald-500 via-blue-500 to-emerald-500'
                : 'from-emerald-400 via-blue-400 to-emerald-400'
            } mx-auto rounded-full mb-4`}
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
                  ? 'border-gray-800/50 hover:shadow-emerald-500/20'
                  : 'border-gray-200 hover:shadow-emerald-400/30'
              } overflow-hidden transition-shadow duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode
                    ? 'from-emerald-500/5 to-yellow-500/5'
                    : 'from-blue-200/10 to-yellow-300/10'
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
            href="/projects"
            className={`inline-flex items-center gap-1 px-5 py-3 ${
              isDarkMode
                ? 'bg-gradient-to-r from-yellow-400 to-emerald-600 hover:bg-gradient-to-r hover:from-blue-400 hover:to-emerald-500'
                : 'bg-gradient-to-r from-yellow-500 to-emerald-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-600'
            } text-white rounded-md shadow-lg transition-all`}
          >
            <span className="font-tajawal text-sm">{t('works.viewMore')}</span>
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWorks;
