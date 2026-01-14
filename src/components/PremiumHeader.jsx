import React from 'react';

const PremiumHeader = ({ location, status }) => {
  return (
    <div className="flex flex-col items-center mb-10 w-full animate-in fade-in">
      <h1 className="text-title">{location}</h1>
      <p className="text-subtitle">{status}</p>
    </div>
  );
};

export default PremiumHeader;
