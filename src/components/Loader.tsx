// components/Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--bg)] z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow" style={{ animationDelay: "0ms" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow" style={{ animationDelay: "300ms" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow" style={{ animationDelay: "600ms" }}></div>
      </div>
    </div>
  );
};

export default Loader;