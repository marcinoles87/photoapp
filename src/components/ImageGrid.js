import React from 'react';
import useFirestore from '../hooks/useFirestore'

function ImageGrid() {
  const {docs} = useFirestore('images')
  // console.log(docs)
  
  return (
    <div className='img-grid'>ImageGrid</div>
  )
}

export default ImageGrid