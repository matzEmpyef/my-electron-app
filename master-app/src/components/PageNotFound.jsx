import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <center>
            <h1>404 - Not Found!</h1>
            <Link to="/">Click here to go back to Home</Link>
        </center>
    )
}

export default PageNotFound
