import React from 'react'
import Noteinput from '../Atoms/Noteinput'
import Noteaddbtn from '../Atoms/Noteaddbtn'
import style from './Molecules.css'


function Addnote() {
  return (
    <div className='addnote'>
        <Noteinput />
        <Noteaddbtn />
    </div>
  )
}

export default Addnote