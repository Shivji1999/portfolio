import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
        <Navbar className='navbar' bg='dark' expand='lg' fixed='top' variant='dark' >
            <Navbar.Brand href='#home'>Shivji</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='#home'>About</Nav.Link>
                    <Nav.Link href='#services'>Services</Nav.Link>
                    <Nav.Link href='#blogs'>Blogs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        </>
    );
};

export default Header;
