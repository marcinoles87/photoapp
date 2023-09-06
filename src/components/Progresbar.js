import React from 'react'
import useStorage from '../hooks/useStorage'

function Progresbar({file , setFile}) {
  const {url , progress} = useStorage(file)
  console.log(progress , url)
  return (
    <div className='progress-bar'>Progress</div>
  )
}

export default Progresbar