import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <NavLink 
          exact 
          to="/"
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>Home</li>
        </NavLink>
        <NavLink 
          to="/about"
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>About</li>
        </NavLink>
        <NavLink 
          to="/projects"
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>Projects</li>
        </NavLink>

      </ul>
    </nav>
  )
}

export default Nav;