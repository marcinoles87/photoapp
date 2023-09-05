import React, { useState } from 'react'

function UploadForm() {

  const [file , setFile ] = useState(null);
  const [ error , setError] = useState(null)

   const types = ['image/png' , 'image/jpeg'];

    const handleChange = (e) =>{

        let selected = e.target.files[0] ;
        
        if(selected && types.includes(selected.type)) {
           setFile(selected);
        }else{
          setFile(null);
          setError('please select an image file png/jpeg');
        }
        
    }

    console.log(file)

  return (
    <form className='form'>
        <input type='file' onChange={handleChange}></input>
        <div>
          {error && <div className='error'> {error} </div>}
        </div>
    </form>
  )
}

export default UploadForm