import React from 'react';
import CircularProgress from './CircularProgress';
import mongo from '../images/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
// Import images
import sql from '../images/icons8-sql-64.png'
const pythonImg = require('../images/icons8-python.svg');
const javaImg = require('../images/icons8-java.svg');
const arduinoImg = require('../images/icons8-arduino.svg');
const cppImg = require('../images/icons8-c (1).svg');
const cImg = require('../images/icons8-c.svg');
const js = require('../images/icons8-javascript (1).svg');
const html = require('../images/icons8-html.svg');
const css = require('../images/icons8-css.svg');
const re = require('../images/icons8-react.svg');
const node = require('../images/icons8-node-js.svg');
const express = require('../images/icons8-express-js.svg');
const tailwind = require('../images/icons8-tailwind-css.svg');
const git = require('../images/icons8-git.svg');
const figma = require('../images/icons8-figma.svg');
const office = require('../images/icons8-microsoft-store.svg');
const Skills = () => {
    var skills = [
        { name: 'Python', category: 'Language', proficiency : 85, img: pythonImg },
        { name: 'Java', category: 'Language' , proficiency : 85, img: javaImg},
        { name: 'JavaScript', category: 'Language', proficiency : 60, img: js},
        { name: 'C', category: 'Language' , proficiency : 65, img: cImg},
        { name: 'C++', category: 'Language' , proficiency : 45, img: cppImg},
        { name: 'HTML', category: 'Language' , proficiency : 95, img: html},
        { name: 'CSS', category: 'Language' , proficiency : 85, img: css},
        // { name: 'MongoDB/Mongoose', category: 'Database' , proficiency : 35},
        { name: 'SQLite', category: 'Database' , proficiency : 60, img: sql},
        { name: 'React', category: 'Framework', proficiency : 80, img: re},
        { name: 'React-Native', category: 'Framework', proficiency : 60, img: re},
        { name: 'Node.js', category: 'Framework' , proficiency : 70, img: node},
        { name: 'Express', category: 'Framework', proficiency : 60, img: express},
        { name: 'Tailwind CSS', category: 'Framework' , proficiency : 40, img: tailwind },
        { name: 'JavaFX', category: 'Framework' , proficiency : 40, img: javaImg},
        { name: 'Pygame', category: 'Framework' , proficiency : 70, img: pythonImg},
        { name: 'Git', category: 'Tool' , proficiency : 85, img: git},
        { name: "Arduino", category: "Tool", proficiency : 75, img: arduinoImg },
        { name: 'Figma', category: 'Tool' , proficiency : 60, img: figma},
        { name: 'Microsoft Office', category: 'Tool', proficiency : 85 , img: office},
        // Add more skills here...
    ];

    return (
        <div id="skills" className="flex flex-col justify-center items-center pt-24">
            <h1 className="mt-[5vh] text-4xl">Skills</h1>
            <p>All icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            <div className="flex flex-wrap justify-center mt-4 w-[60vw]">
                {skills.map((skill, index) => (
                    <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4 p-4 bg-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
                        <h2 className="font-bold text-xl mb-2 text-zinc-900">{skill.name}</h2>
                        {skill.img &&
                        (typeof skill.img === 'object' ? (
                            <img
                            src={skill.img.default}
                            className="mx-auto"
                            alt={skill.name}
                            />
                        ) : (
                            <img src={skill.img} className="mx-auto" alt={skill.name} />
                        ))}
                        {/* <p className="text-gray-700 text-base">{skill.category}</p> */}
                        {/* <CircularProgress value={skill.proficiency} category={skill.name} /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;