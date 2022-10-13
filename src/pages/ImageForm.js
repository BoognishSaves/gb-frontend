import ImageUploader from "./ImageUploader"
import { useState } from "react"

// const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/garden-buddy/image/upload"
const CLOUDINARY_URL="cloudinary://966197665531868:hCyZaXRS6-kCTQl5RO96B-ai_9Q@garden-buddy/image/upload"

const UploadForm = (props) =>{
    const [file, setFile] = useState(null)
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        try{
        const formData = new FormData();
        formData.append("upload_preset", "garden-buddy");
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
            <h1>Create A Meal</h1>
            <form onSubmit={handleSubmit} >
                <ImageUploader onFileSelect= {setFile}selectedFile ={file}/>
                <input type="submit" value="upload"></input>
            </form>
        </div>
    )
}

export default UploadForm