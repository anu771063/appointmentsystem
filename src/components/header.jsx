import React from 'react';
import styles from './header.module.scss';
import logo from '../assets/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () =>{
return (
<header>
<section className={`${styles.top_bar} top_bar text-center py-2`}>
    <p className="m-0 text-white font18">Seamless Scheduling, Anytime, Anywhere.</p>
</section>
<section className={styles.menu_bar}>
    <div className="container">
    <Navbar>
        <Container>
          <Navbar.Brand href="index.html"><img src={logo}/></Navbar.Brand>
          <Nav className="ms-auto font18">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Nav.Link to href="index">Home</Nav.Link>
            <Nav.Link href="./about.jsx">About Us</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link href="login" className={`${styles.cta_link} text-white`}>Login/Register</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
</section>
</header>
);
};
export default Header;