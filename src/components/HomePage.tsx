// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const HomePage = () => {
  

//   return (
//     <div className="flex nunito flex-col items-start justify-center p-7 min-h-screen bg-[#022C43] text-white">
     

//       {/* Main Content */}
//       <main className="  ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
//         <div className="text-gray-400">
//           <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
//           <p className="text-sm text-yellow-600 md:mb-10 caveat">
//             &lt;body&gt;
//           </p>
//         </div>

//         <h1 data-aos="zoom-out" className="text-2xl md:text-5xl font-bold">
//           <p className="text-sm md:mt-6  text-yellow-600 caveat">&lt;h1&gt;</p>
//           <span className="inline-block hover:animate-bump hover:text-yellow-400">
//             H
//           </span>
//           <span className="inline-block hover:animate-bump hover:text-yellow-400">
//             i
//           </span>
//           <span className="inline-block hover:animate-bump hover:text-yellow-400">
//             ,
//           </span>{" "}
//           <br />
//           <span className="inline-block hover:animate-bump hover:text-yellow-400 mt-4">
//             I{" "}
//           </span>{" "}
//           <span className="inline-block hover:animate-bump  hover:text-yellow-400">
//             'm
//           </span>{" "}
//           <span className="text-yellow-400 caveat  ">
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               M
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               u
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               h
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               a
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               m
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               m
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               a
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               d
//             </span>{" "}
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               H
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               a
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               m
//             </span>
//             <span className="inline-block hover:animate-bump text-white  hover:text-yellow-400">
//               z
//             </span>
//             <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//               a
//             </span>
//           </span>
//           <br />
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400 mt-3">
//             w
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             e
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             b
//           </span>{" "}
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             D
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             e
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             v
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             e
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             l
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             o
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             p
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             e
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             r
//           </span>
//           <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
//             . <p className="text-sm  text-yellow-600 md:ml-5 "></p>
//           </span>
//           <p className="text-sm md:mt-6  text-yellow-600 caveat ">
//             &lt;/h1&gt;
//           </p>
//         </h1>

//         <p className="text-[12px] flex caveat mt-4 text-gray-400">
//           Front End Developer / Exploring Agentic Ai
//         </p>
//         <Link href={"/contact"}>
//         <button
//           data-aos="zoom-out"
//           className="mt-6 px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-[#0a192f]"
//         >
//           CONTACT ME
//         </button>
//         </Link>

//         <div className="text-gray-400 mt-10">
//           <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
//           <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// PacMan Loader Component
const PacManLoader = () => {
  return (
    <div className="pacman-loader flex justify-center items-center min-h-screen bg-[#022C43] ">
      <div className="pacman">
        <div></div><div></div><div></div><div></div><div></div>
      </div>

      <style jsx>{`
        .pacman {
          position: relative;
          width: 0;
          height: 0;
        }
        .pacman > div {
          width: 20px;
          height: 20px;
          background: yellow;
          border-radius: 50%;
          position: absolute;
          animation: pacman-dot 1s infinite linear;
        }
        .pacman > div:nth-child(1) {
          background: transparent;
          border: 25px solid yellow;
          border-right-color: transparent;
          border-radius: 50%;
          animation: pacman-mouth 0.5s infinite;
        }
        .pacman > div:nth-child(n+2) {
          left: 50px;
          background: #eee;
        }
        .pacman > div:nth-child(2) { animation-delay: 0.1s; }
        .pacman > div:nth-child(3) { animation-delay: 0.1s; }
        .pacman > div:nth-child(4) { animation-delay: 0.1s; }
        .pacman > div:nth-child(5) { animation-delay: 0.2s; }

        @keyframes pacman-mouth {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(44deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pacman-dot {
          0%   { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-40px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 seconds ke baad loading false kar do
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PacManLoader />;
  }

  return (
    <div className="flex nunito flex-col items-start justify-center p-7 min-h-screen bg-[#022C43] text-white">
      {/* Main Content */}
      <main className="ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
        <div className="text-gray-400">
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">&lt;body&gt;</p>
        </div>

        <h1 data-aos="zoom-out" className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          <span className="inline-block hover:animate-bump hover:text-yellow-400">H</span>
          <span className="inline-block hover:animate-bump hover:text-yellow-400">i</span>
          <span className="inline-block hover:animate-bump hover:text-yellow-400">,</span>{" "}
          <br />
          <span className="inline-block hover:animate-bump hover:text-yellow-400 mt-4">I{" "}</span>{" "}
          <span className="inline-block hover:animate-bump hover:text-yellow-400">'m</span>{" "}
          <span className="text-yellow-400 caveat">
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">M</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">u</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">h</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">a</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">m</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">m</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">a</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">d</span>{" "}
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">H</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">a</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">m</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">z</span>
            <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">a</span>
          </span>
          <br />
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400 mt-3">w</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">e</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">b</span>{" "}
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">D</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">e</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">v</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">e</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">l</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">o</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">p</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">e</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">r</span>
          <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">. <p className="text-sm text-yellow-600 md:ml-5"></p></span>
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        <p className="text-[12px] flex caveat mt-4 text-gray-400">Front End Developer / Exploring Agentic Ai</p>

        <Link href={"/contact"}>
          <button
            data-aos="zoom-out"
            className="mt-6 px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-[#0a192f]"
          >
            CONTACT ME
          </button>
        </Link>

        <div className="text-gray-400 mt-10">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
