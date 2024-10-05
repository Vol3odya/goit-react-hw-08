import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <h1>404 Not Found Page</h1>
            <p>
                <Link to="/">
                    Return home page
                </Link>
            </p>
        </div>
        
    )
}