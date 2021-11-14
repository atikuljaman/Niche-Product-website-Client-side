import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import offerImg from '../../../images/offer.png';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer">
            <Container>
                <Row className="gy-4">
                    <Col className="text-center" md={6}>
                        <img className="img-fluid" src={offerImg} alt="offer_image" />
                    </Col>
                    <Col className="text-center" md={6}>
                        <h1 className="fw-bold">FLASH DEALS</h1>
                        <h2 className="fw-bold">HURRY UP AND GET 25% DISCOUNT</h2>
                        <button className="border-0 fw-bolder rounded-pill text-uppercase my-4 shop-now-btn">Add to cart</button>
                        <div className="d-flex justify-content-center offer-date mt-4">
                            <div className="">
                                <h1 className="fw-bold">00</h1>
                                <h4 className="fw-bold">Days</h4>
                            </div>
                            <div className="">
                                <h1 className="fw-bold">00</h1>
                                <h4 className="fw-bold">Hours</h4>
                            </div>
                            <div className="">
                                <h1 className="fw-bold">00</h1>
                                <h4 className="fw-bold">Minutes</h4>
                            </div>
                            <div className="">
                                <h1 className="fw-bold">00</h1>
                                <h4 className="fw-bold">Seconds</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Offer;