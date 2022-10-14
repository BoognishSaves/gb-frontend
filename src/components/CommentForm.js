import './Header.css';

const CommentForm = ({handleCommentSubmit,handleCommentChange, resultComment, valComment}) => {
    return (
        <form className='edit-form' onSubmit={handleCommentSubmit}>
        <input
        type="text"
            value={resultComment.user}
            name="user"
            placeholder="user"
            onChange={handleCommentChange}
        />
        <input
            type="text"
            value={resultComment.post}
            name="post"
            placeholder="post"
            onChange={handleCommentChange}
        />
        
        <input type="submit" value={valComment} />
      </form>  
    )
}

export default CommentForm