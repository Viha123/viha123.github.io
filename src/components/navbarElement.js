import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NavbarElement(props) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // Special handling for Blog link - always navigate to /blog route
  if (props.name === "Blog") {
    return (
      <Link 
        to="/blog" 
        className="font-mono cursor-pointer ml-10 mr-10 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        {props.name}
      </Link>
    );
  }
  
  // For other links, use anchor links on home page or navigate to home with anchor
  const href = isHomePage ? `#${props.name.toLowerCase()}` : `/#${props.name.toLowerCase()}`;
  
  return (
    <a href={href} className="font-mono cursor-pointer ml-10 mr-10 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
      {props.name}
    </a>
  );
}
