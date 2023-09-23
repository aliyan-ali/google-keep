import React from 'react'
import Image from 'next/image'
import refresh_png from './Assets/refresh.png'


function Refresh() {
    return (
        <Image src={refresh_png} width={45} height={40} alt='icons' />
    )
}

export default Refresh