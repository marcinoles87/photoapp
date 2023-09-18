import React from 'react'

function Modal( {selected}) {
  return (
    <div className='backdrop'>
        <img src={selected} alt='enlarge pic'></img>
    </div>
  )
}

export default Modal