import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/footer-logo.png';
import { BsSuitHeartFill } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <Row className="gy-4">
                    <Col md={3}>
                        <img className="img-fluid mb-3" src={logo} alt="Footer_Logo" />
                        <p>Lukas is the best parts shop for your car accessories. What kind of parts do you need you can get here soluta nobis</p>
                    </Col>
                    <Col md={2}>
                        <h5 className="text-decoration-underline mb-3">Information</h5>
                        <p className="m-0 mt-2">Our company</p>
                        <p className="m-0 mt-2">Contact us</p>
                        <p className="m-0 mt-2">Our services</p>
                        <p className="m-0 mt-2">Why We?</p>
                        <p className="m-0 mt-2">Careers</p>
                    </Col>
                    <Col md={2}>
                        <h5 className="text-decoration-underline mb-3">Quicklink</h5>
                        <p className="m-0 mt-2">About</p>
                        <p className="m-0 mt-2">Blog</p>
                        <p className="m-0 mt-2">Shop</p>
                        <p className="m-0 mt-2">Cart</p>
                        <p className="m-0 mt-2">Contact</p>
                    </Col>
                    <Col md={2}>
                        <h5 className="text-decoration-underline mb-3">Support</h5>
                        <p className="m-0 mt-2">Blog</p>
                        <p className="m-0 mt-2">Contact</p>
                        <p className="m-0 mt-2">Return Policy</p>
                        <p className="m-0 mt-2">Online Support</p>
                        <p className="m-0 mt-2">Money Back</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-decoration-underline mb-3">Store Information</h5>
                        <p className="m-0 mt-2">2005 Stokes Isle Apartment. 896,</p>
                        <p className="m-0 mt-2">Washington 10010, USA</p>
                        <p className="m-0 mt-2">https://example.com</p>
                        <p className="m-0 mt-2">(+68) 120034509</p>
                    </Col>
                </Row>
            </Container>
            <div className="bg-black text-center py-3">
                <p className="m-0">© Lukas,2021. Made With <BsSuitHeartFill className="text-danger" /> by Atikul Jaman</p>
            </div>
        </div>
    );
};

export default Footer;