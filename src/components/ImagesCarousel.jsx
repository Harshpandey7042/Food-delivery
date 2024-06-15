import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const VideoCarousel = () => {
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
    '/videos/video5.mp4',
    '/videos/video6.mp4'
  ];

  // Divide the videos array into two parts
  const half = Math.ceil(videos.length / 2);
  const firstHalf = videos.slice(0, half);
  const secondHalf = videos.slice(half);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* First Carousel */}
      <div style={{ flex: '1', margin: '0 10px' }}>
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          dynamicHeight={false} 
          emulateTouch 
          interval={4000}  // 4 seconds interval
          stopOnHover={true} 
          className="carousel-wrapper"
        >
          {firstHalf.map((video, index) => (
            <div 
              key={index} 
              style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <motion.div
                style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video 
                  src={video} 
                  alt={`Video ${index + 1}`} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  style={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
                />
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Second Carousel */}
      <div style={{ flex: '1', margin: '0 10px' }}>
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          dynamicHeight={false} 
          emulateTouch 
          interval={4000}  // 4 seconds interval
          stopOnHover={true} 
          className="carousel-wrapper"
        >
          {secondHalf.map((video, index) => (
            <div 
              key={index} 
              style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <motion.div
                style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video 
                  src={video} 
                  alt={`Video ${index + 1}`} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  style={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
                />
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VideoCarousel;
