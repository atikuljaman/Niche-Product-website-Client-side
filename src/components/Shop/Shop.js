import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://dry-forest-73103.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, [])


    if (loading) {
        return (
            <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="warning" />
            </div>
        )
    }


    return (
        <div>
            <Header />
            <div className="product-detail-heading d-flex justify-content-center align-items-center">
                <div className="text-center fw-bold text-white">
                    <h1>Shop</h1>
                    <h6>Customer Satisfaction Our Pride</h6>
                </div>
            </div>
            <Container className="card-container my-5">
                <Row className="card-row gy-4">
                    {
                        products.map(product => (
                            <Col md={3}>
                                <Card className="product-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Rating
                                            initialRating={product?.rating}
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            className="rating-icon"
                                        />
                                        <Card.Title><h6 className="text-capitalize fw-bold">{product?.name}</h6></Card.Title>
                                        <Card.Text>
                                            <p><small>{product?.desc.slice(0, 49)}...</small></p>
                                            <p className="fw-bold">Price: <span className="fw-normal">${product?.price}</span></p>
                                        </Card.Text>
                                        <NavLink className="text-decoration-none" to={`/productDetail/${product?._id}`}>
                                            <button className="w-100 py-1 border-0 card-btn">Purchase</button>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Shop;