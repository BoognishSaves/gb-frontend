import './Header.css';

const EditForm = ({handleSubmit,handleChange, result, val}) => {
    return (
        <form className='edit-form' onSubmit={handleSubmit}>
        <input
        type="text"
            value={result.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
        />
        <input
            type="text"
            value={result.info}
            name="info"
            placeholder="info"
            onChange={handleChange}
        />
        <input
            type="text"
            value={result.plant}
            name="plant"
            placeholder="plant"
            onChange={handleChange}
        />
        <input type="submit" value={val} />
      </form>  
    )
}

export default EditForm