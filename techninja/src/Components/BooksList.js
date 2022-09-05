import React, { useContext } from 'react'
import { ThemeContext } from '../contextapp/ThemeContext'

function BooksList() {
  const { isLightTheme, light, dark, setLightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark; 

  // change background
  const changeBackground = () => {
    setLightTheme(false)
  }
  return (
    <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
      <button className='btn btn-primary' onClick={ changeBackground }>Change Background</button>
        <ul>
            <li style={{ background: theme.ui }}>Game of Numbers</li>
            <li style={{ background: theme.ui }}>Garden City</li>
            <li style={{ background: theme.ui }}>The Last Pirate</li>
        </ul>
    </div>
  )
}

export default BooksList