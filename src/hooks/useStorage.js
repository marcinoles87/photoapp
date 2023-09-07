import React from 'react'
import { useState , useEffect } from 'react';
import {projectStorage} from '../firebase/config'
import { getStorage , ref , uploadBytes } from 'firebase/storage';

function useStorage(file) {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    
    console.log(file)
    console.log(projectStorage)
    useEffect( () => {
        //references
        const storag = projectStorage;
        const storageRef = ref(storag , storag.name)
        
        uploadBytes(storageRef , file).then( (item) => {
          console.log('upload')
        })
        

    } , [file] );



  return { progress , url , error}
    
      
    
  
}

export default useStorage