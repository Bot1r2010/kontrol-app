import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [name, setName] = useState("mor_2314");
  const [passwd, setPasswd] = useState("83r5^_");
  const api = `https://fakestoreapi.com/auth/login`;

  const handleName = (e) => setName(e.target.value);
  const handlePasswd = (e) => setPasswd(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: name,
      password: passwd,
    };

    axios
      .post(api, user)
      .then((res) => {
        if (res.data.token) {
          toast.success("Login successful!");
          console.log("Token:", res.data.token);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          toast.error("Invalid credentials!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card
            style={{
              width: "320px",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <Card.Body>
              <Card.Title className="text-center mb-3" style={{ fontSize: "22px" }}>
                Login
              </Card.Title>

              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "14px" }}>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleName}
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={passwd}
                    onChange={handlePasswd}
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ fontSize: "15px", padding: "8px" }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
