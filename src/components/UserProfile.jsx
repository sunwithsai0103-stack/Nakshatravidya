import React from 'react';
import { User, LogOut, Mail } from 'lucide-react';
import { useAuth } from './AuthProvider';

const UserProfile = ({ onClose }) => {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6">
            <div className="glass-card max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                        <User size={40} className="text-white" />
                    </div>
                    <h2 className="text-xl font-light text-white mb-1">
                        {user?.user_metadata?.full_name || 'User'}
                    </h2>
                    <div className="flex items-center justify-center text-sm text-white/50">
                        <Mail size={12} className="mr-2" />
                        {user?.email}
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                    >
                        <LogOut size={16} />
                        Sign Out
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl text-purple-300 transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
