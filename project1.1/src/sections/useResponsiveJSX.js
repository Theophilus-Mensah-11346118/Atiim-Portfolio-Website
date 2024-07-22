import { useState, useEffect } from 'react';

const useResponsiveJSX = (breakpoint) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return { isMobile, isMenuVisible, handleMenuToggle, setIsMenuVisible };
};

export default useResponsiveJSX;
