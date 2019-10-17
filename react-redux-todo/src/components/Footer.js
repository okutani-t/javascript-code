import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <footer>
    <span>SHOW:</span>
    <FilterLink filter='SHOW_ALL'>ALL</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>ACTIVE</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>COMPLETED</FilterLink>
  </footer>
)

export default Footer
