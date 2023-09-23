import React from 'react'
import Notetittleinput from '../Atoms/Notetittleinput'
import Notepinicon from '../Atoms/Notepinicon'

import style from './Molecules.css'


function Addtittle() {
  return (
    <div className='tittleinput-container'>
        <Notetittleinput />
        <Notepinicon />
    </div>
  )
}

export default Addtittle