import Image from "next/image";

import nextIcon from "/public/next.png";

const RotatingCube = () => {
  return (
    <div className="flex  sm:hidden md:block  items-start justify-center  bg-[#022C43]">
      <div className="relative w-48 h-48 perspective">
        <div className="cube  w-full h-full absolute transform-style-preserve-3d animate-spin-slow">
          {/* Top Side */}
          <div className="cube-face w-full h-full absolute bg-gray-800 flex items-center justify-center transform rotate-x-90 translate-z-24">
            <Image
              src={nextIcon}
              alt="Vercel"
              width={80}
              height={80}
              className="sm:hidden md:flex"
            />
          </div>
          {/* Bottom Side */}
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;
