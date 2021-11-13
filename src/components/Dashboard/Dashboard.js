import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink,
    useLocation,
    useHistory
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Home from '../Home/Home/Home';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageAllProduct from './ManageAllProduct/ManageAllProduct';
import Order from './Order/Order';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
    const { user, handleLogout, admin } = useAuth();
    let { path, url } = useRouteMatch();

    const location = useLocation();
    const history = useHistory();

    const LogOut = () => {
        handleLogout(location, history)
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="offcanvus-container p-2" xs={3} md={2}>
                        <h4 className="text-white text-center my-2 text-capitalize">{user?.displayName}</h4>
                        <div className="text-center my-5">
                            <NavLink className="text-white text-decoration-none my-5" to="/home">Home</NavLink>
                            <br />
                            <br />
                            {!admin ? <>
                                <NavLink className="text-white text-decoration-none my-5" to={`${url}`}>My Order</NavLink>
                                <br />
                                <br />
                                <NavLink className="text-white text-decoration-none my-5" to={`${url}/payment`}>pay</NavLink>
                                <br />
                                <br />
                                <NavLink className="text-white text-decoration-none my-5" to={`${url}/review`}>Review</NavLink>
                                <br />
                                <br />
                            </>
                                :
                                <>
                                    <NavLink className="text-white text-decoration-none my-5" to={`${url}/manageAllOrder`}>Manage All Orders</NavLink>
                                    <br />
                                    <br />
                                    <NavLink className="text-white text-decoration-none my-5" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                                    <br />
                                    <br />
                                    <NavLink className="text-white text-decoration-none my-5" to={`${url}/addProduct`}>Add Product</NavLink>
                                    <br />
                                    <br />
                                    <NavLink className="text-white text-decoration-none my-5" to={`${url}/manageProduct`}>Manage Product</NavLink>
                                    <br />
                                    <br />

                                </>
                            }
                            <button onClick={LogOut} className="border-0 bg-transparent text-white">Logout</button>
                        </div>

                    </Col>
                    <Col className="m-0 p-0" xs={9} md={10}>
                        {
                            !admin ? <div className="text-center w-100 py-3 dashboard-navbar">
                                <h5 className="fw-bold m-0 text-uppercase"> Your orders</h5>
                            </div>
                                :
                                <div className="text-center w-100 py-3 dashboard-navbar">
                                    <h5 className="fw-bold m-0 text-uppercase">Dashboard</h5>
                                </div>
                        }

                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route exact path={path}>
                                {
                                    admin ? <ManageAllOrder /> : <Order />
                                }
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>
                            <Route path={`${path}/manageAllOrder`}>
                                <ManageAllOrder />
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/manageProduct`}>
                                <ManageAllProduct />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;