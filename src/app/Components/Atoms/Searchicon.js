import React from 'react'
import Image from 'next/image'
import search from './search.png'
import styles from './Atom.css'

const Searchicon = () => {
  return (
      <div className='Searchicon'> 
        <Image src={search} width={20} height={20}/>
     </div>
  )
}

export default Searchicon