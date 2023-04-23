import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

import './signup-view.scss';

export const SignupView = () => {

    const [name, setSignUpName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Name: name,
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
                window.location.replace("/login");
            } else {
                alert("Signup failed");
            }
        })
            .catch((e) => console.log(e));
    };

    return (

        <>

            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromSignUpName" className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
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

                    <Form.Group controlId='forBirthday' className='mb-3'>
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
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