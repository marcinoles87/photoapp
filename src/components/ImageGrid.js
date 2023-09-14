import React from 'react';
import useFirestore from '../hooks/useFirestore'

function ImageGrid() {
  const {docs} = useFirestore('images')
  
  
  return (
    <div className='img-grid'>ImageGrid</div>
  )
}

export default ImageGrid