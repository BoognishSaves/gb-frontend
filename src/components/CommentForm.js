import './Header.css';

const CommentForm = ({handleCommentSubmit,handleChange, resultComment, valComment}) => {
    return (
        <form className='edit-form' onSubmit={handleCommentSubmit}>
        <input
        type="text"
            value={resultComment.user}
            name="user"
            placeholder="user"
            onChange={handleChange}
        />
        <input
            type="text"
            value={resultComment.post}
            name="post"
            placeholder="post"
            onChange={handleChange}
        />
        
        <input type="submit" value={valComment} />
      </form>  
    )
}

export default CommentForm