import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Header />
            <div className="product-detail-heading d-flex justify-content-center align-items-center">
                <div className="text-center fw-bold text-white">
                    <h1>Product Details</h1>
                    <h6>Customer Satisfaction Our Pride</h6>
                </div>
            </div>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <img className="img-fluid w-75" src={product?.img} alt="Product_Image" />
                        <div>
                            <Rating
                                initialRating={product?.rating}
                                readonly
                                emptySymbol="far fa fa-star"
                                fullSymbol="fas fa fa-star"
                                className="rating-icon mb-4"
                            />
                            <h3>{product?.name}</h3>
                            <h5>Price: <span className="fw-normal">${product?.price}</span></h5>
                            <p className="my-4"><small>{product?.desc}</small></p>
                        </div>
                    </Col>
                    <Col className="form-container" md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-100 mt-3 py-2 px-3" placeholder="Name" {...register("name")} />
                            <br />
                            <input className="w-100 mt-3 py-2 px-3" placeholder="Email" {...register("email", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span>This field is required</span>}
                            <br />
                            <input className="w-100 mt-3 py-2 px-3" placeholder="Address" {...register("address", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.address && <span>This field is required</span>}
                            <input className="w-100 mt-3 py-2 px-3" placeholder="Phone" {...register("phone", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.phone && <span>This field is required</span>}
                            <br />
                            <br />
                            <button className="w-100 mt-3 py-2 px-3 border-0 order-btn" type="submit">Place Order</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ProductDetail;