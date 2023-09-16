import React from 'react';
import useFirestore from '../hooks/useFirestore'

function ImageGrid() {
  const {docs} = useFirestore('images')
  
  
  return (
    <div className='img-grid'>ImageGrid
    {docs.map( (item) => {

      return <img className='im' src={item.name}></img>
    })}  
    
    </div>
  )

}

export default ImageGrid