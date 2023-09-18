import React from 'react'

function Modal( {selected , setSelected}) {

  const setClose = (selected) =>{
    setSelected(!selected)
  }
  return (
    <div className='backdrop'>
        <img className='enlarge-drop' src={selected} alt='enlarge pic'></img>
        <button className='backdrop-button' onClick={setClose}>X</button>
    </div>
  )
}

export default Modal