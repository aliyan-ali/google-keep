import React from 'react'
import Image from 'next/image'
import trash_svg from './Assets/delete.svg'



function Trashicon() {
    return (
        <>
            <Image src={trash_svg} width={45} height={40} alt='icon' />
            <p className='icon-p'>Trash</p>
        </>
  )
}

export default Trashicon