import React, { useState } from 'react';
import './Register.css';
import '../../index.css';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ValidateUsername from './helpers/ValidateUsername';
import ValidatePassword from './helpers/ValidatePassword';
import ValidateRepeatedPassword from './helpers/ValidateRepeatedPassword';

const Register = () => {
    let history = useHistory();
    const [existingUsers] = useState(JSON.parse(localStorage.getItem("existingUsers") || "[]"))
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [repeatedpasswordError, setRepeatedPasswordError] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();

        let newExistingUsers = existingUsers;
        let usernameMatch = ValidateUsername(newExistingUsers, username);
        let passwordMatch = ValidatePassword(password);
        let repeatedPasswordMatch = ValidateRepeatedPassword(repeatedPassword, password);

        if (username === "") {
            setUsernameError("Please provide a username");
        } else if (usernameMatch) {
            setUsernameError("The username is already taken");
        }

        if (passwordMatch) {
            setPasswordError("The password must have at least 8 characters and has to contain both letters and numbers");
        } else {
            setPasswordError("");
        }

        if (repeatedPasswordMatch) {
            setRepeatedPasswordError("The passwords do not match");
        } else {
            setRepeatedPasswordError("");
        }

        if (!usernameMatch && username !== "" && !passwordMatch && !repeatedPasswordMatch) {
            newExistingUsers.push({
                username,
                password
            });
            localStorage.setItem("existingUsers", JSON.stringify(newExistingUsers));
            localStorage.setItem("loggedUser", JSON.stringify(username));
            setUsernameError("");
            history.push("/");
        }
    }

    return (
        <Row id="register">
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
                    <Form.Group>
                        <Form.Control type="password" placeholder="Repeat password"
                            onChange={(e) => setRepeatedPassword(e.target.value)}
                            value={repeatedPassword}
                        />
                        <Form.Text className="form-error">
                            {repeatedpasswordError}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Register;