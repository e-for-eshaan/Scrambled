import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to='/'>
        <h2 className={classes.logo}>Scrambled</h2>
      </Link>
      <ul>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>About Us</li></Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Blog</li></Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Register</li></Link>
      </ul>
    </nav >
  );
};

export default Navbar;
