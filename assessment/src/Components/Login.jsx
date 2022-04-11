import {Button, Form, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../Styles/Login.css';


export default function Login({user, setUser}) {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

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
            try {
                const result = await axios({
                    method: 'post',
                    url: process.env.REACT_APP_API_URL + 'users/login',
                    data: {
                        username: username,
                        password: password
                    }
                });

                if (result.data.success) {
                    setUser(result.data.user);
                    setRedirect(true);
                } else {
                    setError(result.data.error);
                }
            } catch (e) {
                setError(e.toString());
            }
        }
    };

    return  <Form noValidate style={{maxWidth: "400px", padding: "20px", boxShadow: "2px 2px 5px 5px rgba(0,0,0,0.5)", borderRadius: "5px", margin:"20px auto"}} validated={validated} onSubmit={handleSubmit}>
        {error && <div style={{color: "red"}}>{error}</div>}
        <Row className="mb-3">
            <Form.Group controlId='username'>
                <Form.Label>Username/Email</Form.Label>
                <Form.Control required type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>
            <br></br>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control type="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Form.Control.Feedback type="invalid"> Enter a Valid Password</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Button type="submit" variant="flat" size="lg" className="bbg">Login</Button>
    </Form>;
}