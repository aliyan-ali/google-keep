import React from 'react'
import Image from 'next/image'
import pinicon from './Assets/pin.svg' 
import style from './Atom.css'




function Notepinicon() {
  return (
    <Image src={pinicon} width={45} height={40} alt='pin icon'/>
  )
}

export default Notepinicon