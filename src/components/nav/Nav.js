import React from 'react';
import './Nav.css'
import logo from '../../images/Logo.svg'

const Nav = (props) => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
            <div className="nav">
                <a href="">Home</a>
                <a href="">Order {props.count} </a>
                <a href="">Order Review</a>
                <a href="">manage Inventory</a>
            </div>
        </div>
    );
};

export default Nav;