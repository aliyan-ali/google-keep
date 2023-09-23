import React from 'react'
import Image from 'next/image'
import Setting_svg from './Assets/setting.png'


function Setting() {
    return (
        <Image src={Setting_svg} width={45} height={40} alt='icons' />
    )
}

export default Setting