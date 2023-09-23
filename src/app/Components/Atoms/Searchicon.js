import React from 'react'
import Image from 'next/image'
import search from './Assets/search.png'
import styles from './Atom.css'

const Searchicon = () => {
  return (
      <> 
      <Image src={search} alt='0' width={45} height={40} className='Searchicon'/>
     </>
  )
}

export default Searchicon