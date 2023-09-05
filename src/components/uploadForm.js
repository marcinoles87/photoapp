import React, { useState } from 'react'

function UploadForm() {

  const [file , setFile ] = useState([]);

    const handleChange = (e) =>{

        let selected = e.target.files[0] ;
        console.log(selected);
        
    }

  return (
    <form>
        <input type='file' onChange={handleChange}></input>
    </form>
  )
}

export default UploadForm