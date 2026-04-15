
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import { supabase} from './supabase/supabase';
import { v4 as uuidv4 } from 'uuid';






function App() {
  const [selected , setSelected] = useState(null)
  const [file, setFile] = useState(null);
  const [fileUrl,setFileUrl] = useState('');

  console.log(supabase)

  const [images,setImages] = useState('')
  const [load , setLoad] = useState(false)

  useEffect( () =>{

    setImages([])

    },[])


    /*wybieranie zdjecia poprzez upload file*/ 
  async function handleChange(e) {
    let file = e.target.files[0]

    let filePath = e.target.name[0]

    const {data,error} = await supabase
    .storage
    .from('images')
    .upload(''+ file.name + uuidv4(), file)
    
    if(data){
      console.log(data)
      setFile(data)
    }else{
      console.log(error)
    }

  
  }

  /*wysyłanie pliku do supabase*/ 
  const uploadFile = () =>{


  }

  async function handleShowAll(e){

    const {data,error} = await supabase
    .storage
    .from('images')
    .list('', {
      limit:100,
      offset:0,
      sortBy: { column: 'name', order: 'asc' },
    })

    const fileUrl = data.map( item => ({
      name:item.name,
      url:supabase.storage.from('images').getPublicUrl(item.name).data.publicUrl
    }))

    console.log(fileUrl)

    if(error){
      console.log(error)
    }else{
      setImages(fileUrl)
      setLoad(true)
    }

    

   console.log(data)


   console.log(images)
    
  }



  return (
    <div className="App">


    <input type="file" placeholder='add image' onChange={ (e) => handleChange(e)}></input>
    <button onClick={uploadFile}>Wyślij</button>

    

    <button onClick={handleShowAll}>Pokaz wszystkie zdjecia</button>

    {load ? images.map( (item,index) => {
      return(
        <div key={index}>
          <img className='img' src={item.url} alt={item.name}></img>
          <p>{item.name}</p>
        </div>
      )
    })

    :''
  
  
  }

  

     {/* <Title></Title> */}
     {/* <UploadForm></UploadForm> */}
     {/* <ImageGrid setSelected={setSelected}></ImageGrid> */}
    
     {/* {selected && <Modal selected={selected} setSelected={setSelected}></Modal>} */}
    </div>
  );
}

export default App;
