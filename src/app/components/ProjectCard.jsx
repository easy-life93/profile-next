import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ project: { title, description, image, gitUrl, previewUrl, techStack },
  }) => {
  return (
    <div className='project-card-container bg-[#17374c] py-5 px-5'>
      <div className="h-40 md:h-60 md:w-50 relative group" style={{background: `url(${image})`, backgroundSize: "100% 100%" }} />
      <h5 className="text-white mt-3 first-letter:text-xl font-semibold mb-1">{title}</h5>
      <div className="desc-container h-20 bg-[#183950] px-2 py-2 overflow-scroll text-white">
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <div className=" flex justify-between mt-5">
        {gitUrl?<Link target="_blank" href={gitUrl} className="preview-btn sm:mb-0 w-fit px-5 py-2 sm:ml-0 rounded-full text-white">
          Source Code
        </Link>:<div></div>}
        <Link target="_blank" href={previewUrl} className="preview-btn sm:mb-0 w-fit px-5 py-2 sm:ml-0 rounded-full text-white">
          Preview
        </Link>
      </div>
      <div className="flex justify-between">
        {techStack.map((tech, id) => {
          return (
            <div key={id} className="techStack-cont mt-2 mb-2 flex justify-between">
              <a target="_blank" href={tech[1]}>{tech[0]}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;