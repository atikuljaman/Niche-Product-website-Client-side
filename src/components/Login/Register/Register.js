import React, { useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Form, Row } from 'react-bootstrap';
import loginImg from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { handleRegisterUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleForm = e => {
        e.preventDefault();
        handleRegisterUser(email, password);
    }

    return (
        <div>
            <Header />
            <div className="product-detail-heading d-flex justify-content-center align-items-center">
                <div className="text-center fw-bold text-white">
                    <h1>Register your Account</h1>
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
                            <h5>Register</h5>
                            <p className="mb-4"><small>We will keep your information private</small></p>
                            <Form onSubmit={handleForm}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Your name</Form.Label>
                                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <button className="w-100 border-0 mt-2 text-uppercase py-2 sign-up-btn" type="submit">
                                    Register
                                </button>
                            </Form>
                            <div className="text-center mb-2 mt-4">
                                <NavLink to="/login"><small>Already have an account? Login</small></NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Register;