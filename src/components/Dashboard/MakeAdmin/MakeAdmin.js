import React, { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmitForm = e => {
        e.preventDefault()
        const user = { email };

        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    return (
        <div>
            <h1 className="text-center mt-5">Make a Admin</h1>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <form onSubmit={handleSubmitForm}>
                            <InputGroup className="mb-3 w-50 m-auto">
                                <FormControl
                                    onBlur={handleEmail}
                                    placeholder="Username email"
                                    type="email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <button className="admin-btn border-0" type="submit" id="button-addon2">
                                    Add
                                </button>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;