import ImageUploader from "./ImageUploader"
import { useState } from "react"
import './Inspections.css'
const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/GardenBuddy/image/upload"


const UploadForm = (props) =>{
    const [file, setFile] = useState(null)
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        try{
        const formData = new FormData();
        formData.append("upload_preset", "GardenBuddy");
        formData.append("file", file);
        
        formData.append ("api_key", "966197665531868")
        
        const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        })
        
        
          const myResponse = await response.json()
          props.setImageURL(myResponse.url)
          return myResponse
    }
    catch(err){
        console.log(err)
    }
    } 
    
    return(
        <div>
            <form onSubmit={handleSubmit} className="input-buttons">
                <ImageUploader onFileSelect= {setFile}selectedFile ={file}/>
                <input type="submit" value="upload" className="upload-button"></input>
            </form>
        </div>
    )
}

export default UploadForm