import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner3 from '../../../images/banner-3.jpg';
import banner4 from '../../../images/banner-4.jpg';
import banner5 from '../../../images/banner-5.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="carousel-item-1" interval={100000}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="text-white banner-desc w-100 d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h2 className="fw-bold text-uppercase">New technology & build</h2>
                                        <h1 className="fw-bold text-uppercase">Wheels & tyres <br /> collections</h1>
                                        <button className="border-0 rounded-pill mt-3 fw-bold text-uppercase">Shop now</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="carousel-item-2" interval={50000}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="text-white banner-desc w-100 d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h2 className="fw-bold text-uppercase">New technology & build</h2>
                                        <h1 className="fw-bold text-uppercase">Wheels & tyres <br /> collections</h1>
                                        <button className="border-0 rounded-pill mt-3 fw-bold text-uppercase">Shop now</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

            {/* BANNER BOTTOM */}
            <Container className="banner-bottom">
                <Row className="gy-3 p-2">
                    <Col md={4}>
                        <img className="img-fluid" src={banner3} alt="banner" />
                    </Col>
                    <Col md={4}>
                        <img className="img-fluid" src={banner4} alt="banner" />
                    </Col>
                    <Col md={4}>
                        <img className="img-fluid" src={banner5} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;