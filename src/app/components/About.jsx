import React from "react";
import { SiRubyonrails, SiMongodb } from "react-icons/si";
import Image from "next/image";
import Modal from "./Modal";
import "../about.css";
const SkillItem = ({ src, alt, name, color }) => (
  <span className="slide flex flex-col items-center">
    {src.length ? (
      <Image src={src} alt={alt} width={75} height={75} />
    ) : (
      src
  )}
    <p className={`hidden md:block text-xl text-center font-semibold mt-2 ${color}`}>
      {name}
    </p>
  </span>
);
const languages = [
  {
    src: "/images/icons/javascript.png",
    alt: "javascript-ico",
    label: "JavaScript",
    labelColor: "text-yellow-500",
  },
  {
    src: "/images/icons/ruby.png",
    alt: "ruby-ico",
    label: "Ruby",
    labelColor: "text-red-600",
  },
  {
    src: "/images/icons/python.png",
    alt: "python-ico",
    label: "Python",
    labelColor: "text-sky-500",
  },
  {
    src: "/images/icons/r-project.png",
    alt: "R-ico",
    label: "R",
    labelColor: "text-sky-300",
  },
  {
    src: "/images/icons/sql.png",
    alt: "sql-ico",
    label: "SQL",
    labelColor: "text-orange-500",
  },
  {
    src: "/images/icons/bash.png",
    alt: "bash-ico",
    label: "Bash Script",
    labelColor: "text-green-600",
  },
];

const frontend = [
  {
    src: "/images/icons/html5.png",
    alt: "html5-ico",
    label: "HTML5",
    labelColor: "text-orange-500",
  },
  {
    src: "/images/icons/css3.png",
    alt: "css3-ico",
    label: "CSS3",
    labelColor: "text-sky-400",
  },
  {
    src: "/images/icons/bootstrap.png",
    alt: "bootstrap-ico",
    label: "Bootstrap",
    labelColor: "text-fuchsia-600",
  },
  {
    src: "/images/icons/tailwind-css.png",
    alt: "tailwind-css-ico",
    label: "Tailwindcss",
    labelColor: "text-cyan-400",
  },
  {
    src: "/images/icons/react.png",
    alt: "react-ico",
    label: "React.js",
    labelColor: "text-sky-500",
  },
  {
    src: "/images/icons/nextjs.png",
    alt: "nextjs-ico",
    label: "NEXT.js",
    labelColor: "text-cyan-50",
  },
];

const backend = [
  {
    src: <SiRubyonrails size={75} color="red" />,
    alt: "rails-ico",
    label: "Rails",
    labelColor: "text-rose-700",
  },
  {
    src: "/images/icons/node.png",
    alt: "node-ico",
    label: "Node.js",
    labelColor: "text-green-400",
  },
  {
    src: "/images/icons/postgresql.png",
    alt: "postgresql-ico",
    label: "PostgreSQL",
    labelColor: "text-sky-500",
  },
  {
    src: <SiMongodb size={75} color="green" />,
    alt: "mongodb-ico",
    label: "MongoDB",
    labelColor: "text-emerald-700",
  },
  {
    src: "/images/icons/django.png",
    alt: "django-ico",
    label: "django",
    labelColor: "text-lime-200",
  },
  {
    src: "/images/icons/express.png",
    alt: "express-ico",
    label: " Express.js",
    labelColor: "text-cyan-100",
  },
];

