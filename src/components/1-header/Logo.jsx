import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Logo() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    location.pathname === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : navigate('/');
  };

  return (
    <Link to="/" onClick={handleLogoClick}>
      <div className="relative w-full max-w-[250px] h-[80px] flex items-center justify-center">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 2, 0],
          }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <defs>
            <linearGradient id="cloudGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isDarkMode ? '#60A5FA' : '#93C5FD'} />
              <stop offset="50%" stopColor={isDarkMode ? '#3B82F6' : '#60A5FA'} />
              <stop offset="100%" stopColor={isDarkMode ? '#1E40AF' : '#3B82F6'} />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3"
                floodColor={isDarkMode ? '#60A5FA' : '#3B82F6'}
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          <motion.path
            d="M80 55c0 11.3-0.7 16-17 16H25c-10.6 0-20-7.4-20-16s9.4-16 20-17c1-11.2 10.7-19 22-19s21 7.7 22 19c12 0 23 7.4 23 16s-7 16-15 14c-3   2s-3-6-1-7c2-1 3 0 3-12z"
            fill="url(#cloudGradient)"
            stroke={isDarkMode ? '#60A5FA' : '#3B82F6'}
            strokeWidth="2.5"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          <motion.text

            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={isDarkMode ? '#ffffff' : '#ffffff'}
            fontSize="28"
            fontWeight="900"
            fontFamily="tajawal, sans-serif"
            filter="url(#shadow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('common.name')}
          </motion.text>
        </motion.svg>

        <motion.div
          className="absolute w-full h-full -z-10 opacity-55 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${isDarkMode ? '#60A5FA' : '#3B82F6'
              } 10%, transparent 70%)`,
          }}
        />
      </div>
    </Link>
  );
}
