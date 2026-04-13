
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';
import { supabase} from './supabase/supabase'






function App() {
  const [selected , setSelected] = useState(null)
  const [file, setFile] = useState(null);

  console.log(supabase)

  const [images,setImages] = useState()


    /*wybieranie zdjecia poprzez upload file*/ 
  async function handleChange(e) {
    let file = e.target.files[0]

    const {data,error} = await supabase
    .storage
    .from('images')
    .upload(''+ file.name, file)
    
    if(data){
      console.log(data)
    }else{
      console.log(error)
    }
  }

  /*wysyłanie pliku do supabase*/ 
  const uploadFile = () =>{


  }



  return (
    <div className="App">


    <input type="file" placeholder='add image' onChange={ (e) => handleChange(e)}></input>
    <button onClick={uploadFile}>Wyślij</button>

    <img src={file} alt=""></img>

     {/* <Title></Title> */}
     {/* <UploadForm></UploadForm> */}
     {/* <ImageGrid setSelected={setSelected}></ImageGrid> */}
    
     {/* {selected && <Modal selected={selected} setSelected={setSelected}></Modal>} */}
    </div>
  );
}

export default App;
