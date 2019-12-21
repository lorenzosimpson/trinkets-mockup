import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../customHooks/useDarkMode';
import { CartContext } from '../contexts/CartContext';

const Navbar = props => {
    const { getCartTotal, cart } = useContext(CartContext)
    const [darkMode, setDarkMode] = useDarkMode()

    const routeToCart = () => {
        props.history.push('/cart')
      }

    return (
        <div className='navbar'>
            <Link to='/'>
                <h1>Trinkets</h1>
            </Link>
            <div className='navlinks'>
                <Link to='/shop'>
                    <p>Shop</p>
                </Link>
                <p onClick={routeToCart}>{`Cart (${cart.length})`}</p>
                {/* <p>{`Cart total ${getCartTotal()}`}</p> */}
                <div className='dark-toggle' onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌞' : '🌙'}</div>
            </div>
            
        </div>
    )
}
export default Navbar;