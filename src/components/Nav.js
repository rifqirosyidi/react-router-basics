import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: "white"
  }

  return (
    <nav>
       <Link style={navStyle} to='/'>
            <h4>Logo</h4>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/news'>
            <li>News</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
