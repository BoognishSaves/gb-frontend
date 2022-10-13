import {React, useRef} from 'react'

const ImageUploader = ({onFileSelect, selectedFile}) => {
    const fileInput = useRef(null)
    

    const handleFileInput = (e) => {
        
        console.log(e)
        onFileSelect(fileInput.current.files[0])
    }

    
      
        
      

    return (
        <div className="image-uploader">
            <input ref={fileInput}type="file" onChange={handleFileInput}></input>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
        </div>
    )
    
}

export default ImageUploader 

