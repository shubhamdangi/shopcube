import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Filter() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    // <Form onSubmit={submitHandler} className="d-flex">
    //   <Form.Control
    //     type="text"
    //     name="q"
    //     onChange={(e) => setKeyword(e.target.value)}
    //     className="mr-sm-2 ml-sm-5"
    //   ></Form.Control>
    //   &nbsp;
    //   <Button type="submit" variant="outline-success" className="p-2">
    //     Search
    //   </Button>
    // </Form>
    <NavDropdown title="Category" style={{ color: "white" }}>
      <LinkContainer to="/admin/users">
        <NavDropdown.Item>Users</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/admin/productlist">
        <NavDropdown.Item>Products</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/admin/orderlist">
        <NavDropdown.Item>Orders</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
}

export default Filter;
