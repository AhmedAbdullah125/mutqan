import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';
import BackgroundEffects from './BackgroundEffects';
import HeroContent from './HeroContent';
import FeatureSection from './FeatureSection';

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
    <section id='home' className="relative min-h-screen">
      <BackgroundEffects />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Badge with 3D Effect */}
        <motion.div
          style={{ opacity: badgeOpacity, y: badgeY }}
          className="sticky top-24 z-50 flex justify-center"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className={`
              inline-flex items-center gap-2
              px-4 py-2.5
              rounded-full shadow-lg
              backdrop-blur-sm
              transition-all duration-300
              ${isDarkMode 
                ? 'bg-gray-800/90 border border-white/10' 
                : 'bg-white/90 border border-black/5'}
            `}
          >
            <ShieldCheck className={`
              w-5 h-5 
              ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}
            `} />
            <span className={`
              text-sm font-medium cairo
              ${isDarkMode ? 'text-white/90' : 'text-black/90'}
            `}>
              {t('hero.badge')}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="pt-32 pb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Content Column */}
            <motion.div 
              variants={itemVariants}
              className="order-2 lg:order-1"
            >
              <HeroContent />
            </motion.div>

            {/* Enhanced Image Column with 3D Effects */}
            <motion.div 
              variants={imageVariants}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/2]">
                <div className="absolute inset-0 p-4 lg:p-6">
                  {/* Animated Corner Decorations */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 border-r-4 border-t-4 border-orange-500/20 rounded-tr-3xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                    className="absolute bottom-0 left-0 w-16 h-16 lg:w-20 lg:h-20 border-l-4 border-b-4 border-orange-500/20 rounded-bl-3xl"
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
                      src="/assets/hero2.png"
                      alt="Hero Image"
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <FeatureSection />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
