import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationManager } from './navigation';

export function useAppNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    NavigationManager.push(location.pathname);
    navigate(path);
  };

  const goBack = () => {
    const previousPath = NavigationManager.pop();
    if (previousPath) {
      navigate(previousPath);
    } else {
      navigate('/');
    }
  };

  return { navigateTo, goBack };
}
