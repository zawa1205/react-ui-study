import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    let location = useLocation().pathname;
    if(location === "/") {
        return(
        <header className="header">
            <div className="top-img">
                <h2>Modern style</h2>
                <p>モダンなUIを学ぶためのサンプルページです</p>
            </div>
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/Slider-page">Slider</Link>
                <Link to="/Tab-page">Tabs</Link>
            </div>
        </header>
        )
    } else {
        return(
        <header className="header">
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/Slider-page">Slider</Link>
                <Link to="/Tab-page">Tabs</Link>
            </div>
        </header>
        )
    }
}
export default Header;