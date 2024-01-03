import React from 'react';
import CircularProgress from './CircularProgress';
const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center pt-24">
            <h1 className="mt-[5vh] text-4xl">About Me!</h1>
            {/* <CircularProgress value={60}/> */}
            <p className='w-[60vw] mt-[2%]'>
                Hello, I'm Viha, a sophomore at San Jose State University studying Computer Science! 
                I'm currently interested in <strong className = "text-peach-150"> embedded systems, full-stack development, and computer science </strong>. 
                I'm looking for internships for Summer 2024.
                <br/>
                <br/>
                At school, I'm involved in the <strong className='text-peach-150'>SJSU Robotics Club</strong>, where I'm the Controls Lead. 
                I work on the controls systems for our robot, and I have written drivers in <strong className='text-peach-150'>C++ </strong>for our sensors and actuators.
                I've learned how to use the Arduino IDE, and I've worked with the LPC4078 microcontroller. I have also interfaced with many communication 
                protocols such as <strong className='text-peach-150'>I2C, SPI and UART.</strong> Some of the sensors I worked with are: MPU6050, BME680, and the OPT4048.
                <br/>
                <br/>
                Some of the classes I've taken at SJSU are: <strong className='text-peach-150'>Operating Systems, Data Structures and Algorithms, and Object Oriented Programming.</strong>
                I am going to take: <strong className='text-peach-150'>Machine Learning, Database and Management Systems, and Computer Networks</strong> next semester.
                I've also taken an online AI course at Harvard, where I learned about search algorithms, Markov Decision Processes, and reinforcement learning.
                I'm also interested in learning about Compilers. I'm reading Crafting Interpreters, and I'm planning to build a compiler for a simple language over the Winter Break. 

                <br/>
                <br/>
                When I'm not coding, I like to play volleyball &#x1F3D0;, read &#x1F4DA; and watch Bollywood movies &#x1F3A5;. I also love listening to Music. &#x1F3A7;	
                <br/>
                <br/>

            </p>
        </div>
    );
};

export default About;
