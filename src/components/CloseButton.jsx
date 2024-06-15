import React from 'react';

const CloseButton = ({ onClose }) => {
  return (
    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;
