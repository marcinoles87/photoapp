import React from 'react'
import { useState , useEffect } from 'react';
import {projectStorage} from '../firebase/config'
import { getMetadata, getStorage , ref , uploadBytes, uploadBytesResumable } from 'firebase/storage';

function useStorage(file) {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    
    console.log(file)
    console.log(projectStorage)
    useEffect( () => {

      const metadata = {
        contentType: 'image/jpeg'
      };
        //references
        const storag = getStorage();
        const storageRef = ref(storag , 'img/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef , file , metadata)
        
        uploadTask.on('state_changed' , 
        (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percent)
        }, (error) =>{
          setError(error)
        }
        )
        console.log(storageRef._location.path_)
        

    } , [file] );



  return { progress , url , error}
    
      
    
  
}

export default useStorage