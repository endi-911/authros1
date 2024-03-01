import axios from "axios"
const DeleteAuthor = (props) => {
    const {successfullyDeleted, authorId} = props
    const deleteAuthor = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => successfullyDeleted())
            .catch(err => console.log(err))
    }
    return(
        <>
            <button onClick={deleteAuthor}>Delete Author</button>
        </>
    )
}
export default DeleteAuthor;