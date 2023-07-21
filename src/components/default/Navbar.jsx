
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navlinks'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/mlb/players'>Players</NavLink>
                </li>
                <li>
                    <NavLink to='/mlb/players/search'>Search</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
};