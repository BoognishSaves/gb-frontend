import { useState, useEffect } from 'react'
import './Inspections.css'
import {Link}  from 'react-router-dom'
import ImageForm from "./ImageForm"

const BASE_URL = "https://garden-buddy-app.herokuapp.com/";

const getInspection = async (fn) => {
    try {
        const response = await fetch(BASE_URL +  "inspections")
        const allInspections = await response.json();
        fn(allInspections)
        
       
    }catch(err){
        console.log(err)
    }
    

}

const Inspections = (props) =>{
    
    const initForm ={
        location: "",
        image: "",
        plant: "",
    }
    const [inspection, setInspection] = useState([]);
    const [newForm, setNewForm] = useState(initForm)
    useEffect (()=>{
        getInspection(setInspection)
    }, [])

    const handleSubmit =async (e) =>{
        e.preventDefault()
       
        try{
            
    
            const newInspection = {...newForm, image: imageURL}
            
           
    
            const testingOutput = JSON.stringify(newInspection)
            
            const options = {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:testingOutput
            }
    
            const URL = BASE_URL+'inspections'
            
            const response= await fetch(URL, options)
            const responseData = await response.json()
            
            
    
            getInspection(setInspection)
            setNewForm(initForm)
    
        }catch (err){
            console.log(err)
        }
    }
    
    const handleChange = (e) =>{
        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
    }
    

    const loaded = () => {
        return inspection?.map((look) => {
          return (
            <div key={look._id} >
              <Link to={`/inspections/${look._id}`}className='person-card'>
              <h1>{look.location}</h1>
              <img src={look.image} alt={look.plant} className='card-image' />
              <h3>{look.plant}</h3>
              </Link>
            </div>
          );
        });
      };
    
      const loading = () => (
        <section className="people-list">
          <h1>
            Loading...
            <span>
              <img
                className="spinner"
                src="https://freesvg.org/img/1544764567.png" alt="spinner"
              />{" "}
            </span>
          </h1>
        </section>
      );
      const [imageURL, setImageURL] = useState("")
      return (
        <>
        <section>
	      <h2>Create a new inspection</h2>
        <div id="form" className="image-form">
        <ImageForm setImageURL = {setImageURL}/>
        </div>
	      <form onSubmit={handleSubmit}>
            <input
            type="text"
                value={newForm.location}
                name="location"
                placeholder="location"
                onChange={handleChange}
            />
            <input
                type="text"
                value={imageURL}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.plant}
                name="plant"
                placeholder="plant"
                onChange={handleChange}
            />
		    <input type="submit" value="Create Inspection" />
	      </form>
        </section>


        <section className="people-list">{inspection && inspection.length ? loaded() : loading()}</section>
        </>
      );


}
export default Inspections
