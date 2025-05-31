import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaUserLarge } from 'react-icons/fa6'
import { GrHomeRounded } from 'react-icons/gr'
import { IoLogoGithub, IoTabletPortraitOutline } from 'react-icons/io5'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { RxVercelLogo } from 'react-icons/rx'

const Navbar = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 h-full w-16 flex flex-col items-center bg-[#181818]">
        <div className="mt-6">
          <Link href={"/"}>
          <span className="text-yellow-400 nunito text-2xl font-bold">H.</span>
          </Link>
        </div>

        <div className="mt-auto sm:space-y-4 md:space-y-6 flex items-center flex-col">
          <div className="text-gray-500 text-xl hover:text-yellow-400">
            <Link href="/">
              <span className="text-gray-400 text-sm font-light hover:text-yellow-400">
                <GrHomeRounded />
              </span>
            </Link>
          </div>

          <div className="text-gray-500 text-xl hover:text-yellow-400">
            <Link href="/about">
              <span className="text-gray-400 text-sm font-light hover:text-yellow-400">
                <FaUserLarge />
              </span>
            </Link>
          </div>

          <div className="text-gray-500 text-xl hover:text-yellow-400">
            <Link href="/portfolio">
              <span className="text-gray-400 text-sm font-light hover:text-yellow-400">
                <IoTabletPortraitOutline />
              </span>
            </Link>
          </div>

          <div className="text-gray-500 text-xl hover:text-yellow-400">
            <Link href="/contact">
              <span className="text-gray-400 text-sm font-light hover:text-yellow-400">
                <RiContactsBook2Fill />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex mt-auto mb-6 space-y-4 justify-center items-center flex-col">
          <Link href="https://www.linkedin.com/in/muhammad-hamza-1461432a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbumNdwPJQnyHe8gf5Jsflw%3D%3D">
            <CiLinkedin className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
          <Link href="https://github.com/MuhammadHamza524727">
            <IoLogoGithub className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
          <Link href="https://vercel.com/muhammad-hamzas-projects-a3383566">
            <RxVercelLogo className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
