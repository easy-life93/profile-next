"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaSquareGithub,
  FaGoogle
} from "react-icons/fa6";
import "../homepage.css";

const HomeSection = () => {
  return (
    <section className="home-container">
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="md:mr-6 place-self-center mt-6 text-center sm:text-left">
          <h1 className="mb-2 text-3xl sm:text-5xl py-2 lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Hi, I&apos;m Stephen Gusse
          </h1>
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <TypeAnimation
              sequence={[
                "Frontend Engineer",
                2000,
                "Backend Engineer",
                2000,
                "Fullstack Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] w-[100%] md:w-[75%] text-base sm:text-lg md-6 lg:text-xl">
            An open source enthusiast that turns ideas into functional and
            visually stunning realities. I build websites focusing on
            simplicity, accessibility, usability, optimization, and responsive
            design.
          </p>
          <div className="mt-5 flex justify-between">
            <div className="home-sci mt-2 mb-2 ml-5 flex justify-between sm:justify-start sm:ml-0">
                        <a target="_blank" href="gusse2593@gmail.com"><FaGoogle size={17} /></a>
              
              <a target="_blank" href="https://github.com/easy-life93/">
                <FaSquareGithub size={17} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/stephen-gusse93"
              >
                <FaLinkedin size={17} />
              </a>
            </div>
            <button className="self-center email-sbt-btn w-full md:w-fit px-8 py-3 sm:ml-0 rounded text-white">
              <Link href={"#contact"}>
              Start Collaboration
            </Link>
              
            </button>
          </div>
        </div>
        <div className="hidden sm:block place-self-center mt-4 lg:mt-0">
          <div className="Img-container mt-10 rounded bg-[#181818] ml-3 sm:w-[320px] sm:h-[230px] md:w-[420px] md:h-[310px] lg:w-[500px] lg:h-[375px] relative">
            <Image
              src="/images/home-page2.jpg"
              alt="hero image"
              className="home-pageimg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
