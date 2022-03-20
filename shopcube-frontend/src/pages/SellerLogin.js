import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import Button from "@material-ui/core/Button";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

function SellerLogin({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  useEffect(() => {
    document.title = "Shopcube | Login";
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const testTrigger = () => {
    setEmail("seller.singh@gmail.com");
    setPassword("test@321");
    submitHandler();
  };

  return (
    <FormContainer>
      <p style={{ textAlign: "center" }}>
        <BusinessCenterIcon style={{ textAlign: "center", fontSize: "50px" }} />{" "}
        <br /> <h5>Login As Seller </h5>
      </p>{" "}
      <hr />
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={submitHandler}
          style={{
            textTransform: "none",
          }}
        >
          Login
        </Button>{" "}
        &nbsp; &nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={testTrigger}
          style={{
            textTransform: "none",
          }}
        >
          Use Test Credentials
        </Button>
      </Form>
      {/* <Row className="py-3">
        <Col>
          Don't have an account?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Sign Up
          </Link>
        </Col>
      </Row> */}
    </FormContainer>
  );
}

export default SellerLogin;
