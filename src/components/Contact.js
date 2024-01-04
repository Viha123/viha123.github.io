import React from "react";
import CircularProgress from "./CircularProgress";
const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center pt-24"
    >
      <h1 className="mt-[5vh] text-4xl text-peach-150">Contact Me!</h1>
      {/* <CircularProgress value={60}/> */}
      <p className="w-[60vw] mt-[2%]">
        I would love to collaborate on exciting projects and learn new things.
        I'm also looking for internships for Summer 2024. Please reach out to
        me!
        <br />
        <br />
        <p className="text-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
          &#x1F4E7; Email: <strong className="">sviha195@gmail.com </strong>
        </p>
        <br />
        <p className="text-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
          &#x1F5A5; Github:
          <u>
            <strong>
              <a href="https://github.com/Viha123" target="_blank">
                Viha123
              </a>
            </strong>
          </u>
        </p>
        <br />
        <p className="text-peach-150 transform transition duration-500 ease-in-out hover:scale-105">
        &#x1F517; LinkedIn:
        <u>
          <strong >
            <a href="https://www.linkedin.com/in/viha-shah/" target="_blank">
              Viha Shah
            </a>
          </strong>
        </u>
        </p>
        
      </p>
      <p className="mt-auto">
        All icons by
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </div>
  );
};

export default Contact;