const tools = [
  {
    src: "/images/icons/git.png",
    alt: "git-ico",
    label: "Git",
    labelColor: "text-orange-500",
  },
  {
    src: "/images/icons/github.png",
    alt: "github-ico",
    label: "GitHub",
    labelColor: "text-black",
  },
  {
    src: "/images/icons/vscode.png",
    alt: "vscode-ico",
    label: "Visual Studio",
    labelColor: "text-pink-500",
  },
  {
    src: "/images/icons/docker.png",
    alt: "docker-ico",
    label: "Docker",
    labelColor: "text-yellow-500",
  },
  
  {
    src: "/images/icons/slack.png",
    alt: "slack-ico",
    label: "Slack",
    labelColor: "text-rose-400",
  },
  {
    src: "/images/icons/linux.png",
    alt: "linux-ico",
    label: "Linux",
    labelColor: "text-yellow-300",
  },
];
const renderSkills = (logos) => {
  return logos.map((logo, index) => (
    <SkillItem
      key={index}
      src={logo.src}
      alt={logo.alt}
      width={75}
      height={75}
      name={logo.label}
      color={logo.labelColor}
    />
  ));
};

const About = () => {
  return (
    <section className="my-14" id="about">
      <div className=" py-5">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Code is the Future We Make
        </h2>
        <div className="about-bio h-96 md:h-auto overflow-scroll">
          <p className="text-[#ADB7BE] w-full text-lg sm:text-xl text-center my-10">
            Hello, am Gusse93, a results-oriented Software developer known for
            my disciplined approach and unwavering focus on delivering
            exceptional user experiences. Highly skilled and results-driven
            senior full-stack engineer with a roven track record of delivering
            impactful solutions across telehealth, e-commerce, and enterprise
            domains, I have played a pivotal role in numerous successful web
            applications, consistently exceeding client expectations. I thrive
            in collaborative environments, seamlessly integrating with remote
            teams to learn, review code, and craft innovative solutions.
            Leveraging tools like Slack and Git, I foster open communication and
            foster a culture of continuous improvement. My commitment to staying
            abreast of industry trends ensures that am always at the forefront
            of technological advancements, allowing me to adapt and evolve with
            ease. Driven by a passion for problem-solving, I embrace challenges
            head-on, utilizing the SOLID principles and 12-factor app
            methodology to produce high-quality, scalable code. Whether its
            optimizing performance or overcoming complex technical hurdles, I
            approach each task with enthusiasm and a solution-oriented mindset.
            Beyond the code, I bring a personal touch to my work, drawing
            inspiration from my love for writing and infusing creativity into
            every project. By combining technical expertise with a collaborative
            spirit and a relentless pursuit of excellence, I consistently
            deliver results that exceed expectations and drive business success.
          </p>
        </div>
        <div className="flex flex-col mt-5 sm:flex-row justify-center align-center items-center py-3">
          <button className=" mb-10 sm:mb-0 w-fit px-8 py-3 sm:ml-0 self-center email-sbt-btn w-full md:w-fit px-8 py-3 sm:ml-0 rounded text-white">
            <a
              target="_blank"
              className="flex"
              href="https://drive.google.com/file/d/10I4JwADHg9V_EGQpDglKz-PINT9iJKT_/view?usp=sharing"
            >
              <span className="text-lg mr-3">Resume</span>
              <Image
                src="/images/icons/download.png"
                alt="download-ico"
                width={30}
                height={30}
              />
            </a>
          </button>
        </div>
        <h3 className="text-center mx-[5%] my-10 text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          My Skills
        </h3>
        <div className="mx-[5%] flex flex-col justify-center items-center my-10">
          <h3 className="self-start text-xl sm:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-300">
            Language
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">{renderSkills(languages)}</div>
            <div className="logos-slide sm:my-5">{renderSkills(languages)}</div>
          </div>

          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-300">
            Frontend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">{renderSkills(frontend)}</div>
            <div className="logos-slide sm:my-5">{renderSkills(frontend)}</div>
          </div>

          <h3 className="self-start text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Backend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30 sm:my-2">
            <div className="logos-slide sm:my-5">{renderSkills(backend)}</div>
            <div className="logos-slide sm:my-5">{renderSkills(backend)}</div>
          </div>

          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Tools
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">{renderSkills(tools)}</div>
            <div className="logos-slide sm:my-5">{renderSkills(tools)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
