import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
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
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
        placeholder="Search for products and more.."
        style={{
          borderRadius: 18,
        }}
      ></Form.Control>
      &nbsp;
      {/* <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>{" "} */}
      <Button
        variant="contained"
        color="primary"
        onClick={submitHandler}
        style={{
          borderRadius: 18,
          backgroundColor: "#21b6ae",
          padding: "6px 25px",
          fontSize: "14px",
          textTransform: "none",
        }}
      >
        Search <SearchIcon style={{ fontSize: "23px" }} />
      </Button>
    </Form>
  );
}

export default SearchBar;
