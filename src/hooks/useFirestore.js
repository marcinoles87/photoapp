import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore , CollectionReference} from "firebase/firestore";

function useFirestore  (coll)  {
  const [docs , setDoc] = useState([]);

const unsub = collection(projectFirestore , 'images')
  useEffect( () => {
   
    const getDocList = async () => {
      try {
      const data = await getDocs(unsub);
      const filteredData = data.docs.map( (doc) => ( 
        {...doc.data() , id: doc.id}))
        setDoc(filteredData)
      console.log(filteredData)
      } catch (error) {
        console.log(error)
      }
      
    }
    
  

    getDocList();
  
  } , [coll])
    
    console.log(docs)
    return { docs }
  

  }
 

export default useFirestore

