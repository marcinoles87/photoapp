
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';
import { supabase } from './supabase/supabase'




function App() {
  const [selected , setSelected] = useState(null)
    const [file, setFile] = useState(null);



    /*wybieranie zdjecia poprzez upload file*/ 
  const handleChange = (e) =>{
    const zdjecie = e.target.files[0]

    setFile(zdjecie)
  }



  return (
    <div className="App">


    <input type="file" placeholder='add image' onChange={handleChange}></input>

     {/* <Title></Title> */}
     {/* <UploadForm></UploadForm> */}
     {/* <ImageGrid setSelected={setSelected}></ImageGrid> */}
    
     {/* {selected && <Modal selected={selected} setSelected={setSelected}></Modal>} */}
    </div>
  );
}

export default App;
