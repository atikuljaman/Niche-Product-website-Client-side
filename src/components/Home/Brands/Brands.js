import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brand1 from '../../../images/brands/brand-1.png';
import brand2 from '../../../images/brands/brand-2.png';
import brand3 from '../../../images/brands/brand-3.png';
import brand4 from '../../../images/brands/brand-4.png';
import brand5 from '../../../images/brands/brand-5.png';
import './Brands.css';

const Brands = () => {
    return (
        <div className="brands">
            <Container>
                <Row className="gy-5">
                    <Col md={1}>

                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" md={2}>
                        <img className="img-fluid" src={brand1} alt="Brand_Image" />
                    </Col>
                    <Col className="text-center" md={2}>
                        <img className="img-fluid" src={brand2} alt="Brand_Image" />
                    </Col>
                    <Col className="text-center" md={2}>
                        <img className="img-fluid" src={brand3} alt="Brand_Image" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" md={2}>
                        <img className="img-fluid" src={brand4} alt="Brand_Image" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" md={2}>
                        <img className="img-fluid" src={brand5} alt="Brand_Image" />
                    </Col>
                    <Col md={1}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Brands;