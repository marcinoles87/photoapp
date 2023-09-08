import React from 'react'
import useStorage from '../hooks/useStorage';
import './progressbar.css'

function Progresbar({file , setFile}) {
  const {url , progress} = useStorage(file)
  console.log(progress , url)
  return (
    <div className='progress-bar' style={{width : progress + '%'}}>{progress}</div>
  )
}

export default Progresbar