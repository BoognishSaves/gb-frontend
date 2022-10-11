import { useState, useEffect } from 'react'
import './Inspections.css'
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/";

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
            
    
            const newInspection = {...newForm}
            
           
    
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
        return inspection?.map((inspection) => {
          return (
            <div key={inspection._id}>
              <h1>{inspection.location}</h1>
              <img src={inspection.image} alt={inspection.plant} />
              <h3>{inspection.plant}</h3>
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
    
      return (
        <>
        <section>
	      <h2>Create a new inspection</h2>
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
                value={newForm.image}
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
