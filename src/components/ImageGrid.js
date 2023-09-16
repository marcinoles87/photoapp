import React from 'react';
import useFirestore from '../hooks/useFirestore'

function ImageGrid() {
  const {docs} = useFirestore('images')
  
  
  return (
    <div className='img-grid'>
    {docs.map( (item) => {

      return <img className='im' src={item.name} key={item.id}></img>
    })}  
    
    </div>
  )

}

export default ImageGrid