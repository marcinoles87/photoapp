import React from 'react'
import { useState , useEffect } from 'react';
import {projectStorage , projectFirestore , app} from '../firebase/config'
import { getMetadata, getStorage , ref , uploadBytes, uploadBytesResumable , getDownloadURL} from 'firebase/storage';
import {  Timestamp, getFirestore , collection, setDoc , addDoc } from 'firebase/firestore';

function useStorage(file) {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    
    
    useEffect( () => {

      const metadata = {
        contentType: 'image/jpeg'
      };
        //references
        const storag = getStorage();
        const firestore = getFirestore();
        // const db = firestore(app)
        const storageRef = ref(storag , 'img/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef , file , metadata)
        const collectionRef = collection(projectFirestore,'images')

        console.log(collectionRef)
        
        uploadTask.on('state_changed' , 
        (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percent)
        }, (error) =>{
          setError(error)
        } , async () => {
          setUrl(getDownloadURL(uploadTask.snapshot.ref).then( (downloadUrl) => {
            console.log('file available at - ' , downloadUrl)
            setUrl(url);
            // collectionRef.add(url)
            addDoc(collection(collectionRef, url ))


          }) 

          )
          
        }
        )
        
        

    } , [file] );



  return { progress , url , error}
    
      
    
  
}

export default useStorage