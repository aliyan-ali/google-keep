import React from 'react'
import Lefticons from '../Molecules/Lefticons'
import Searchbar from '../Molecules/Searchbar'
import Righticons from '../Molecules/Righticons'
import styles from './Organism.css'

  
const Navbar = () => {



  return (
    <div className='navbar' >
      <Lefticons/>
      <Searchbar/>
      <Righticons />
    </div>
  )
}

export default Navbar