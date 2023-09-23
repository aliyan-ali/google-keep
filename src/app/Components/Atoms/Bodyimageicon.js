import React from 'react'
import Image from 'next/image'
import imageicon from './Assets/image.svg'



function Bodyimageicon() {
  return (
    <>
        <Image src={imageicon}  width={45} height={50} alt='iconimg'/>
    </>
  )
}

export default Bodyimageicon