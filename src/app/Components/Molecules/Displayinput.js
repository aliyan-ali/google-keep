import React from 'react'
import Bodyinput from '../Atoms/Bodyinput'
import Bodylisticon from '../Atoms/Bodylisticon'
import Bodydrawicon from '../Atoms/Bodydrawicon'
import Bodyimageicon from '../Atoms/Bodyimageicon'
import style from './Molecules.css'

function Displayinput() {
  return (
    <div className='displayinput-contaier'> 
        <Bodyinput />
        <Bodylisticon/>
        <Bodydrawicon/>
        <Bodyimageicon/>
    </div>
  )
}

export default Displayinput