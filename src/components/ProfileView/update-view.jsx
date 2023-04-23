import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

export const UpdateView = ({ storedToken, storedUser }) => {

    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [user, setUser] = useState(storedUser ? storedUser : null);

    const [upDateName, setUpdateName] = useState("");
    const [updateUserName, setupdateUserName] = useState("");
    const [updatePassword, setupdatePassword] = useState("");
    const [updateEmail, setupdateEmail] = useState("");
    const [updateBirthday, setupdateBirthday] = useState("");

    const updateUser = (storedUser) => {
        fetch(`https://oasismovie.herokuapp.com/users/${storedUser.Username}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })

            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Changing userdata failed");
                    return false;
                }
            })
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
            Name: upDateName,
            Username: updateUserName,
            Password: updatePassword,
            Email: updateEmail,
            Birthday: updateBirthday
        };

        fetch(`https://oasismovie.herokuapp.com/users/${storedUser.Username}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${storedToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    alert('Changes saved');
                    updateUser(storedUser);

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

            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromSignUpName" className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={upDateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserName" className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={updateUserName}
                            onChange={(e) => setupdateUserName(e.target.value)}
                            minLength="5"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={updatePassword}
                            onChange={(e) => setupdatePassword(e.target.value)}
                            minLength="5"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={updateEmail}
                            onChange={(e) => setupdateEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='forBirthday' className='mt-3'>
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                            type='date'
                            value={updateBirthday}
                            onChange={(e) => setupdateBirthday(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mt-3'>
                        Update
                    </Button>
                </Form>
            </Col>
        </>

    );

}