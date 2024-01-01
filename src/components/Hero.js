import React from "react";
import ReactDOM from "react-dom/client";
export default function Hero() {
  return (
    <div id = "big-container" className="bg-slate-400 w-[60vw] h-[60vh] flex flex-row place-content-center align-middle">
      
        <div id="left-part" className="w-[50%] flex flex-row place-content-center bg-green-600 justify-center align-middle">
            Intro to ME :D
        </div>
        <div id="right-part" className="w-[50%] flex flex-row place-content-center bg-red-600">Picture of me</div>
        
      
    </div>
  );
}
