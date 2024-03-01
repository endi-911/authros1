import { Link, useParams, useNavigate } from "react-router-dom"
import AuthorForm from "./AuthorForm"
import { useEffect, useState } from "react"
import axios from "axios"

const Author = () => {
    const {authorId} = useParams()
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {setAuthor(res.data); setLoaded(true)})
            .catch(err => console.log(err))
    }, [])

    const updateThisAuthor = (authorObj) => {
        axios.put(`http://localhost:8000/api/authors/${authorId}`, authorObj)
            .then(res => {
                navigate("/authors");
                console.log(res)
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
                } else {
                console.error("Unexpected error during author update:", err);
                }
            });
            
    }

    return(
        <>
        <h1>Favorite authors</h1>
        <Link to={"/authors"}>Home</Link>
        <AuthorForm onSubmitAuthor={updateThisAuthor} initialName={author.name} errors={errors}/>

        
        </>
    )
}
export default Author;
 
