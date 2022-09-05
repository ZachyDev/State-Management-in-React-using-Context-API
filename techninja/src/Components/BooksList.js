import React, { useContext } from 'react'
import { ThemeContext } from '../contextapp/ThemeContext'

function BooksList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark; 
  return (
    <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
            <li style={{ background: theme.ui }}>Game of Numbers</li>
            <li style={{ background: theme.ui }}>Garden City</li>
            <li style={{ background: theme.ui }}>The Last Pirate</li>
        </ul>
    </div>
  )
}

export default BooksList