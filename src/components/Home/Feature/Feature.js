import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon1 from '../../../images/feature-icon/icon-1.png';
import icon2 from '../../../images/feature-icon/icon-2.png';
import icon3 from '../../../images/feature-icon/icon-3.png';
import './Feature.css';

const Feature = () => {
    return (
        <div>
            <Container className="feature-container">
                <Row className="feature-row gy-4">
                    <Col className="feature-detail" md={4}>
                        <div>
                            <img className="img-fluid feature-img mb-3" src={icon1} alt="Feature Icon" />
                        </div>
                        <div className="ms-4 w-75">
                            <h5 className="m-0 mb-1">Free Home Delivery</h5>
                            <p><small>Provide free home delivery for all product over $100</small></p>
                        </div>
                    </Col>
                    <Col className="feature-detail" md={4}>
                        <div>
                            <img className="img-fluid feature-img mb-3" src={icon2} alt="Feature Icon" />
                        </div>
                        <div className="ms-4 w-75">
                            <h5 className="m-0 mb-1">Quality Products</h5>
                            <p><small>We ensure our product quality all times</small></p>
                        </div>
                    </Col>
                    <Col className="feature-detail" md={4}>
                        <div>
                            <img className="img-fluid feature-img mb-3" src={icon3} alt="Feature Icon" />
                        </div>
                        <div className="ms-4 w-75">
                            <h5 className="m-0 mb-1">Online Support</h5>
                            <p><small>To satisfy our customer we try to give support online</small></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;