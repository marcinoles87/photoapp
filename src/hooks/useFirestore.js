import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection } from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);
  console.log(projectFirestore)

  useEffect( () => {
    const unsub = collection(projectFirestore,collection)
    .onSnapShot( (snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data() , id : doc.id})
      })
      setDoc(documents);
    })

    return () => unsub();
  } , [coll])

  return {docs}
}

export default useFirestore