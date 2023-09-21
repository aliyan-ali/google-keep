import React from 'react'
import Lefticons from '../Molecules/Lefticons'
import styles from './Organism.css'


  
const Navbar = () => {
  return (
    <div className='Navbar' onClick={() => console.log('abc')}>
        <Lefticons />
    </div>
  )
}

export default Navbar