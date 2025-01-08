"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { menuVars, containerVars } from './Animate';
import '../navbar.css';
import mobileLinkVars from './Animate';

const navlinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <header id="home">
      <nav className="fixed py-1 px-3 top-0 left-0 right-0 z-10 bg-[#003153] bg-opacity-50">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 pt-1">
          <Link href={"#home"}>
            <Image
              src="/images/logo.png"
              alt="Logo images"
              width={100}
              height={50}
              className="B-logo"
            />
          </Link>
          <div className="mobile-menu block md:hidden">
            <button onClick={()=>setOpenNavbar(true)} className="flex items-center mt-0 px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 font-nunito relative">
              {navlinks.map((link, index) => (
                <li key={index} className="navbar-li py-2 uppercase">
                  <Link href={link.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-base rounded md:p-0 hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
              <span />
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen md:hidden origin-top bg-[#003153] bg-opacity-100"
            >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-4 py-2">
                <Link href={"/"}>
                  <Image
                    src="/images/Binyam.png"
                    alt="Logo images"
                    width={60}
                    height={60}
                  />
                </Link>
                <div className="mobile-menu block md:hidden">
                <button onClick={()=>setOpenNavbar(false)} className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white">
                  <XMarkIcon className="h-5 w-5" />
                </button>
                </div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {openNavbar ? 
                  <motion.div variants={mobileLinkVars} className="text-base uppercase">
                    <ul className="flex flex-col h-full py-10 justify-center items-center gap-4">
                      {navlinks.map((link, index)=>(
                        <li key={index} className="mob-link-li px-5 font-nunito">
                          <Link onClick={()=>setOpenNavbar(false)} href={link.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-blue">
                            {link.title}
                          </Link>    
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  :
                  null}
              </motion.div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
