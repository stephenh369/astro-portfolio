import { useState, useRef } from "react";
import "./ProjectSelector.css";

interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
}

interface ProjectSelectorProps {
  projects: Array<Project>;
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const selectedProjectRef = useRef<null | HTMLDivElement>(null);

  const handleProjectChange = (project: number) => {
    if (selectedProjectRef.current) {
      if (selectedProject > projects.length) {
        selectedProjectRef.current.style.animation = "prevProject .5s forwards";
      } else {
        selectedProjectRef.current.style.animation = "nextProject .5s forwards";
      }
    }
    setSelectedProject(project);
  };

  return (
    <div>
      <ul className="grid md:grid-cols-3 w-full gap-8 mt-16 container mx-auto">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => handleProjectChange(index)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleProjectChange(index);
              }
            }}
            className="flex items-center cursor-pointer list-none rounded-lg p-4 shadow-primary bg-container/40 backdrop-filter backdrop-blur-sm hover:bg-green-500 hover:text-black focus:bg-green-500 focus:text-black active:bg-green-500 active:text-black"
            tabIndex={0}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <div
        ref={selectedProjectRef}
        onAnimationEnd={() => {
          if (selectedProjectRef.current) {
            selectedProjectRef.current.style.animation = "";
          }
        }}
        className="flex container bg-container/40 backdrop-filter backdrop-blur-sm shadow-primary rounded-lg mx-auto mt-12 mb-24 items-center justify-center"
      >
        <section className="text-white px-8 flex flex-col lg:flex-row justify-between">
          <div className="py-8">
            <h1 className="lg:text-5xl text-4xl text-green-500 text-center font-semibold pb-4">
              {projects[selectedProject].title}
            </h1>
            <p
              className="lg:pl-8 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: projects[selectedProject].description,
              }}
            />
          </div>

          <div className="flex flex-col justify-center gap-4 items-center p-8">
            <img
              src={projects[selectedProject].img}
              alt="Project Image"
              className="w-100 lg:max-w-sm"
            />
            <a
              className="bg-green-500 p-4 rounded-lg text-black font-semibold"
              href={projects[selectedProject].link}
              target="_blank"
            >
              GitHub Repo&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 inline"
                viewBox="0 0 1024 1024"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#111"
                ></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectSelector;
