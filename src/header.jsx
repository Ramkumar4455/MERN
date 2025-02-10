import React from 'react';
import { data, Link } from 'react-router-dom';
function Header() {
    console.log("dasavdsv");

    return (
        <div className="HeaderC">
            <div className="Logo">
                <img 
                    src="https://logodix.com/logo/985738.png" 
                    className="CR7" 
                    alt="CR7 Logo" 
                />
                <h1>CR7 Blogs</h1>
            </div>
            <div className="navigation">
                <ul className="headerUl">
                <Link to={"/"} className='links'>Home</Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
