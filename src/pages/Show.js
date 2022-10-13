import EditForm from "../components/EditForm"
import CommentForm from "../components/CommentForm"
import { useState, useEffect } from "react"
import { useParams, useNavigate, redirect } from "react-router-dom"
import {Link}  from 'react-router-dom'
import './Inspections.css'

const Show = () => {
    const [inspection, setInspection] = useState(null)
    const [editForm, setEditForm] = useState(null)
    const [commentForm, setCommentForm] = useState(null)
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
    <div className="inspection">
        <h2>{inspection.location}</h2>
        <img src={inspection.image} alt={inspection.plant+" image"} className="show-photo"/>
        <h2>{inspection.plant}</h2>
        <h2>{inspection.info}</h2>
        <h2>{inspection.comment.post}</h2>
    </div>
)

const loading = () => {
    return <h1>Loading.........</h1>
            // alternatively you can use the spinner 
}




const handleChange = (e) => setEditForm({...editForm, [e.target.name]: e.target.value})
const handleCommentChange = (e) => setEditForm({...editForm, [e.target.name]: e.target.value})

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
const handleCommentSubmit = async (e) => {
    e.preventDefault()
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentForm)
    }
    try  {
        const response = await fetch(URL, options)
        const updatedComment = await response.json()
        setCommentForm(updatedComment)
        setCommentForm(updatedComment)
        

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

  return (<section>
   <h1>Inspection Detail</h1>
  { editForm ? <><EditForm handleChange= {handleChange} handleSubmit={handleSubmit} result={editForm} val={`Edit ${inspection.location}`}/></> : null}
  { commentForm ? <><CommentForm handleChange= {handleCommentChange} handleCommentSubmit={handleCommentSubmit} resultComment={commentForm} valComment={`Edit ${commentForm.user}`}/></> : null}
  { inspection ? loaded() : loading()}
  <div>
    <Link to='/'><button className="delete">Home</button></Link>
    <button className="delete" onClick={removeInspection}>Delete</button>
  </div>
  </section>)
}

export default Show
