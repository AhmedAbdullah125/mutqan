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
        max-w-7xl mx-0  sm:px-2  
        text-center ${isRTL ? 'md:text-right' : 'md:text-left'}
        xl:pt-4 md:mt-14 sm:pt-4 xs:pt-3 lg:mt-6 md:px-0 xl:px-2  sm:px-4 xs:px-2 relative
      `}
    >
      <motion.h1
        variants={animations.item}
        className={`
           cairo 
          
          text-5xl sm:text-6xl md:text-4xl md:leading-tight  lg:text-5xl  xl:text-6xl 2xl:text-7xl
          md:py-4 sm:py-2 mt-2 md:mt-0 lg:mt-12 xl:mt-6 2xl:mt-8
          font-bold
          ${isDarkMode ? 'text-white' : 'text-gray-900'}
        
        `}
      >
        <span className="line-lg">
          {t('hero.title.part1')}{' '}
          {t('hero.title.part2')}
         
          <span className={`
            inline-block 
            ${isDarkMode 
              ? 'secondary' 
              : 'primary'}
          `}>
            {t('hero.title.part3')}
          </span>
        </span>
      </motion.h1>

      <motion.div
        variants={animations.item}
        className="flex flex-row pt-3 sm:pt-3 md:pt-0 font-semibold  items-center justify-center md:justify-start gap-2  md:gap-3"
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
=            ${isDarkMode
              ? 'bg-secondary hover:bg-secondaryhover'
              : 'bg-primary '}
            text-white cairo  text-sm  lg:text-md
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
                ? 'bg-white secondary hover:bg-sky-50'
                : 'bg-white primary hover:bg-blue-50'}
              cairo text-base text-sm lg:text-md
               
            `}
          >
            {t('hero.buttons.work')}
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        variants={animations.item}
        className={`
          cairo text-lg mx-2
          mt-3 sm:mt-4 md:mt-3 lg:mt-5 xl:mt-6 2xl:mt-8  
          
        `}
      >
        <PartnersSlider  />
      </motion.div>
    </motion.div>
  );
}
