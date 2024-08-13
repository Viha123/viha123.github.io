import React from 'react';
import "../navbar.css"
import NavbarElement from './navbarElement';
export default function Navbar () {
    return (
        <header>
        {/* <input type="checkbox" id = "nav-toggle" class = "nav-toggle"></input> */}
        <nav className='fixed top-0 w-full z-50 pt-10 pb-10 bg-zinc-900'>
            <ul className = "flex flex-row place-content-center">

                <NavbarElement name = "Home" />
                <NavbarElement name = "Projects" />
                <NavbarElement name = "Skills" />
                <NavbarElement name = "About" />
                <NavbarElement name = "Contact" />

            </ul>

        </nav>
        {/* <label for="nav-toggle" class ="nav-toggle-label">
            <span></span>
        </label>  */}
    </header>
    )
}