import React from "react";
export default function NavbarElement(props) {
  return (
    <a href={`#${props.name.toLowerCase()}`} className="font-mono cursor-pointer ml-10 mr-10 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
      {props.name}
    </a>

  );
}
