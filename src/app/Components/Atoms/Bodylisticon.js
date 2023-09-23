import React from 'react'
import Image from 'next/image'
import listicon from './Assets/task.svg'



function Bodylisticon() {
  return (
    <>
        <Image src={listicon} width={45} height={50} alt='new list'/>
    </>
  )
}

export default Bodylisticon