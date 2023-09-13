import { useEffect , useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,getDocs, onSnapshot , doc, QuerySnapshot, Firestore} from "firebase/firestore";

const useFirestore = (coll) => {
  const [docs , setDoc] = useState([]);
  

const imgCol = doc(projectFirestore , 'images' , 'im')
console.log(imgCol)

// 
  // useEffect( (coll) => {
    
  //   imgCol.forEach( (doc) => {
  //     console.log(doc.data())
  //     const documents = [];
  //     documents.push(...doc.data())
  //     console.log(documents)
  //   })
  // } , [])


  setDoc()


return {docs}
 }

export default useFirestore