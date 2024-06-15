import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';


const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={showScroll ? "fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer" : "hidden"} onClick={scrollToTop}>
      <ArrowUpIcon className="h-6 w-6 text-indigo-600" />
    </div>
  );
};

export default ScrollArrow;
