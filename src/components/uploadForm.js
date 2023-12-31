import React, { useState } from 'react'
import Progresbar from './Progresbar';

function UploadForm() {

  const [file , setFile ] = useState(null);
  const [ error , setError] = useState(null)

   const types = ['image/png' , 'image/jpeg'];

    const handleChange = (e) =>{

        let selected = e.target.files[0] ;
        
        if(selected && types.includes(selected.type)) {
           setFile(selected);
           setError('');

           
        }else{
          setFile(null);
          setError('please select an image file png/jpeg');
        }
        
    }

    

  return (
    <form className='form'>
      <label>
        <input type='file' onChange={handleChange}></input>
          <span>+</span>
       </label>
        <div>
          {error && <div className='error'> {error} </div>}
          {file && <div className='file'> {file.name}  </div>}
          {file && <Progresbar file={file} setFile={setFile}></Progresbar>}
        </div>
    </form>
  )
}

export default UploadForm