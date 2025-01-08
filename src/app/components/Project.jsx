import React from 'react';
import ProjectCard from './ProjectCard';
import "../projectpage.css";
import { IoLogoCss3, IoLogoReact ,IoLogoVue,IoLogoPython} from "react-icons/io5";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { SiWebpack, SiJest, SiBabel,SiNextdotjs, SiEslint, SiStylelint, SiBootstrap, SiRedux,SiWagtail,SiPostgresql } from "react-icons/si";

const projectsData = [
  {
    id: 3,
    title: "Clavis",
    description: "The Clavis project integrates a variety of features aimed at fostering an engaging and user-friendly learning experience.",
    image: "/images/projects/clavis.jpg",
    // gitUrl: "https://github.com/marvin-nyalik/AoraE.git",
    previewUrl: "https://clavis.the-o.co",
    techStack: [[<IoLogoVue key={1} size={33} />, "https://vuejs.org/"], [<IoLogoPython key={2} size={27} />, "https://www.python.org/"],[<SiWagtail key={2} size={27} />, "https://www.wagtail.org/"],[<SiPostgresql key={2} size={27} />, "https://www.postgresql.org/"]]
  },
  {
    id: 4,
    title: "EarlyBird",
    description: "Easily build a simple landing page for your idea in minutes from a template. Seek no help from a designer or developer.Transform your idea into a compelling pitch deck that interests your audience. Spend less time creating copies.Start engaging with potential customers. Validate the demand for your product and accept payments before launch.",
    image: "/images/projects/earlybird.png",
    // gitUrl: "https://github.com/easy-life93/early-bird.git",
    previewUrl: "https://earlybird.im/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiNextdotjs key={1} size={33} />, "https://nextjs.org/"],[<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"], [<SiBootstrap key={4} size={33} />, "https://getbootstrap.com/" ]]
  },
  {
    id: 5,
    title: "HeyForm",
    description: "Heyform is an Open source form builder for small business success",
    image: "/images/projects/heyform.png",
    // gitUrl: "https://github.com/easy-life93/heyform",
    previewUrl: "https://heyform.net/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  // {
  //   id: 6,
  //   title: "Ello",
  //   description: "A teacher's web viewer product that allows them assign books of study to students",
  //   image: "/images/projects/ello.PNG",
  //   // gitUrl: "https://github.com/marvin-nyalik/ello-book-assignment.git",
  //   previewUrl: "https://github.com/marvin-nyalik/ello-book-assignment.git",
  //   techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  // },
  // {
  //   id: 1,
  //   title: "News Pulse",
  //   description: "NewsPulse is a digital platform that provides up-to-date and relevant information on current events, developments, and worldwide stories.",
  //   image: "/images/projects/NewsPulse.png",
  //   // gitUrl: "https://github.com/marvin-nyalik/NewsPulse",
  //   previewUrl: "https://github.com/marvin-nyalik/NewsPulse",
  //   techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"],[<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<IoLogoCss3 key={2} size={25} />,"https://www.w3.org/Style/CSS/Overview.en.html"], [<TbBrandJavascript key={3} size={30} />,"https://www.javascript.com/"]]
  // },
  // {
  //   id: 2,
  //   title: "I-Movies",
  //   description: "IMovies is a Single-page Web Application built with JavaScript ES6. It uses the free TVMAZE-API to showcase information about movies and Television shows.",
  //   image: "/images/projects/IMoviesShowcase.png",
  //   // gitUrl: "https://github.com/marvin-nyalik/IMovies",
  //   previewUrl: "https://marvin-nyalik.github.io/IMovies/dist/",
  //   techStack: [[<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  // }
];

const Project = () => {
  return (
    <section id="projects">
      <div className="project-container mt-10">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Featured Projects
        </h2>
        <br />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
          {projectsData.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Project; 
