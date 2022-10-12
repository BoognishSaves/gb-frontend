import EditForm from "../components/EditForm"
import { useState, useEffect } from "react"
import { useParams, useNavigate, redirect } from "react-router-dom"
import {Link}  from 'react-router-dom'


const Show = () => {
    const [inspection, setInspection] = useState(null)
    const [editForm, setEditForm] = useState(null)
    const { id } = useParams()
    const URL = `https://garden-buddy-app.herokuapp.com/inspections/${id}`
    const navigate = useNavigate()
  
  const getInspection = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setInspection(result)
      setEditForm(result)
    } catch (err) {
      console.log(err)
    }
  }



const loaded = () => (
    <div className="person">
        <h1>Show Page</h1>
        <h2>{inspection.location}</h2>
        <h2>{inspection.plant}</h2>
        <img src={inspection.image} alt={inspection.plant+" image"} />
    </div>
)

const loading = () => {
    return <h1>Loading.........</h1>
            // alternatively you can use the spinner 
}



const handleChange = (e) => setEditForm({...editForm, [e.target.name]: e.target.value})

const handleSubmit = async (e) => {
    e.preventDefault()
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editForm)
    }
    try  {
        const response = await fetch(URL, options)
        const updatedInspection = await response.json()
        setInspection(updatedInspection)
        setEditForm(updatedInspection)
        

    } catch(err){
        console.log(err)
    }

}

const removeInspection = async () => {
    try {
      const options = {
          method:"DELETE"
      }

      const response = await fetch(URL, options)

    
      const deletedInspection = await response.json()

      // console.log(deletedPerson)
      navigate('/')

      
  } catch (err) {
      console.log(err)
      navigate(URL)
  }
}




useEffect(() => {
    getInspection()
  }, [])

  return <section>
   <h1>Show component</h1>
  { editForm ? <><EditForm handleChange= {handleChange} handleSubmit={handleSubmit} result={editForm} val={`Edit ${inspection.location}`}/></> : null}
  { inspection ? loaded() : loading()}
  <div>
    <Link to='/'>Home</Link>
    <button className="delete" onClick={removeInspection}>Delete Inspection</button>
  </div>
  </section>
}

export default Show
