import React, { useState } from "react";
import { ProjectsList } from "../data/ProjectsList";

function Cards() {
  const [showFullDescription, setShowFullDescription] = useState(null);
  const projectsToDisplay = ProjectsList.projects.slice(0, 4);

  const toggleDescription = (index) => {
    console.log("clicking description", index);

    setShowFullDescription(index === showFullDescription ? null : index);
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className="rounded-lg bg-transparent mb-8 p-4 h-auto shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <h2 className="text-base lg:text-xl font-semibold mb-2 font-poppins cursor-pointer">
            {project.name}
          </h2>
          <p className="text-gray-900 text-sm font-poppins">
            {showFullDescription === index
              ? project.description
              : project.description.substring(0, 120)}
            <span
              className="cursor-pointer ml-[5px]"
              onClick={() => toggleDescription(index)}
            >
              ....
            </span>
          </p>
          <div className="flex flex-wrap mt-3 lg:mt-6">
            {project.technologies.map((tech, index) => (
              <p
                key={index}
                className="inline-block bg-transparent shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
