import React from 'react'
import Image from 'next/image'
import reminder_svg from './Assets/notifications.svg'



function Remindersicon() {
  return (
    <>
        <Image src={reminder_svg} width={45} height={40} alt='icon'/>
      <p className='icon-p'>Reminder</p>
    </>
  )
}

export default Remindersicon