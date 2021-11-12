import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import './BestSeller.css';

const BestSeller = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="best-seller-heading text-center mb-5 px-3">
                <h2>BEST SELLER</h2>
                <p>All best seller product are now available for you
                    and your can buy this product from here any time
                    any where so sop now</p>
            </div>

            <Container className="card-container">
                <Row className="card-row gy-4">
                    {
                        products.map(product => (
                            <Col md={4}>
                                <Card className="product-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Rating
                                            initialRating={product?.rating}
                                            readonly
                                            emptySymbol="far fa fa-star"
                                            fullSymbol="fas fa fa-star"
                                            className="rating-icon mb-2"
                                        />
                                        <Card.Title><h6 className="text-capitalize fw-bold">{product?.name}</h6></Card.Title>
                                        <Card.Text>
                                            <p><small>{product?.desc.slice(0, 49)}...</small></p>
                                            <p className="fw-bold">Price: <span className="fw-normal">${product?.price?.toFixed(2)}</span></p>
                                        </Card.Text>
                                        {/* <NavLink className="text-decoration-none" to={`/productDetail/${product?._id`}>
                                            <button className="w-100 py-1 border-0 card-btn">Purchase</button>
                                        </NavLink> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )).slice(0, 6)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BestSeller;