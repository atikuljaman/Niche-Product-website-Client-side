import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { BsCalendarCheck } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import Rating from 'react-rating';
import './Testimonial.css';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://dry-forest-73103.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <div className="testimonial">
            <div className="text-center mb-5">
                <h5 className="text-uppercase fw-bold">Testimonials</h5>
                <h2 className="text-uppercase fw-bold">What client's say about us</h2>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <Carousel>
                            {
                                reviews.map((review => (
                                    <Carousel.Item interval={2000}>
                                        <Row className="testimonial-row">
                                            <Col md={5}>
                                                <img className="img-fluid w-100 h-100" src="data:image/jpeg;base64,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" alt="Testimonial_Image" />
                                            </Col>
                                            <Col className="testimonial-review" md={6}>
                                                <Rating
                                                    initialRating={review?.rating}
                                                    readonly
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    className="rating-icon"
                                                />
                                                <h3>{review?.name}</h3>
                                                <p><small>CEO Auto Cars</small></p>
                                                <p><small>{review?.reviewDesc}</small></p>
                                                <small className="d-flex align-items-center"><BsCalendarCheck className="me-2" /> <span className="mt-1">20/11/2021</span></small>
                                                <div className="text-end">
                                                    <FaQuoteRight className="fs-2 quote-icon" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                )))
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;