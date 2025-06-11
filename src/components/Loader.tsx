// components/Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#022C43] z-50">
      <div className="flex space-x-2">

        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow delay-800"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow delay-110"></div>
      </div>
    </div>
  );
};

export default Loader;