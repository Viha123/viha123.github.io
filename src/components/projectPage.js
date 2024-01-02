import React from 'react';

export default function ProjectCard({ image, description, technologies }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
      <img className="w-1/2 h-1/2 object-cover mx-auto" src={image} alt="Project" />
      <div className="px-6 py-4">
        <div className="text-zinc-900 font-bold text-xl mb-2">{description}</div>
        <p className="text-zinc-900 text-base">
          Technologies Used:
          {/* <ul className="list-disc list-inside">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul> */}
          {technologies}
        </p>
      </div>
    </div>
  );
}