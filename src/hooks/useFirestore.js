import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , docs, QuerySnapshot, Firestore, getFirestore} from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);


  useEffect( () => {
    const unsub = collection(projectFirestore , 'images')
    // const docRef = docs(projectFirestore , 'images' )
    const docSnap = getDocs(unsub , 'images')
   
    console.log(unsub)
    console.log(docSnap)
    // console.log(docSnap)
    

    
  } , [])
    
    
    return { docs }
    

    // const docRef = doc(db , 'images' , 'img')
    // const docSnap = getDocs(imgCol);
    // const newData = docSnap.map( item => item.data())
    
    
  


  

return {docs}

  }
 

export default useFirestore