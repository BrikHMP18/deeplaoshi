import React from 'react';

/**
 * Logo Component
 * Displays the DeepLaoshi logo
 */
const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      DeepLaoshi
    </div>
  );
};

export default Logo;
