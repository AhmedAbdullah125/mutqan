import { useTheme } from '../../Context/ThemeContext';

export default function CornerLights() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="hidden md:block">
      <div className={`absolute top-0 left-0 w-[30vw] h-[30vw] bg-gradient-radial ${
        isDarkMode ? 'from-blue-500/15 via-blue-500/5' : 'from-emerald-400/20 via-emerald-400/5'
      } to-transparent blur-2xl transform-gpu`} />
      <div className={`absolute top-0 right-0 w-[30vw] h-[30vw] bg-gradient-radial ${
        isDarkMode ? 'from-purple-500/15 via-purple-500/5' : 'from-amber-400/20 via-amber-400/5'
      } to-transparent blur-2xl transform-gpu`} />
      <div className={`absolute bottom-20 left-50 w-[50vw] h-[40vw] bg-gradient-radial ${
        isDarkMode ? 'from-emerald-500/15 via-emerald-500/5' : 'from-orange-400/20 via-orange-400/5'
      } to-transparent blur-2xl transform-gpu`} />
    </div>
  );
}
