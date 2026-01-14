import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from './AuthProvider';

const PremiumHeader = ({ location, status, onAuthClick }) => {
  const { user } = useAuth();

  return (
    <div className="relative flex flex-col items-center mb-10 w-full animate-in fade-in">
      {/* Auth Button - Top Right */}
      <button
        onClick={onAuthClick}
        className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
      >
        <User size={16} className="text-purple-400" />
        <span className="text-xs text-white/70">
          {user ? user.email?.split('@')[0] : 'Sign In'}
        </span>
      </button>

      <h1 className="text-title">{location}</h1>
      <p className="text-subtitle">{status}</p>
    </div>
  );
};

export default PremiumHeader;
