import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [isLightTheme, setLightTheme] = useState(true);
    const [light, setLight] = useState({
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    })
    const [dark, setdark] = useState({
        syntax: '#ddd',
        ui: '#333',
        bg: '#555'
    })
  return (
   <ThemeContext.Provider value={{isLightTheme, light}}>
        { props.children }
   </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;