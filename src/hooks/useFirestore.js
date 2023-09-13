import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot , doc, QuerySnapshot} from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);
  console.log(projectFirestore)

  useEffect( () => {
    const unsub = onSnapshot(doc(projectFirestore , 'images' , 'sf') , (docum) =>
    {
     const documents = [];
     documents.forEach( (doc) => {
      documents.push( {...doc.data(), id:doc.id})
     })

     console.log(documents)
    })

    return () => unsub();
  } , [coll])

  return {docs}
}

export default useFirestore