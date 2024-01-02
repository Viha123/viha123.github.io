import React from "react";
import ReactDOM from "react-dom/client";
export default function Hero() {
  return (
    <div
      id="big-container"
      className="bg-peach-50 rounded-md w-[50vw] h-[50vh] flex flex-row place-content-center align-middle transform transition duration-500 hover:scale-125 hover:bg-peach-150"
    >
      <div
        id="left-part"
        className="p-[7%] w-[50%] flex flex-col place-content-center justify-center"
      >
        <h2 className="font-mono">&#128075; Hello, I am Viha Shah!</h2>
        <h2 className="font-mono">&#x1F4BB; I am a Software Developer</h2>
        {/* <h2 className="font-mono">&#x1F4DA; I am passionate about learning</h2> */}

      </div>
      <div
        id="right-part"
        className="w-[50%] flex flex-row place-content-center items-center"
      >
        <div className="w-[75%] h-[75%] border-zinc-900 rounded-full border-2 bg-red-600">
        <img className="w-full h-full object-cover rounded-full overflow-hidden" src={require('./profile.jpg')} />        </div>

      </div>

    </div>
  );
}
