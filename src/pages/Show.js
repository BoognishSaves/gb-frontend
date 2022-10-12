import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {Link}  from 'react-router-dom'
const Show = () => {
  const [inspection, setInspection] = useState(null)
  const { id } = useParams()
  const URL = `https://garden-buddy-app.herokuapp.com/inspections/${id}`

  const getInspection = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setInspection(result)
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


const navigate = useNavigate()

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
  { inspection ? loaded() : loading()}
  <div>
    <Link to='/'>Home</Link>
    <button className="delete" onClick={removeInspection}>Delete Inspection</button>
  </div>
  </section>
}

export default Show
