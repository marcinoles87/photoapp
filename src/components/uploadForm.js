import React from 'react'

function UploadForm() {

    const handleChange = (e) =>{
        let selected = e.target.files[0]
        
    }

  return (
    <form>
        <input type='file' onChange={handleChange}></input>
    </form>
  )
}

export default UploadForm