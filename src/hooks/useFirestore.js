import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection } from "firebase/firestore";

const useFirestore = (collection) => {
  const [docs , setDoc] = useState([]);

  useEffect( () => {
    projectFirestore.collection(collection)
    .onSnapShot( (snap) => {

    })
  } , [collection])

  return {docs}
}