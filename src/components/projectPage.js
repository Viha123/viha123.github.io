import React from 'react';

export default function ProjectCard({ image, link, title, technologies, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
      <img className="w h object-cover mx-auto" src={image} alt="Project" />
      <div className="px-6 py-4">
        <a href={link} target="_blank" className="text-zinc-900 font-bold text-xl mb-2">{title}</a>
        <p className="text-zinc-900 text-base italic font-bold">
          {technologies}
        </p>
        <p className="text-zinc-900 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}