import { useTheme } from '../../Context/ThemeContext';

export default function CornerLights() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="hidden md:block">
      <div className={`absolute top-0 left-0 w-[30vw] h-[30vw] bg-gradient-radial ${
        isDarkMode ? 'from-blue-500/15 via-purple-500/5' : 'from-blue-400/20 via-sky-500/10'
      } to-transparent blur-3xl transform-gpu`} />
      <div className={`absolute top-10 ght-0 w-[10vw] h-[20vw] bg-gradient-radial ${
        isDarkMode ? 'from-purple-500/15 via-purple-500/5' : 'from-blue-300/40 via-amber-400/5'
      } to-transparent blur-2xl transform-gpu`} />
      <div className={`absolute bottom-20 left-50 w-[50vw] h-[40vw] bg-gradient-radial ${
        isDarkMode ? 'from-violet-500/15 via-purple-500/10' : 'from-sky-400/10 via-blue-400/5'
      } to-transparent blur-2xl transform-gpu`} />
    </div>
  );
}
