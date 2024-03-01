import { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import axios from "axios";



const Main = () => {
    const [updated,setupdated]= useState(false)
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch((err)=>console.log(err))
    }, [updated])
    const removeAuthor = authorId => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
        .then((res)=>{
            console.log(res);
            setAuthors(authors.filter(author=> author._id !== authorId));
        })
        .catch((err)=>console.log(err))
        
    }
    const createAuthor = authorId => {
        axios.post('http://localhost:8000/api/authors/', authorId)
            .then(res => {
                console.log(res.data.errors);
                setupdated(!updated)
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
                console.log("help : ", errors)
            })
    }
    return (
        // <Route path='/authors/:authorId/edit' element={<Author/>}/>
        <div>
            <h2>Add a new author </h2>
            <AuthorForm onSubmitAuthor={createAuthor} initialName="" errors={errors}></AuthorForm>
            <hr />
            <AuthorList authorslist={authors} removeAuthor={removeAuthor}></AuthorList>
        </div>
    )
}
export default Main; 