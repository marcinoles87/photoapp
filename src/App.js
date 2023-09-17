
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';


function App() {
  console.log()
  return (
    <div className="App">
     <Title></Title>
     <UploadForm></UploadForm>
     <Modal></Modal>
     
    </div>
  );
}

export default App;
