import React from 'react'
import Notes from '../Molecules/Notes'
import Reminder from '../Molecules/Reminder'
import Edit from '../Molecules/Edit'
import Archive from '../Molecules/Archive'
import Trash from '../Molecules/Trash'
import style from './Organism.css'



function Sidebar() {
  return (
    <div className='sidebar'>
        <Notes />
        <Reminder />
        <Edit />
        <Archive />
        <Trash />
    </div>
  )
}

export default Sidebar