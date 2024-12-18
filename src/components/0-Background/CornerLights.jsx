import { useTheme } from '../../Context/ThemeContext';

export default function ResponsiveLights() {
  const { isDarkMode } = useTheme();
  const isRTL = document.documentElement.dir === 'rtl';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary Ambient Light */}
      <div className={`
        absolute inset-0
        bg-gradient-radial
        ${isDarkMode 
          ? 'from-indigo-500/20 via-purple-400/10 to-transparent'
          : 'from-sky-400/30 via-indigo-300/20 to-transparent'
        }
        transition-opacity duration-1000
        animate-pulse-slow
      `} />

      {/* Corner Accents */}
      <div className={`
        absolute ${isRTL ? 'right-0' : 'left-0'} top-0
        w-full h-full max-w-[50vw] max-h-[50vh]
        bg-gradient-conic
        ${isDarkMode
          ? 'from-violet-500/20 via-indigo-400/15 to-blue-300/10'
          : 'from-blue-300/30 via-indigo-300/25 to-violet-300/20'
        }
        blur-2xl
        animate-gentle-float
      `} />

      {/* Dynamic Background Pattern */}
      <div className={`
        absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'}
        w-full h-full max-w-[60vw] max-h-[60vh]
        bg-[conic-gradient(from_180deg,#93C5FD,#A5B4FC,#C4B5FD,#93C5FD)]
        ${isDarkMode ? 'opacity-15' : 'opacity-25'}
        blur-3xl
        animate-gentle-spin
      `} />

      {/* Responsive Center Glow */}
      <div className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[80vw] h-[80vh]
        bg-gradient-radial
        ${isDarkMode
          ? 'from-purple-500/10 via-indigo-400/5 to-transparent'
          : 'from-sky-300/20 via-indigo-200/10 to-transparent'
        }
        blur-2xl
        animate-breathe
      `} />
    </div>
  );
}
