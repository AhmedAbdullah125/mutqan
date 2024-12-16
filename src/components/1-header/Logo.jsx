import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Logo() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const dropletVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Link to="#home">
      <motion.div 
        className="flex items-center gap-2 cursor-pointer"
        variants={logoVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative p-1 rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400">
          <motion.div
            variants={dropletVariants}
            animate="animate"
            className="relative z-10"
          >
            <BrainCircuit
              className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-white'}`}
            />
          </motion.div>
          
          <div className={`absolute inset-0 rounded-full animate-pulse blur-2xl opacity-50 transition-colors duration-300 ${isDarkMode ? 'bg-orange-500 opacity-40' : 'bg-orange-500 opacity-40'}`} />
        </div>

        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-3xl font-bold font-cairo ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`}>
            {t('common.name')}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
