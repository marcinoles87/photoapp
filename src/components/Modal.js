import React from 'react';
import {motion} from 'framer-motion'

function Modal( {selected , setSelected}) {

  const setClose = (selected) =>{
    setSelected(!selected)
  }
  return (
    <motion.div   
    initial= {{scale:0}}
    animate={{ scale: 1 , rotate : 360  }}
    transition={{type:"spring" , stiffness:260 , damping: 20}}
    
    className='backdrop'>
        <img className='enlarge-drop' src={selected} alt='enlarge pic' onClick={setClose}></img>
        <button className='backdrop-button' onClick={setClose}>X</button>
    </motion.div>
  )
}

export default Modal

