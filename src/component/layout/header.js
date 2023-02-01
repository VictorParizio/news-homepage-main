import { Link } from "react-router-dom"
import { useState } from "react"

import logo from '../../images/logo.svg'
import './header.css'
import './hamburguer.css'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const btnMobile = () => {
        setToggle(!toggle)
    }

    // const btnMobile = document.getElementById('btnMobile')
    // function toggleMenu(){
    //     const nav = document.getElementById('nav')
    //     nav.classList.toggle('active')
    // }  
    // btnMobile.addEventListener('click', toggleMenu)

    return (
        <header className="header">
            <Link to="/" >
                <img src={logo} alt="" />
            </Link>
            <nav id="nav" className={toggle ? 'active' : ''}>
                <button id="btn-mobile" onClick={btnMobile}><span id="hamburguer"></span></button>
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
        </header>
    )
}

export default Header