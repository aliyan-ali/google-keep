import React from 'react'
import Image from 'next/image'
import notes_svg from './Assets/lightbulb.svg'


function Notesicon() {
    return (
        <>
            <Image src={notes_svg} width={45} height={40} alt='icon' />
            <p className='icon-p'>Notes</p>
        </>
  )
}

export default Notesicon