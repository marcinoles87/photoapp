import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot , doc, QuerySnapshot, Firestore} from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);
  

const imgCol = collection(projectFirestore , 'images')
console.log(imgCol)


  useEffect( (coll) => {
    const unsub = onSnapshot(doc(projectFirestore , "images" , 'img') , (snap) =>
    {
      console.log(snap.data())
  } , [coll])


  setDoc(null)
})

return {docs}
 }

export default useFirestore