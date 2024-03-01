import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthorForm = (props) => {
    const { initialName, onSubmitAuthor, errors } = props
    const [name, setName] = useState(initialName)
    const navigate = useNavigate()
    useEffect(() => {
        setName(initialName);
    }, [initialName]);

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitAuthor({ name })
    }

    const handleCancelation = () => {
        navigate("/authors")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors && errors.name && (
            <div style={{ color: 'red' }}>{errors.name.message}</div>
            )}
                </div>
                <input type="button" value="Cancel" onClick={handleCancelation} />
                <input type="submit" value="Submit" />
            </form>

        </>
    )
}
export default AuthorForm; 