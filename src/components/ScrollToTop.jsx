import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Get the current route path
  const { pathname } = useLocation();

  useEffect(() => {
    // This runs every time the 'pathname' changes (i.e., when you navigate)
    window.scrollTo(0, 0); 
  }, [pathname]);

  // This component doesn't render any visible UI
  return null; 
}

export default ScrollToTop;