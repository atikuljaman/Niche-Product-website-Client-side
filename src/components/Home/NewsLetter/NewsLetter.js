import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div>
            <Container className="news-letter-container">
                <Row className="news-letter-row">
                    <Col className="text-center d-flex align-items-center justify-content-center">
                        <div className="text-center news-letter-desc text-white">
                            <h4 className="fw-bold">SPECIAL <span>OFFER</span> FOR SUBSCRIPTION</h4>
                            <h1 className="fw-bold">GET INSTANT DISCOUNT FOR MEMBERSHIP</h1>
                            <p><small>Subscribe our newsletter and all latest news of our
                                latest product, promotion and offers</small></p>
                            <InputGroup className="mt-5 input-flied py-2 ps-3 rounded-pill mb-3">
                                <FormControl
                                    placeholder="Enter your email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="bg-transparent border-0 text-white"
                                />
                                <button className="border-0 text-white h-100 rounded-pill text-uppercase submit-btn" id="button-addon2">
                                    Submit
                                </button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;