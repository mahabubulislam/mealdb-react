import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h4>Hungry Naki</h4>
            <div className="menu">
                <a href="/Home">Home</a>
                <a href="/Cart">Cart</a>
                <a href="/Shop">Shop</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;