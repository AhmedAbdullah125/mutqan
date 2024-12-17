import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';
import BackgroundEffects from './BackgroundEffects';
import HeroContent from './HeroContent';

function HeroSection() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Main scroll animations
  const badgeOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const badgeY = useTransform(scrollY, [0, 100], [0, -50]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  // Item animations with spring effect
  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Enhanced 3D image animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id='home' className="relative overflow-hidden  py-2 md:py-6 lg:py-20 xl:py-4 2xl:py-10  ">
      <BackgroundEffects />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0  ">
        {/* Floating Badge with 3D Effect */}
        <motion.div
          style={{ opacity: badgeOpacity, y: badgeY }}
          className="relative top-16  sm:top-18 md:top-18 lg:top-20  xl:top-20  mb-2 sm:mb-0 md:mb-2 lg:mb-0 xl:mb-7  z-50 flex justify-center"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className={`
              inline-flex items-center gap-2
              px-4 py-2 sm:px-3 sm:py-1.5
              rounded-full shadow-lg
              backdrop-blur-sm
              transition-all duration-300
              ${isDarkMode 
                ? 'bg-gray-800/90 border border-white/10' 
                : 'bg-white/90 border border-black/5'}
            `}
          >
            <ShieldCheck className={`
             
              w-4 h-4             
              ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}
            `} />
            <span className={`
              text-sm  cairo
              ${isDarkMode ? 'text-white/90' : 'text-black/90'}
            `}>
              {t('hero.badge')}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="  ">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-2 items-center"
          >
            {/* Content Column */}
            <motion.div 
              variants={itemVariants}
              className="order-2 md:order-1"
            >
              <HeroContent />
            </motion.div>

            {/* Image Column with 3D Effects */}
            <motion.div 
              variants={imageVariants}
              className="order-1  lg:order-2 m-2  mt-20 sm:mt-24 md:mt-16  lg:mt-0 xl:mt-14 md:mt-24 lg:mt-20 xl:mt-24"
            >
              <div className="relative h-full w-full aspect-square xs:aspect-[8/7] sm:aspect-[8/7] md:aspect-[8/7] lg:aspect-[8/6] xl:aspect-[8/7]   ">
                <div className="absolute inset-0 p-2 lg:p-4">
                  {/* Animated Corner Decorations */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 border-r-4 border-t-4 rounded-xl border-sky-500/40 rounded-tr-3xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                    className="absolute bottom-0 left-0 w-16 h-16 lg:w-20 lg:h-20 border-l-4 border-b-4 rounded-xl border-sky-500/40 rounded-bl-3xl"
                  />

                  {/* Main Image with Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src="../../../Public/assets/hero2.png"
                      alt="Hero Image"
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
