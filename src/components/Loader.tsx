// components/Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#022C43] z-50">
      <div className="flex space-x-2">
        {/* You can choose a different loader style here.
            This is a simple pulsing circle example.
            Consider using an SVG icon or a more complex animation
            for a highly professional look.
        */}
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow delay-150"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-slow delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;