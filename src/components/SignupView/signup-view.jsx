import { useState } from "react";
import { Navigate, useNavigate } from 'react-router';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './signup-view.scss';

export const SignupView = () => {

    const [signUpName, setSignUpName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Signupname: signUpName,
            Username: userName,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://oasismovie.herokuapp.com/users/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        })
            .catch((e) => console.log(e));
        navigate('/login');
    };

    return (
        <>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromSignUpName" className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={signUpName}
                            onChange={(e) => setSignUpName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserName" className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            minLength="5"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="5"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId='forBirthday' className='mt-3'>
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                            type='date'
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Col>
        </>

    );

}