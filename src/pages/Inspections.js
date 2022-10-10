import { useState, useEffect } from 'react'
import './Inspections.css'
const Inspections = (props) =>{

    const [inspection, setInspection] = useState([])

		const BASE_URL = "http://localhost:4000/inspections/";

    const getInspection = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allInspection = await response.json()
            setInspection(allInspection)
            console.log(allInspection)
        }catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{getInspection()}, [])

    console.log(`There are ${inspection.length} people available to render`)
    const loaded = () => {
        return inspection?.map((inspection) => {
          return (
            <div key={inspection._id}>
              <h1>{inspection.location}</h1>
              <img src={inspection.image} />
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
            src="https://freesvg.org/img/1544764567.png"
          />{" "}
            </span>
          </h1>
        </section>
      );
    
      return (
        <section className="people-list">{inspection && inspection.length ? loaded() : loading()}</section>
      );
    
}

export default Inspections
