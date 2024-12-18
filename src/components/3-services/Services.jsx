import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Smartphone, Palette, Rocket, Globe, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';

const ServiceCard = ({ icon: Icon, title, description, link, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 font-cairo rounded-xl backdrop-blur-xl border ${
        isDarkMode ? 'border-white/10' : 'border-black/5'
      } overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
    >
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        className={`absolute inset-0 bg-gradient-to-br ${
          isDarkMode 
            ? 'from-blue-400/20 via-sky-500/20 to-indigo-400/20'
            : 'from-blue-300/30 via-sky-400/20 to-indigo-300/20'
        } blur-xl`}
      />

      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${
          isDarkMode 
            ? 'from-blue-400/20 via-sky-500/20 to-indigo-400/20'
            : 'from-blue-300/30 via-sky-400/20 to-indigo-300/20'
        } blur-xl`} />
      </div>

      <Link to={link} onClick={handleClick} className="relative z-10">
        <div className="mb-6 relative flex justify-center">
          <div className={`w-16 h-16 rounded-xl ${
            isDarkMode
              ? 'bg-gradient-to-br from-blue-400 to-sky-500'
              : 'bg-gradient-to-br from-blue-500 to-sky-500'
          } p-0.5`}>
            <div className={`w-full h-full ${
              isDarkMode ? 'bg-gray-950' : 'bg-white'
            } rounded-xl flex items-center justify-center`}>
              <Icon className={`w-8 h-8 ${
                isDarkMode 
                  ? 'text-blue-400 group-hover:text-sky-400'
                  : 'text-blue-600 group-hover:text-sky-600'
              } transition-colors`} />
            </div>
          </div>
        </div>

        <h3 className={`text-2xl text-center font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
          isDarkMode 
            ? 'from-blue-400 to-sky-400'
            : 'from-blue-600 to-sky-600'
        } transition-all duration-300`}>
          {title}
        </h3>

        <p className={`${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        } leading-relaxed`}>
          {description}
        </p>
      </Link>

      <div className={`absolute inset-0 border ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      } rounded-xl ${
        isDarkMode 
          ? 'group-hover:border-blue-500/50'
          : 'group-hover:border-sky-400/50'
      } transition-colors duration-300`} />
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Services = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();

  const services = [
    { icon: Globe, title: t('services.web.title'), description: t('services.web.desc'), link: '/services/web' },
    { icon: Smartphone, title: t('services.mobile.title'), description: t('services.mobile.desc'), link: '/services/mobile' },
    { icon: Code2, title: t('services.custom.title'), description: t('services.custom.desc'), link: '/services/custom' },
    { icon: Palette, title: t('services.ui.title'), description: t('services.ui.desc'), link: '/services/ui' },
    { icon: Brain, title: t('services.ai.title'), description: t('services.ai.desc'), link: '/services/ai' },
    { icon: Rocket, title: t('services.marketing.title'), description: t('services.marketing.desc'), link: '/services/marketing' },
  ];

  return (
    <section
      id="services"
      className={`relative py-8 overflow-hidden ${
        isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
      } ${i18n.language === 'ar' ? 'font-cairo' : 'font-cairo'}`}
    >
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black'
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`} />
      
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDarkMode 
            ? 'from-transparent via-blue-500/5 to-transparent'
            : 'from-transparent via-blue-200/10 to-transparent'
        } transform rotate-30 blur-3xl animate-pulse-slow`} />
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode 
            ? 'from-transparent via-sky-500/5 to-transparent'
            : 'from-transparent via-sky-200/10 to-transparent'
        } transform -rotate-50 blur-3xl animate-pulse-slower`} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('services.title')}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            className={`h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-500 via-sky-500 to-blue-500'
                : 'from-blue-500 via-sky-500 to-blue-500'
            } mx-auto rounded-full mb-4`}
          />

          <p className={`${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } text-lg mb-8 max-w-2xl mx-auto`}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <div className="mt-6 md:mt-6 sm:mt-4 text-center">
          <Link
            to="/all-services"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`inline-flex items-center gap-1.5 px-6 py-2 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-500 to-sky-600'
                : 'bg-gradient-to-r from-blue-600 to-sky-700'
            } text-white rounded-md transition-all hover:scale-105`}
          >
            <span className="font-cairo text-md">
              {t('services.viewAllServices')}
            </span>
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
