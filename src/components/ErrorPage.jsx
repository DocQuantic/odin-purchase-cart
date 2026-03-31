import { Link } from "react-router"

const ErrorPage = () => {
    return (
        <>
            <h1>Oh no, this page doesn't exist!</h1>
            <Link to="/">You can go back to home page by clicking here, though!</Link>
        </>
    )
}

export default ErrorPage