import React from 'react'
import Image from 'next/image'
import archieve_svg from './Assets/archive.svg'




function Archiveicon() {
    return (
        <>
            <Image src={archieve_svg} width={45} height={40} alt='icon' />
            <p className='icon-p'>Archive</p>
        </>
  )
}

export default Archiveicon