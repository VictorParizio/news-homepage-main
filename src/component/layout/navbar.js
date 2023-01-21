import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" >
                <img src={logo} alt="" />
            </Link>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">New</Link>
                </li>
                <li>
                    <Link to="/popular">Popular</Link>
                </li>
                <li>
                    <Link to="/trending">Trending</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar