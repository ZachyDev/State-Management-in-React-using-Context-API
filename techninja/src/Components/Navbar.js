import React, { useContext } from 'react'
import { ThemeContext } from '../contextapp/ThemeContext'

function Navbar() {
    const {isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Bookstore.</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar