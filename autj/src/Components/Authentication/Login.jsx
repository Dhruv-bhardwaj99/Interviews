import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Button, Form, Row, Col } from "react-bootstrap";
import Divider from "../common/Divider";
import SocialAuthButtons from "./SocialAuthButtons";
import Modal from "react-bootstrap/Modal";

export function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`, {
      theme: "colored",
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="container">
          <div className="left-div">
            <div className="registerSide">
              <div className="registerInfo">
                <h3>New Customer</h3>
                <p>
                  By creating an account you will be able to shop faster, be up
                  to date on an order's status, and keep track of the orders you
                  have previously made.
                </p>
              </div>
              <Button
                variant="outline-secondary"
                size="lg"
                className="registerBtn"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </div>
          </div>
          <div className="right-div">
            <div className="loginSide">
              <h3>Returning Customer</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Row className="justify-content-between align-items-center">
                  <Col xs="auto">
                    <Form.Check type="checkbox" id="rememberMe">
                      <Form.Check.Input
                        type="checkbox"
                        name="remember"
                        checked={formData.remember}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            remember: e.target.checked,
                          })
                        }
                      />
                      <Form.Check.Label className="mb-0">
                        Remember Me
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>

                  <Col xs="auto">
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </Col>
                </Row>

                <Divider className="mt-4">or log in with</Divider>

                <SocialAuthButtons />
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

Login.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool,
};

Login.defaultProps = {
  layout: "simple",
  hasLabel: false,
};
