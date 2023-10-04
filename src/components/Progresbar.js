import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import './progressbar.css'

function Progresbar({file , setFile}) {
  const {url , progress} = useStorage(file)
  
  useEffect( () =>{

    if(url) {
      setFile(null)
    }
  }, [url , setFile])
  
  return (
    <div className='progress-bar' style={{width : progress + '%'}}>{progress}</div>
  )
}

export default Progresbar