import React from 'react';
import {motion} from 'framer-motion'

function Modal( {selected , setSelected}) {

  const setClose = (selected) =>{
    setSelected(!selected)
  }
  return (
    <motion.div   
    initial= {{scale:0}}
    whileTap={{ scale: 0.9 , rotate : 180 }}
    className='backdrop'>
        <img className='enlarge-drop' src={selected} alt='enlarge pic' onClick={setClose}></img>
        <button className='backdrop-button' onClick={setClose}>X</button>
    </motion.div>
  )
}

export default Modal