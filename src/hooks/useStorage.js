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
        const storageRef = ref(projectStorage , 'img/fruits')
        
        console.log(storageRef._location.path_)
        

    } , [file] );



  return { progress , url , error}
    
      
    
  
}

export default useStorage