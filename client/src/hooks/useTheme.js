import {useEffect} from "react"
import useLocalStorage from "./useLocalStorage";

 
const useTheme = (key, initialValue) => {
    console.log("Rendering useTheme hook")
const [theme, setTheme] = useLocalStorage(key, initialValue)

const toggleTheme = () => {
    if (theme === 'light') {
        setTheme ('dark');
    } else {
        setTheme('light');
    }
};

useEffect(()=>{
    document.body.className = theme;
    console.log('USE EFFECT-there is a change in state');
}, [theme]);


return [theme, toggleTheme]
//do i need to return useEffect?
}

export default useTheme;