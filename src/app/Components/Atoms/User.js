import React from 'react'
import Image from 'next/image'
import User_png from './Assets/user.png'


function User() {
    return (
        <Image src={User_png} width={45} height={40} alt='icons' />
    )
}

export default User