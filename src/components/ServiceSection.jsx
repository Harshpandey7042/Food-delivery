import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id='about' className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Discover Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Fast Delivery */}
          <motion.div variants={serviceVariants} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">Experience quick and reliable food delivery straight to your doorstep.</p>
          </motion.div>
          
          {/* Service 2: 24/7 Service */}
          <motion.div variants={serviceVariants} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Service</h3>
            <p className="text-gray-600">We're here to serve you around the clock, ensuring your cravings are satisfied whenever you need.</p>
          </motion.div>
          
          {/* Service 3: Quality Food */}
          <motion.div variants={serviceVariants} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Food</h3>
            <p className="text-gray-600">Indulge in our delicious dishes made from the finest ingredients, ensuring superior taste and freshness.</p>
          </motion.div>
          
          {/* Service 4: Excellent Support */}
          <motion.div variants={serviceVariants} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellent Support</h3>
            <p className="text-gray-600">Our dedicated support team is ready to assist you with any inquiries or issues you may have.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
