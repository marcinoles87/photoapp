import React from 'react'
import { useState , useEffect } from 'react';
import {projectStorage} from '../firebase/config'

function useStorage(file) {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    
    console.log(file)
    console.log(projectStorage)
    useEffect( () => {
        //references
        const storageRef = projectStorage.app.name;
        console.log(storageRef)
        let percentage = (file.bytesTransfered / file.totalBytes) * 100
        console.log(percentage)
        

    } , [file] );



  return { progress , url , error}
    
      
    
  
}

export default useStorage