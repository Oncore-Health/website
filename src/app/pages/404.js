import React from 'react';

export default function Custom404() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Full 404 Image */}
      <img 
        src="/404-error.png" 
        alt="404 Page Not Found" 
        className="w-auto h-auto"
      />
    </div>
  );
};
