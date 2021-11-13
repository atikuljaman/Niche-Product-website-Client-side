import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import reviewBg from '../../../images/review-bg.jpg';
import './Review.css';

const Review = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // fetch('http://localhost:5000/orders', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then((result) => {
        //         if (result.insertedId) {
        //             alert('Your Review Successfully Added');
        //             reset();
        //         }
        //     })

        console.log(data);
    };
    return (
        <div>
            <Container className="p-5">
                <h2 className="text-center">Add a Review</h2>
                <Row className="gy-4">
                    <Col md={6}>
                        <img className="img-fluid" src={reviewBg} alt="Review_Image" />
                    </Col>
                    <Col md={6}>
                        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} className="w-100 mt-3 py-2 px-3" placeholder="Name" {...register("name")} />
                            <br />
                            <input defaultValue={user?.email} className="w-100 mt-3 py-2 px-3" placeholder="Email" {...register("email", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span>This field is required</span>}
                            <br />
                            <input className="w-100 mt-3 py-2 px-3" type="number" placeholder="Rating" {...register("rating", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.rating && <span>This field is required</span>}
                            <textarea rows="6" cols="50" className="w-100 mt-3 py-2 px-3" placeholder="Review Description" {...register("reviewDesc", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.reviewDesc && <span>This field is required</span>}
                            <br />
                            <br />
                            <button className="w-100 mt-3 py-2 px-3 border-0 order-btn" type="submit">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;