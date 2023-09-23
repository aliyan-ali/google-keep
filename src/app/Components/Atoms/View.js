import React from 'react'
import Image from 'next/image'
import View_svg from './Assets/view.svg'


function View() {
    return (
        <Image src={View_svg} width={45} height={40} alt='icons' />
    )
}

export default View