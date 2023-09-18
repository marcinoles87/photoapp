import React from 'react';
import useFirestore from '../hooks/useFirestore'

function ImageGrid({setSelected}) {
  const {docs} = useFirestore('images')
  
  
  return (
    <div className='img-grid'>
    {docs && docs.map( (item) => {

      return <img className='im' src={item.name} key={item.id}
        onClick={ () => setSelected(item.name)}
      ></img>
    })}  
    
    </div>
  )

}

export default ImageGrid