import React from "react";
// import Typist from 'react-typist';
// import ReactDOM from "react-dom/client";
export default function Hero() {
  return (
    <div
      id="big-container"
      className="bg-peach-50 rounded-md w-[50vw] h-[50vh] flex flex-row place-content-center align-middle transform transition duration-500 hover:scale-125 hover:bg-peach-50"
    >
      <div
        id="left-part"
        className="p-[7%] w-[50%] flex flex-col place-content-center justify-center"
      >
        {/* <Typist className="font-mono">&#128075; Hello, I am Viha Shah!</Typist> */}
        <h1 class="relative w-[max-content] font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-peach-50
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-black">&#128075; Hello, I am Viha Shah!</h1>

        {/* <h2 className="font-mono">&#128075; Hello, I am Viha Shah!</h2> */}
        <h2 className="font-mono">&#x1F4BB; I am a Software Developer</h2>
        {/* <h2 className="font-mono">&#x1F4DA; I am passionate about learning</h2> */}

      </div>
      <div
        id="right-part"
        className="w-[50%] flex flex-row place-content-center items-center"
      >
        <div className="w-[75%] h-[75%] border-zinc-900 rounded-full border-2 bg-red-600">
        <img className="w-full h-full object-cover rounded-full overflow-hidden" src={require('../images/profile.jpg')} />        </div>

      </div>

    </div>
  );
}
