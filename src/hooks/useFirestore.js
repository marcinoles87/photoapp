import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore, getFirestore, getDocFromCache, query, where , CollectionReference} from "firebase/firestore";

function useFirestore  (coll)  {
  const [docs , setDoc] = useState([]);

const unsub = collection(projectFirestore , 'images')
  useEffect( () => {
   
    const getDocList = async () => {
      try {
      const data = await getDocs(unsub);
      const filteredData = data.docs.map( (doc) => ( 
        {...doc.data() , 
          id: doc.id
        })

      )
      console.log(filteredData)
      } catch (error) {
        console.log(error)
      }
      
    }
    
    // const docRef = doc(unsub , 'images' )
    // const docSnap = getDocs(unsub , 'images') 
    // const q = query(unsub , where ('images' , "==" , true)) 
    // const querySnapshot = getDocs(q);
  
    // console.log(q)
    // console.log(unsub)
    // console.log(docRef)
    // console.log(docSnap)

    // const  documents = [];
    
    // documents.push('sss' , 'dsdf')
    // console.log(documents)
    // setDoc(
      
    // )

    getDocList();
  
  } , [])
    
    console.log(docs)
    return { docs }
    

    // const docRef = doc(db , 'images' , 'img')
    // const docSnap = getDocs(imgCol);
    // const newData = docSnap.map( item => item.data())
    
    
  


  

return {docs}

  }
 

export default useFirestore

