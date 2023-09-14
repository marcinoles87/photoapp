import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore, getFirestore} from "firebase/firestore";

const useFirestore = (collectionImages) => {
  const [docs , setDoc] = useState([]);


  // useEffect( (collectionImages) => {
    const db = getFirestore()
    const imgCol = collection(db,'images');
    const docSnap = getDocs(imgCol);
    console.log(docSnap)
    // }, [collectionImages])
  


  

return {docs}

  }
 

export default useFirestore