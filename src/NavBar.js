import React from 'react';
import { Link } from 'react-router-dom';

const NavBar  = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/content">Practical Activities</Link>
            </div>
        </nav>
      );
}
 
export default NavBar ;