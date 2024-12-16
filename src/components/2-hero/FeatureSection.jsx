import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import { ThumbsUp, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { memo, useRef, useMemo } from 'react';
import FeatureCard from './FeatureCard';

const FeatureSection = memo(function FeatureSection() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    margin: "-5%",
    amount: 0.1
  });

  const features = useMemo(() => [
    {
      icon: ThumbsUp,
      title: t('features.quality.title'),
      description: t('features.quality.description'),
      gradient: 'from-teal-600  to-emerald-500'
    },
    {
      icon: Zap,
      title: t('features.speed.title'), 
      description: t('features.speed.description'),
      gradient: 'from-teal-600  to-emerald-500'
    },
    {
      icon: ShieldCheck,
      title: t('features.security.title'),
      description: t('features.security.description'),
      gradient: 'from-teal-600  to-emerald-500'
    }
  ], [t]);

  const styles = useMemo(() => ({
    title: `text-3xl md:text-3xl font-semibold mb-2  cairo
      ${isDarkMode ? 'text-white' : 'text-gray-900'}`
  }), [isDarkMode]);

  return (
    <section ref={sectionRef} id="features" className=" relative overflow-hidden -">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center   "
      >
        <h2 className={styles.title}>{t('features.mainTitle')}</h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            className={`h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-500 via-blue-500 to-emerald-500'
                : 'from-emerald-500 to-yellow-500'
            } mx-auto rounded-full  mb-4 xs:mb-3 md:mb-4 lg:mb-5`}
          />      </motion.div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isDarkMode={isDarkMode}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeatureSection;
