import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you Sure you Want to Delete?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Product Delete Successfully')
                })
        }
    }

    return (
        <div className="order">
            <Container className="mt-5">
                <Row>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th className="w-25">Product</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>ID</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr className="text-center table-row">
                                        <td className="p-0 text-center">
                                            <img className="img-fluid order-product-img" src={product?.img} alt="Product_image" />
                                        </td>
                                        <td className=""><div className="mt-4 pt-1">{product?.name}</div></td>
                                        <td className=""><div className="mt-4 pt-1">${product?.price?.toFixed(2)}</div></td>
                                        <td className=""><div className="mt-4 pt-1">{product?._id}</div></td>
                                        <td style={{ color: '#FFB639' }} className=""><div className="mt-4 pt-1"><BsFillStarFill /><small className="text-black" style={{ fontSize: '11px' }}>({product?.rating})</small></div></td>
                                        <td className=""><div className="mt-4 pt-1"><button onClick={() => handleDeleteProduct(product?._id)} className="cancel-btn border-0">Remove</button></div></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllProduct;