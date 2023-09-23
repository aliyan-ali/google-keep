import React from 'react'
import Image from 'next/image'
import edit_svg from './Assets/edit.svg'

function Editicon() {
    return (
        <>
            <Image src={edit_svg} width={45} height={40} alt='icon' />
            <p className='icon-p'>Edit</p>
        </>
  )
}

export default Editicon