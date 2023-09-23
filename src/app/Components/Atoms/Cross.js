import React from 'react'
import Image from 'next/image'
import cross_png from './Assets/cross.png'

function Cross() {
  return (
    <>
        <Image width={50} height={45} src={cross_png} alt='icon' className='cross' />
    </>
  )
}

export default Cross