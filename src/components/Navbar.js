import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../customHooks/useDarkMode';

const Navbar = props => {
    const [darkMode, setDarkMode] = useDarkMode()
    return (
        <div className='navbar'>
            <Link to='/'>
                <h1>Trinkets</h1>
            </Link>
            <div className='navlinks'>
                <Link to='/shop'>
                    <p>Shop</p>
                </Link>
                <div className='dark-toggle' onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌞' : '🌙'}</div>
            </div>
            
        </div>
    )
}
export default Navbar;