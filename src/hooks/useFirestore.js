import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore} from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);

  useEffect( () => {
    
    const imgCol = doc(projectFirestore , 'images', 'images')
    console.log(imgCol)

    }, [])
  


  

return {docs}

  }
 

export default useFirestore