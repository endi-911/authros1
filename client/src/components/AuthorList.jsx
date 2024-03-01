import { Link } from "react-router-dom"
import DeleteAuthor from "./DeleteAuthor"
const AuthorList = (props) => {
    const { authorslist, removeAuthor } = props
    
    return (
        <>
            <div>
                {authorslist.sort((a, b) => a.name.localeCompare(b.name)).map((author, idx) => {
                    return (
                        <p key={idx}>
                            <Link to={"/authors/" + author._id}>
                                {author.name}
                            </Link>
                            |
                            <Link to={"/authors/" + author._id + "/edit/"}>
                        Edit Author
                    </Link> 
                            |
                            <DeleteAuthor authorId={author._id} successfullyDeleted={()=>removeAuthor(author._id)}/>
                        </p>
                    )
                })}
            </div>
        </>
    )
}
export default AuthorList ;
