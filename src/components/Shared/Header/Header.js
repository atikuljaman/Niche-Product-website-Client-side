import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, handleLogout } = useAuth();

    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="img-fluid logo" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-uppercase nav-link me-4 mt-1" to="/home">Home</NavLink>
                            <NavLink className="text-uppercase nav-link me-4 mt-1" to="/shop">Shop</NavLink>
                            <NavLink className="text-uppercase nav-link me-4 mt-1" to="/about">About</NavLink>
                            <NavLink className="text-uppercase nav-link me-4 mt-1" to="/blog">Blog</NavLink>
                            <NavLink className="text-uppercase nav-link me-4 mt-1" to="/contact">Contact</NavLink>
                            {user?.email ?
                                <>
                                    <NavLink className="text-uppercase nav-link me-4 mt-1" to="/dashboard">Dashboard</NavLink>
                                    <NavLink className="text-uppercase fw-bold nav-link me-4 mt-1" to="/">{user?.displayName}</NavLink>
                                    <button className="border-0 logout-btn me-4" onClick={handleLogout}>Logout</button>
                                </>
                                :
                                <>
                                    <NavLink className="text-uppercase nav-link mt-1" to="/login">Login</NavLink>
                                    <NavLink className="text-uppercase nav-link mt-1" to="/">|</NavLink>
                                    <NavLink className="text-uppercase nav-link me-4 mt-1" to="/register">Register</NavLink>
                                </>
                            }
                            <NavLink className="text-uppercase nav-link me-4" to="/contact"><BsHandbag className="fs-3" /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
