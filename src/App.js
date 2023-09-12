
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';


function App() {
  console.log()
  return (
    <div className="App">
     <Title></Title>
     <UploadForm></UploadForm>
     <ImageGrid></ImageGrid>
     
    </div>
  );
}

export default App;
