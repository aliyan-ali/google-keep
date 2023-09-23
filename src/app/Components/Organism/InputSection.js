import React from 'react'
import Displayinput from '../Molecules/Displayinput'
import style from './Organism.css'
import Addtittle from '../Molecules/Addtittle'
import Addnote from '../Molecules/Addnote'



function InputSection() {
  return (
    <div className='inputsection-container'>

        <div>
          <Addtittle/>
          <Addnote/>
        </div>
        {/* <Displayinput /> */}
    </div>
  )
}

export default InputSection