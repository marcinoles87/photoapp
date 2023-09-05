import React from 'react'
import { useState , useEffect } from 'react';
import {projectStorage} from '../firebase/config'

function useStorage(file) {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    useEffect( () => {
        //references
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state changed' , (snap) => {
            
        })

    } , [file] )



  return (
    <div>useStorage</div>
  )
}

export default useStorage