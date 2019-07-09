import React from 'react'
import './search-box.styles.css'

// destructuring this component so that it's generic and can be used later
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      // sets the state of searchField to the input from the textbox
      onChange={handleChange}
    />
  )
}
