// this shows the toggle button. It'll change the darkMode state to t/f if u click it

import React, { useEffect, useState } from 'react';
import '../App.css';
// import useDarkMode from '../hooks/useDarkMode';

//functional component - focus on useDarkMode hook and this. display NB in App.

const NavBar = () => {
    const [theme, setTheme] = useState('light');
    // const [navState, setNavState] = useState('dark');

    const toggleTheme = () => {
        // setDarkMode(!darkMode); this only toggled the state
        // followed example to change the state and class name -- the classname changes the dark/light
        if (theme === 'light') {
            setTheme ('dark');
        } else {
            setTheme('light');
        }
    };

    // console.log will show if theme state changes - which it will bc it's toggling each time u click
    useEffect(()=>{
        document.body.className = theme;
        console.log('USE EFFECT-there is a change in state');
    }, [theme]);
    

    return(
        <nav className={`App ${theme}`}>
            <div className="navbar">
                <button 
                onClick={toggleTheme}
                >
                    NAV: Now it's {theme}.
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
