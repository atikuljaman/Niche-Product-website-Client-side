import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner6 from '../../../images/banner6.png';
import banner7 from '../../../images/banner-7.jpg';
import banner8 from '../../../images/banner-8.jpg';
import './BannerCenter.css';

const BannerCenter = () => {
    return (
        <div className="my-5">
            <div className="text-center">
                <div className="banner-center-heading">
                    <h1 className="fw-bolder">ALL KINDS OF PARTS THAT YOU <br /> NEED CAN FIND HERE</h1>
                    <button className="fw-bolder text-uppercase my-4 border-0 rounded-pill shop-now-btn">Shop now</button>
                </div>
            </div>

            <Container>
                <Row className="mb-5">
                    <Col className="text-center">
                        <img className="img-fluid" src={banner6} alt="Banner Center Image" />
                    </Col>
                </Row>
                <Row className="gy-4 mt-5 banner-bottom">
                    <Col md={6} className="text-center">
                        <img className="img-fluid" src={banner7} alt="Banner Center Image" />
                    </Col>
                    <Col md={6} className="text-center">
                        <img className="img-fluid" src={banner8} alt="Banner CenterImage" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BannerCenter;