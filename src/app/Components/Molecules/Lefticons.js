import React from 'react'
import ExpandingLogo from '../Atoms/ExpandingLogo'
import Logo from '../Atoms/Logo'
import Styles from './Molecules.css'

const Lefticons = () => {
  return (
    <div className='navbar-conrtainer-one'>
        <ExpandingLogo />
        <Logo />
        <span>Keep</span>
    </div>
  )
}

export default Lefticons