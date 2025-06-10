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

//  export default HomePage;















// pages/index.tsx (or your HomePage component file)

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../components/Loader"; // Adjust the import path if necessary

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display loader for 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex nunito flex-col items-start justify-center p-7 min-h-screen bg-[#022C43] text-white">
          {/* Main Content */}
          <main className="ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
            <div className="text-gray-400">
              <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
              <p className="text-sm text-yellow-600 md:mb-10 caveat">
                &lt;body&gt;
              </p>
            </div>

            <h1 data-aos="zoom-out" className="text-2xl md:text-5xl font-bold">
              <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
              <span className="inline-block hover:animate-bump hover:text-yellow-400">
                H
              </span>
              <span className="inline-block hover:animate-bump hover:text-yellow-400">
                i
              </span>
              <span className="inline-block hover:animate-bump hover:text-yellow-400">
                ,
              </span>{" "}
              <br />
              <span className="inline-block hover:animate-bump hover:text-yellow-400 mt-4">
                I{" "}
              </span>{" "}
              <span className="inline-block hover:animate-bump hover:text-yellow-400">
                &#96;m
              </span>{" "}
              <span className="text-yellow-400 caveat ">
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  M
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  u
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  h
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  a
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  m
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  m
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  a
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  d
                </span>{" "}
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  H
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  a
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  m
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  z
                </span>
                <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                  a
                </span>
              </span>
              <br />
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400 mt-3">
                w
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                e
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                b
              </span>{" "}
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                D
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                e
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                v
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                e
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                l
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                o
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                p
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                e
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                r
              </span>
              <span className="inline-block hover:animate-bump text-white hover:text-yellow-400">
                .{" "}
                <p className="text-sm text-yellow-600 md:ml-5 "></p>
              </span>
              <p className="text-sm md:mt-6 text-yellow-600 caveat ">
                &lt;/h1&gt;
              </p>
            </h1>

            <p className="text-[12px] flex caveat mt-4 text-gray-400">
              Front End Developer / Exploring Agentic Ai
            </p>
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
      )}
    </>
  );
};

export default HomePage;