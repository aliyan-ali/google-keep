import React from 'react'
import Image from 'next/image' 
import img  from './Expandingicon.png'
import styles from './Atom.css'

function ExpandingLogo() {
  return (
    <div className='menu-logo'>
      <Image src={img} width={25} height={25} />
    </div>
  )
}

export default ExpandingLogo