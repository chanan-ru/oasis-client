import React, { useState } from 'react';
import { Button, Form, Row, Col, CardGroup, Card } from 'react-bootstrap';

export const UpdateView = ({ storedToken, storedUser }) => {
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [user, setUser] = useState(storedUser ? storedUser : null);

    const [userName, setUsername] = useState(user.Username);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday);





    const updateUser = (userName) => {
        fetch(`https://oasismovie.herokuapp.com/users/${userName}`, {
            headers: { Authorization: `Bearer ${token}` },
        })

            .then((response) => response.json())
            .then((updatedUser) => {
                if (updatedUser) {
                    setUser(updatedUser);
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Username: userName,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch(
            `https://oasismovie.herokuapp.com/users/${storedUser.Username}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => {
                if (response.ok) {
                    alert('Changes saved');
                    updateUser(userName);
                } else {
                    alert('Something went wrong');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {/* <Col md={5}> */}
            <CardGroup>
                <Card className="">
                    <Card.Body>
                        <h3>Update user info</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='forUsername' className='mt-2'>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control
                                    type='text'
                                    // value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    minLength='3'
                                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                                    title="Username should contain more than 3 characters, may only contain letters, numbers and special characters: .,'-!?%&"
                                    placeholder='Enter your name'
                                />

                            </Form.Group>
                            <Form.Group controlId='forPassword' className='mt-2'>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type='password'
                                    // value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                                    title="Password may only contain letters, numbers and special characters: .,'-!?%&"
                                    placeholder='Create a password'
                                />
                            </Form.Group>
                            <Form.Group controlId='forEmail' className='mt-2'>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type='email'
                                    // value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Enter email'
                                />
                            </Form.Group>
                            <Form.Group controlId='forBirthday' className='mt-2'>
                                <Form.Label>Birthday:</Form.Label>
                                <Form.Control
                                    type='date'
                                    // value={birthday}
                                    onChange={(e) => setBirthday(e.target.value)}
                                />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button variant='primary' type='submit' className='mt-3'>
                                        Update
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* </Col> */}
        </>
    );
};