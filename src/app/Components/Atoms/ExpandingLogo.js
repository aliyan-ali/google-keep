import React from 'react'
import Image from 'next/image' 
import img  from './Assets/Expandingicon.png'
import styles from './Atom.css'

function ExpandingLogo() {
  return (
    <div className='menu-logo'>
      <Image src={img} width={45} height={45} alt='icon'/>
    </div>
  )
}

export default ExpandingLogo