import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { Col, Container, Form, Row } from 'react-bootstrap';
import loginImg from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleLoginUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleForm = e => {
        e.preventDefault();
        handleLoginUser(email, password, location, history);
    }

    return (
        <div>
            <Header />
            <div className="product-detail-heading d-flex justify-content-center align-items-center">
                <div className="text-center fw-bold text-white">
                    <h1>Login to your Account</h1>
                    <h6>Customer Satisfaction Our Pride</h6>
                </div>
            </div>
            <Container className="register-container">
                <Row>
                    <Col className="d-flex align-items-center justify-content-center" md={6}>
                        <img className="img-fluid w-75" src={loginImg} alt="Login_Image" />
                    </Col>
                    <Col className="form-container m-auto" md={6}>
                        <div className="form-detail">
                            <h5>Login</h5>
                            <p className="mb-4"><small>Welcome back please login :)</small></p>
                            <Form onSubmit={handleForm}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember" />
                                    <button className="border-0 bg-transparent">Forgot Password</button>
                                </Form.Group>
                                <button className="w-100 border-0 mt-2 text-uppercase py-2 sign-up-btn" type="submit">
                                    Login
                                </button>
                            </Form>
                            <div className="text-center mb-2 mt-4">
                                <NavLink to="/register"><small>Don't have an account? Register</small></NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;