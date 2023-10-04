import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs} from "firebase/firestore";

function useFirestore  ()  {
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
  
  } , [])
    
    return { docs }
  

  }
 

export default useFirestore

