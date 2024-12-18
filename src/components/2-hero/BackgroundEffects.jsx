import { useTheme } from '../../Context/ThemeContext';
import GridPattern from '../0-Background/GridPattern';
import CornerLights from '../0-Background/CornerLights';
import FloatingSquares from '../0-Background/FloatingSquare';

export default function BackgroundEffects() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`absolute inset-0 overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <CornerLights />
     
    </div>
  );
}
