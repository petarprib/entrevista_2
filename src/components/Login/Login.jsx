import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    let history = useHistory();
    const [existingUsers] = useState(JSON.parse(localStorage.getItem("existingUsers") || "[]"))
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();

        let userIndex = undefined;

        for (let i = 0; i < existingUsers.length; i++) {
            if (existingUsers[i].username === username) {
                userIndex = i;
                break;
            }
        }

        console.log(!userIndex)

        if (userIndex === undefined) {
            setUsernameError("The username does not exist");
        } else {
            setUsernameError("");
            if (existingUsers[userIndex].password !== password) {
                setPasswordError("The password is incorrect");
            } else {
                localStorage.setItem("loggedUser", JSON.stringify(username));
                setPasswordError("");
                history.push("/");
            }
        }

        if (userIndex === undefined && passwordError !== "") setPasswordError("");
    }

    return (
        <Row id="login">
            <Col className="m-auto px-0" xs={10} sm={9} md={7} lg={5} xl={4}>
                <Form className="m-3" onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Choose username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <Form.Text className="form-error">
                            {usernameError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Choose password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Form.Text className="form-error">
                            {passwordError}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;