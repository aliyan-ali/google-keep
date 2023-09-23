import React from 'react'
import Image from 'next/image'
import drawicon from './Assets/draw.svg'

function Bodydrawicon() {
  return (
    <>
        <Image src={drawicon} width={45} height={50} alt='drawicon'/>
    </>
  )
}

export default Bodydrawicon