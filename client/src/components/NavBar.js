import React from 'react';
import '../App.css';
import useTheme from '../hooks/useTheme';


const NavBar = () => {
    console.log("Rendering NavBar component")
    const [theme, setTheme] = useTheme('nav-bar', 'light');

    return(
        <nav className="navbar">
            <div>
                <button 
                onClick={setTheme}
                >
                    NAV: Now it's {theme}.
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
