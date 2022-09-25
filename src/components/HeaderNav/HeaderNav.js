import React from 'react';
import './HeaderNav.css'
import logo from '../../images/Logo.svg'

const HeaderNav = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <img src={logo} alt="" />

                <div className="nav-links">
                    <a href="/order">Order</a>
                    <a href="/orderReview">Order Review</a>
                    <a href="/manageInventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNav;