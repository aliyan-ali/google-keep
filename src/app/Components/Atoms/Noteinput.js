import React from 'react'
import style from './Atom.css'

function Noteinput() {
  return (
    <>
        <p>
            <textarea name='content' placeholder='Take a note ...' className='noteinput'></textarea>
        </p>
    </>
  )
}

export default Noteinput