import React from "react";
import CircularProgress from "./CircularProgress";
const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center pt-24"
    >
      <h1 className="mt-[5vh] text-4xl">Contact Me!</h1>
      {/* <CircularProgress value={60}/> */}
      <p className="w-[60vw] mt-[2%]">
        I would love to collaborate on exciting projects and learn new things.        
        I'm  also looking for internships for Summer 2024.
        Please reach out to me!

        <br />
        <br />
        &#x1F4E7; Email: <strong className="text-peach-150">sviha195@gmail.com </strong>
        <br />
        <br />
        &#x1F5A5; Github: <u><strong className="text-peach-150"><a href="https://github.com/Viha123" target="_blank">Viha123</a></strong></u>
        <br />
        <br />
        &#x1F517; LinkedIn: <u><strong className="text-peach-150"><a href="https://www.linkedin.com/in/viha-shah/" target="_blank">Viha Shah</a></strong></u>
      </p> 
    </div>
  );
};

export default Contact;
