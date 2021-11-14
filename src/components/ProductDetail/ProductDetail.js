import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './ProductDetail.css';
import useAuth from '../../hooks/useAuth';

const ProductDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dry-forest-73103.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.orderItem = product;
        data.status = 'Pending';
        fetch('https://dry-forest-73103.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

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
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                className="rating-icon"
                            />
                            <h3>{product?.name}</h3>
                            <h5>Price: <span className="fw-normal">${product?.price}</span></h5>
                            <p className="my-4"><small>{product?.desc}</small></p>
                        </div>
                    </Col>
                    <Col className="form-container" md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} className="w-100 mt-3 py-2 px-3" placeholder="Name" {...register("name")} />
                            <br />
                            <input defaultValue={user?.email} className="w-100 mt-3 py-2 px-3" placeholder="Email" {...register("email", { required: true })} />
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