import React from 'react'
import Searchicon from '../Atoms/Searchicon'
import Input from '../Atoms/Input'
import Cross from '../Atoms/Cross'

function Searchbar() {
  return (
    <div className='searchbar'>
        <Searchicon />
        <Input />
        <Cross/>
    </div>
  )
}

export default Searchbar