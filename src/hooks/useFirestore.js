import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore, getFirestore} from "firebase/firestore";

const useFirestore = (collectionImages) => {
  const [docs , setDoc] = useState([]);


  useEffect( (collectionImages) => {
    const db = getFirestore()
    const imgCol = collection(db,'images');
 

    // const docRef = doc(db , 'images' , 'img')
    // const docSnap = getDocs(imgCol);
    // const newData = docSnap.map( item => item.data())
    
    }, [collectionImages])
  


  

return {docs}

  }
 

export default useFirestore