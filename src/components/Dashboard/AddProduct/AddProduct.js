import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://dry-forest-73103.herokuapp.com/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div>
            <h1 className="text-center mt-5">Add a Product</h1>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <div className="w-50 m-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100 p-2" placeholder="Product Name" {...register("name", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span>This field is required</span>}
                                <input className="w-100 p-2 mt-4" placeholder="Price" {...register("price", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.price && <span>This field is required</span>}
                                <textarea rows="4" cols="50" className="w-100 p-2 mt-4" placeholder="Description" {...register("desc", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.desc && <span>This field is required</span>}
                                <input className="w-100 p-2 mt-4" placeholder="Product Image Url" {...register("img", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.img && <span>This field is required</span>}
                                <input className="w-100 p-2 mt-4" placeholder="Rating" {...register("rating", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.rating && <span>This field is required</span>}
                                <input style={{ background: '#FFB639', fontWeight: 600 }} className="py-2 border-0 w-100 mt-4" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;