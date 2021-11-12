import React from 'react';
import Header from '../Shared/Header/Header';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <div>
            <Header />
            <div className="product-detail-heading d-flex justify-content-center align-items-center">
                <div className="text-center fw-bold text-white">
                    <h1>Product Details</h1>
                    <h6>Customer Satisfaction Our Pride</h6>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;