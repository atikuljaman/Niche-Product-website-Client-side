import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Order.css';

const Order = () => {
    const { user } = useAuth();
    const [userOrders, setUserOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dry-forest-73103.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
            .finally(() => setLoading(false))
    }, [userOrders]);

    const handleDeleteOrder = (id) => {
        const proceed = true;
        if (proceed) {
            window.confirm('Are you sure you want to delete?')
            fetch(`https://dry-forest-73103.herokuapp.com/orders?id=${id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    console.log(res);
                })
        };

    }

    if (loading) {
        return (
            <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="warning" />
            </div>
        )
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
                                <th>Email</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrders.map(userOrder => (
                                    <tr className="text-center table-row">
                                        <td className="p-0 text-center">
                                            <img className="img-fluid order-product-img" src={userOrder?.orderItem?.img} alt="Product_image" />
                                        </td>
                                        <td className=""><div className="mt-4 pt-1">{userOrder?.orderItem?.name}</div></td>
                                        <td className=""><div className="mt-4 pt-1">{userOrder?.email}</div></td>
                                        <td className=""><div className="mt-4 pt-1">${userOrder?.orderItem?.price?.toFixed(2)}</div></td>
                                        <td className=""><div className="mt-4 pt-1 text-danger">{userOrder?.status}</div></td>
                                        <td className=""><div className="mt-4 pt-1"><button onClick={() => handleDeleteOrder(userOrder?._id)} className="cancel-btn border-0">Cancel</button></div></td>
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

export default Order;