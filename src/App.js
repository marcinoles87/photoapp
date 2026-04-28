
import './App.css';

import { useEffect, useState } from 'react';
import { supabase} from './supabase/supabase';
import { v4 as uuidv4 } from 'uuid';






function App() {

  let [fileUrl,setFileUrl] = useState('');
  let [fileUrl2,setFileUrl2] = useState('');
  let [fileUrl3,setFileUrl3] = useState('');
  const [dataWydarzenia,setData] = useState();
  const [nazwaWydarzenia,setNazwa] = useState('');
  const [opisWydarzenia,setOpis] = useState('')
  const [dane,setDane] = useState([])

  const [load , setLoad] = useState(false)

  useEffect( () =>{

    const { data, error } =  supabase
    .from('przedszkole111wydarzenia')
    .select('*')
    .order('data', { ascending: false })


    },[])

  


    /*wybieranie zdjecia poprzez upload file*/ 

  async function handleUpload(e) {

    let file = e.target.files[0]

    let {data,error} = await supabase
    .storage
    .from('images')
    .upload(uuidv4()+ file.name , file)
    

     const { data:urlPath} = await supabase.storage
         .from('images')
         .getPublicUrl(data.path);
      if (urlPath){
        console.log(urlPath.publicUrl);
        setFileUrl(urlPath.publicUrl)
  }

  }

  async function handleUpload2(e) {

    let file = e.target.files[0]

    let {data,error} = await supabase
    .storage
    .from('images')
    .upload(uuidv4()+ file.name , file)
    

     const { data:urlPath} = await supabase.storage
         .from('images')
         .getPublicUrl(data.path);
      if (urlPath){
        console.log(urlPath.publicUrl);
        setFileUrl2(urlPath.publicUrl)
  }

  }

  async function handleUpload3(e) {

    let file = e.target.files[0]

    let {data,error} = await supabase
    .storage
    .from('images')
    .upload(uuidv4()+ file.name , file)
    

     const { data:urlPath} = await supabase.storage
         .from('images')
         .getPublicUrl(data.path);
      if (urlPath){
        console.log(urlPath.publicUrl);
        setFileUrl3(urlPath.publicUrl)
  }

  }

  

  /*wysyłanie pliku do supabase*/ 

  async function uploadFile() {
    

    let { dat, err } = await supabase
    .from('przedszkole111wydarzenia')
    .insert({
      data:dataWydarzenia,
      wydarzenie:nazwaWydarzenia,
      opisWydarzenia:opisWydarzenia,
      img:fileUrl,
      img2:fileUrl2,
      img3:fileUrl3
});

if(err){
  console.error(err)}
  else{
    alert('dodano wydarzenie do bazy danych')
  }

  }


  async function handleShowAll(e){

    const { data, error } = await supabase
    .from('przedszkole111wydarzenia')
    .select('*')
    .order('data', { ascending: false })

    if(data.length < 1){
      alert('brak danych do wyświetlenia')
    }

    setDane(data)

    console.log(dane)

  }

  /*usuwanie wybranego elementu na podstawie id */

  async function deleteFile(item) {
    
   console.log(item)

    const {data,error} = await supabase
    .from('przedszkole111wydarzenia')
    .delete()
    .eq('id',item.id)


  }




  return (
    <div className="App">


    <input type="file" placeholder='add image' onChange={ (e) => handleUpload(e)}></input>
    <input type="file" placeholder='add image' onChange={ (e) => handleUpload2(e)}></input>
    <input type="file" placeholder='add image' onChange={ (e) => handleUpload3(e)}></input>

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
          <h1>{item.id}{item.wydarzenie}</h1>
          <h2>{item.opisWydarzenia}</h2>
          <img className='img' src={item.img} alt={index}></img>
          <img className='img' src={item.img2} alt={index}></img>
          <img className='img' src={item.img3} alt={index}></img>
          <button onClick={ (e) =>deleteFile(item)}>Delete</button>
        </div>
      )
    })

    :'brak danych do wyświetlenia'
  
  
  }

  

     {/* <Title></Title> */}
     {/* <UploadForm></UploadForm> */}
     {/* <ImageGrid setSelected={setSelected}></ImageGrid> */}
    
     {/* {selected && <Modal selected={selected} setSelected={setSelected}></Modal>} */}
    </div>
  );
}

export default App;
