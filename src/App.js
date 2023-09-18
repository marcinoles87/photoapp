
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
  const [selected , setSelected] = useState(null)
  return (
    <div className="App">
     <Title></Title>
     <UploadForm></UploadForm>
     <ImageGrid setSelected={setSelected}></ImageGrid>
     <Modal></Modal>
     
    </div>
  );
}

export default App;
