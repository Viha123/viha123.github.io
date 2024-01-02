import React from 'react';
import "../navbar.css"
import NavbarElement from './navbarElement';
export default function Navbar () {
    return (
        <header>
        {/* <input type="checkbox" id = "nav-toggle" class = "nav-toggle"></input> */}
        <nav className='pt-10 pb-10'>
            <ul className = "flex flex-row place-content-center">
                {/* <li>About</li>
                <li>Projects</li>
                <li>Contact</li> */}
                <NavbarElement name = "About" />
                <NavbarElement name = "Projects" />
                <NavbarElement name = "Contact" />

            </ul>

        </nav>
        {/* <label for="nav-toggle" class ="nav-toggle-label">
            <span></span>
        </label>  */}
    </header>
    )
}