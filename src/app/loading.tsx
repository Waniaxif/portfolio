import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 dark:border-white/5 transition-colors duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating glowing ring */}
        <div className="absolute w-20 h-20 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

        {/* Inner pulsing glass core */}
        <div className="w-10 h-10 bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-md rounded-full border border-blue-500/50 animate-pulse"></div>
      </div>
    </div>
  );
}
