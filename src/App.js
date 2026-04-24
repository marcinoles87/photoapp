
import './App.css';

import { useEffect, useState } from 'react';
import { supabase} from './supabase/supabase';
import { v4 as uuidv4 } from 'uuid';






function App() {

  let [fileUrl,setFileUrl] = useState('');
  const [dataWydarzenia,setData] = useState();
  const [nazwaWydarzenia,setNazwa] = useState('');
  const [opisWydarzenia,setOpis] = useState('')
  const [dane,setDane] = useState([])



  const [images,setImages] = useState('')
  const [load , setLoad] = useState(false)

  useEffect( () =>{

    setImages([])

    },[])

  


    /*wybieranie zdjecia poprzez upload file*/ 

  async function handleChange(e) {

    let file = e.target.files[0]

    let {data,error} = await supabase
    .storage
    .from('images')
    .upload(uuidv4()+ file.name , file)
    
    if(data){
      
      console.log(data)
      setFileUrl(supabase.storage.from('images').getPublicUrl(file.name).data.publicUrl)
    }else{

    }

     const { data: fileUrl} = await supabase.storage
         .from('images')
         .getPublicUrl(`${file.name}` ?? "default");
      if (fileUrl) {
        setFileUrl(fileUrl.publicUrl);
  }

    console.log(fileUrl)
  }

  /*wysyłanie pliku do supabase*/ 
  async function uploadFile() {
    
  console.log(supabase)

    let { dat, err } = await supabase
    .from('przedszkole111dane')
    .insert({
      data:dataWydarzenia,
      wydarzenie:nazwaWydarzenia,
      opisWydarzenia:opisWydarzenia,
      img:fileUrl = supabase.storage.from('images').getPublicUrl(opisWydarzenia).data.publicUrl
});

if (err) console.error(err);
else console.log('Inserted:', dat);
    
    
     

  }

  async function handleShowAll(e){

    const { data, error } = await supabase
    .from('przedszkole111dane')
    .select('*')
    .order('data', { ascending: false })

    setDane(data)

    console.log(dane)

    // const {data,err} = await supabase
    // .storage
    // .from('images')
    // .list('', {
    //   limit:100,
    //   offset:1,
    //   sortBy: { column: 'name', order: 'asc' },
    // })

    // const fileUrl = data.map( item => ({
    //   name:item.name,
    //   data:dataWydarzenia,
    //   nazwaWydarzenia:nazwaWydarzenia,
    //   opisWydarzenia:opisWydarzenia,
    //   url:supabase.storage.from('images').getPublicUrl(item.name).data.publicUrl
    // }))

    // console.log(fileUrl)

    // if(err){
    //   console.log(err)
    // }else{
    //   setImages(fileUrl)
    //   setLoad(true)
    // }

    

    
  }

  async function deleteFile(item) {
    
   

    const {data,error} = await supabase
    .storage
    .from('images')
    .remove(item)

    console.log(item)

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


    {dane ? dane.map( (item,index) => {
      return(
        <div key={index} className='img-group'>
          <h1>{item.wydarzenie}</h1>
          <h2>{item.opisWydarzenia}</h2>
          <img className='img' src={item.img} alt={index}></img>
          <p>{item.id}</p>
          <button onClick={ (e) =>deleteFile(item)}>Delete</button>
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
