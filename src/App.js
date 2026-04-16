
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
  const [dataWydarzenia,setData] = useState();
  const [nazwaWydarzenia,setNazwa] = useState('');
  const [opisWydarzenia,setOpis] = useState('')

  console.log(supabase)
  console.log(dataWydarzenia)
  console.log(nazwaWydarzenia)
  console.log(opisWydarzenia)

  const [images,setImages] = useState('')
  const [load , setLoad] = useState(false)

  useEffect( () =>{

    setImages([])

    },[])


    /*wybieranie zdjecia poprzez upload file*/ 

  async function handleChange(e) {

    let file = e.target.files[0]

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
    
    // const fileUrl = data.map( item => ({
    //   name:item.name,
    //   data:dataWydarzenia,
    //   nazwaWydarzenia:nazwaWydarzenia,
    //   opisWydarzenia:opisWydarzenia,
    //   url:supabase.storage.from('images').getPublicUrl(item.name).data.publicUrl
    // }))


  }

  async function handleShowAll(e){

    const {data,error} = await supabase
    .storage
    .from('images')
    .list('', {
      limit:100,
      offset:1,
      sortBy: { column: 'name', order: 'asc' },
    })

    const fileUrl = data.map( item => ({
      name:item.name,
      data:dataWydarzenia,
      nazwaWydarzenia:nazwaWydarzenia,
      opisWydarzenia:opisWydarzenia,
      url:supabase.storage.from('images').getPublicUrl(item.name).data.publicUrl
    }))

    console.log(fileUrl)

    if(error){
      console.log(error)
    }else{
      setImages(fileUrl)
      setLoad(true)
    }

    

    
  }

  const deleteFile = () =>{

  }



  return (
    <div className="App">


    <input type="file" placeholder='add image' onChange={ (e) => handleChange(e)}></input>

    <label>Data</label>
    <input type="date" onChange={ (e) =>setData(e.target.value)}></input>

    <label>Nazwa wydarzenia</label>
    <input type="text" placeholder='opis' onChange={(e) =>setNazwa(e.target.value)}></input>

    <label>Opis wydarzenia</label>

    <input type="text" onChange={(e) =>setOpis(e.target.value)}></input>

    <button onClick={uploadFile}>Wyślij</button>

    <button onClick={handleShowAll}>Pokaz wszystkie zdjecia</button>

    {load ? images.map( (item,index) => {
      return(
        <div key={index} className='img-group'>
          <h1>{item.nazwaWydarzenia}</h1>
          <h2>{item.opisWydarzenia}</h2>
          <img className='img' src={item.url} alt={item.name}></img>
          <p>{item.name}</p>
          <button onClick={deleteFile}>Delete</button>
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
