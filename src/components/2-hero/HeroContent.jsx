import { motion } from 'framer-motion';
import { PhoneIncoming } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PartnersSlider from './PartnersSlider';
import { useTheme } from '../../Context/ThemeContext';

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }
};

export default function HeroContent() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const isRTL = document.documentElement.dir === 'rtl';

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      variants={animations.container}
      initial="hidden"
      animate="visible"
      className={`
        max-w-6xl mx-auto  
        text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}
        xl:pt-4 md:mt-0 sm:pt-4 xs:pt-3 lg:mt-0 lg:px-0 xl:px-5 md:px-4 sm:px-4 xs:px-2 relative
      `}
    >
      <motion.h1
        variants={animations.item}
        className={`
          md:mx-auto cairo 
          inline-block  
          text-5xl sm:text-6xl md:text-5xl lg:text-6xl 2xl:text-7xl
          md:py-4 sm:py-2 mt-2 md:mt-0 lg:mt-12 xl:mt-6 2xl:mt-8
          font-bold mb-4 xl:mb-2 md:mb-4 sm:mb-6 
          ${isDarkMode ? 'text-white' : 'text-gray-900'}
          leading-tight tracking-tight
        `}
      >
        <span className="line-lg">
          {t('hero.title.part1')}{' '}
          <br className="hidden sm:block" />
          {t('hero.title.part2')}{' '}
          <br className="hidden sm:block" />
          <span className={`
            inline-block text-transparent bg-clip-text animate-shimmer
            ${isDarkMode 
              ? 'bg-gradient-to-tr from-orange-400 to-orange-600' 
              : 'bg-gradient-to-tr from-orange-500 to-orange-700'}
          `}>
            {t('hero.title.part3')}
          </span>
        </span>
      </motion.h1>

      <motion.div
        variants={animations.item}
        className="flex flex-row pt-3 sm:pt-3 md:pt-1 items-center justify-center lg:justify-start gap-2"
      >
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            group relative
            px-4 py-2
            xs:rounded-xl rounded-2xl
            flex items-center justify-center
            shadow-lg hover:shadow-xl
            transition-all duration-300 ease-in-out
            ${isDarkMode
              ? 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600'
              : 'bg-gradient-to-tr from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'}
            text-white cairo text-base sm:text-lg
          `}
        >
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span>{t('hero.buttons.start')}</span>
            <PhoneIncoming
              className={`
                w-4 h-4 transition-transform duration-300
                ${isRTL ? 'group-hover:-translate-x-2' : '-rotate-90 group-hover:translate-x-2'}
              `}
            />
          </div>
        </motion.button>

        <Link to="/gallery">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-4 py-2
              rounded-2xl xs:rounded-xl
              shadow-lg hover:shadow-xl
              transition-all duration-300
              ${isDarkMode 
                ? 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                : 'bg-white text-orange-600 hover:bg-orange-50'}
              cairo text-base sm:text-lg
              border border-orange-500/20
            `}
          >
            {t('hero.buttons.work')}
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        variants={animations.item}
       
      >
        <PartnersSlider />
      </motion.div>
    </motion.div>
  );
}
