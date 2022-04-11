import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register({user, setUser}) {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (user.username) {
            setRedirect(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (redirect) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [redirect]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        setValidated(true);

        if (form.checkValidity() === true) {
            // Submit the form

            const result = await axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + 'users/register',
                data: {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    email: email
                }
            });

            if (result.data.success) {
                setUser(result.data.user);
                setRedirect(true);
            } else {
                setError(result.data.error);
            }
        }
    };

    return <Form noValidate style={{maxWidth: "600px", padding: "20px", margin:"20px auto"}} validated={validated} onSubmit={handleSubmit}>
        {error && <div style={{color: "red"}}>{error}</div>}
        <Row className="mb-3">
            <Form.Group controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a password.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please confirm your password.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Button type="submit">Register</Button>
    </Form>;
}