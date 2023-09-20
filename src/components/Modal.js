import React from 'react';
import {motion} from 'framer-motion'

function Modal( {selected , setSelected}) {

  const setClose = (selected) =>{
    setSelected(!selected)
  }
  return (
    <motion.div   
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className='backdrop'>
        <img className='enlarge-drop' src={selected} alt='enlarge pic' onClick={setClose}></img>
        <button className='backdrop-button' onClick={setClose}>X</button>
    </motion.div>
  )
}

export default Modal