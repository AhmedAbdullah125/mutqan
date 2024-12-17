import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';
import { partners }from './Partenrs';


const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
};

function PartnersSlider() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const isRTL = document.documentElement.dir === 'rtl'; // Check if RTL is enabled
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Set items per view based on screen size
  const getItemsPerView = useCallback(() => {
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 3; // desktop
  }, []);

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerView]);

  const totalSlides = Math.ceil(partners.length / itemsPerView);

  // Handle slide navigation with direction adjustment for RTL
  const navigateSlide = useCallback((newDirection) => {
    const adjustedDirection = isRTL ? -newDirection : newDirection;
    setDirection(adjustedDirection);
    setIsPaused(true);

    setCurrentIndex((prev) => {
      const next = adjustedDirection > 0
        ? (prev + 1) % totalSlides
        : (prev - 1 + totalSlides) % totalSlides;
      return next;
    });

    setTimeout(() => setIsPaused(false), 3000);
  }, [totalSlides, isRTL]);

  useEffect(() => {
    if (!isAutoplay || isPaused) return;
    const timer = setInterval(() => navigateSlide(1), 3000);
    return () => clearInterval(timer);
  }, [isAutoplay, isPaused, navigateSlide]);

  const getCurrentSlidePartners = useCallback(() => {
    const startIndex = currentIndex * itemsPerView;
    return partners.slice(startIndex, startIndex + itemsPerView);
  }, [currentIndex, itemsPerView]);

  // Scroll event listener to stop autoplay when scrolling down and resume when back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsAutoplay(false);
      } else {
        setIsAutoplay(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      {/* Title Section */}
      <h3 className={`text-sm md:text-md font-semibold  cairo text-center 
         ${isDarkMode ? 'text-white' : 'text-gray-900'}
         ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
        {t('ourPartners.title')}
      </h3>

      {/* Navigation Buttons */}
      <div className="relative mt flex justify-center items-center sm:left-0 sm:right-0  md:-left-5 md:-right-5 flex-col items-center lg:w-fit">
        <div className="relative flex justify-center sm:items-center lg:justify-start w-full">
          <button
            onClick={() => navigateSlide(isRTL ? 1 : -1)}
            className={`w-10 h-10    flex items-center justify-center rounded-full transition-colors duration-200 shadow-lg
              ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {isRTL ? (
              <ChevronRight className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <ChevronLeft className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>

          {/* Slider Content */}
          <div className="flex mt-6 items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2`}
              >
                {getCurrentSlidePartners().map((partner) => (
                  <motion.div
                    key={partner.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}`}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className=" xs:w-24 xs:h-18 sm:h-20  md:w-24 md:h-20 xl:h-24 object-contain transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => navigateSlide(isRTL ? -1 : 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 shadow-lg
              ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {isRTL ? (
              <ChevronLeft className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <ChevronRight className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-3 gap-1">
          {[...Array(totalSlides)].map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${currentIndex === index ? (isDarkMode ? ' bg-primary w-4' : 'bg-secondary  w-4') : (isDarkMode ? 'bg-white/20' : 'bg-black/20')}`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(PartnersSlider);
