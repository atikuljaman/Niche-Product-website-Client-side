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
import './Dashboard.css';
import Order from './Order/Order';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
    const { user, handleLogout } = useAuth();
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
                            <NavLink className="text-white text-decoration-none my-5" to={`${url}`}>My Order</NavLink>
                            <br />
                            <br />
                            <NavLink className="text-white text-decoration-none my-5" to={`${url}/payment`}>pay</NavLink>
                            <br />
                            <br />
                            <NavLink className="text-white text-decoration-none my-5" to={`${url}/review`}>Review</NavLink>
                            <br />
                            <br />
                            <button onClick={LogOut} className="border-0 bg-transparent text-white">Logout</button>
                        </div>

                    </Col>
                    <Col className="m-0 p-0" xs={9} md={10}>
                        <div className="text-center w-100 py-3 dashboard-navbar">
                            <h5 className="fw-bold m-0 text-uppercase"> Your orders</h5>
                        </div>

                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route exact path={path}>
                                <Order />
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;