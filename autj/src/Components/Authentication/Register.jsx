import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, Row, Col } from "react-bootstrap";
import Divider from "../common/Divider";
import { Login } from "./Login";
import SocialAuthButtons from "./SocialAuthButtons";
import "./Register.css";

export const Register = ({ hasLabel }) => {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [modalShow, setModalShow] = useState(false);

  // Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully registered as ${formData.name}`, {
      theme: "colored",
    });
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="regContainer">
      <Row className="align-items-center mb-2">
        <Col>
          <h5 id="modalLabel">Register</h5>
        </Col>
        <Col xs="auto">
          <p className="fs--1 text-600 mb-0">
            Have an account? {/* <Link to="/">Login</Link> */}
            <Button variant="outline-info" onClick={() => setModalShow(true)}>
              Login
            </Button>
            <Login show={modalShow} onHide={() => setModalShow(false)} />
          </p>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder={!hasLabel ? "Name" : ""}
            value={formData.name}
            name="name"
            onChange={handleFieldChange}
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Email address"
            value={formData.name}
            name="name"
            onChange={handleFieldChange}
            type="text"
          />
        </Form.Group>

        <Row className="g-5 mb-3">
          <Form.Group as={Col} sm={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleFieldChange}
              type="password"
            />
          </Form.Group>
          <Form.Group as={Col} sm={6}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleFieldChange}
              type="password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="acceptCheckbox"
            className="form-check"
          >
            <Form.Check.Input
              type="checkbox"
              name="isAccepted"
              checked={formData.isAccepted}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isAccepted: e.target.checked,
                })
              }
            />
            <Form.Check.Label className="form-label">
              I accept the <Link to="#!">terms</Link> and{" "}
              <Link to="#!">privacy policy</Link>
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <Form.Group className="mb-4 d-flex justify-content-center ">
          <Button
            className="w-md-25 "
            type="submit"
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword ||
              !formData.isAccepted
            }
          >
            Register
          </Button>
        </Form.Group>
        <Divider>or register with</Divider>

        <SocialAuthButtons />
      </Form>
    </div>
  );
};


