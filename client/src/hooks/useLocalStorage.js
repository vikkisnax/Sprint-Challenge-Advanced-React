import {useState} from "react";


const useLocalStorage = (key, initialValue) => {
    console.log("Rendering UseLocalStorage hook")
    const [storedValue, setStoredValue] = useState( () => {
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
    }) 
    console.log('HEY', initialValue)

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]; 
}
export default useLocalStorage;


//now use this hook in other comps - like usetheme