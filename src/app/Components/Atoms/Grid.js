import React from 'react'
import Image from 'next/image'
import Grid_png from './Assets/grid.png'


function Grid() {
    return (
        <Image src={Grid_png} width={45} height={40} alt='icons' className='gridicon'/>
    )
}

export default Grid