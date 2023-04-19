import { Link } from "react-router-dom";
import './BackButton.css'

export default function BackButton() {
    return (
        <Link className="back" to="/">Home</Link>
    )
}