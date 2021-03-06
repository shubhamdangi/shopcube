import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Cart({ match, location, history }) {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  useEffect(() => {
    document.title = "Shopcube | Cart";
  }, []);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md="8">
        <h1>Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            There's nothing here. <Link to="/"> Take me home</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>₹ {item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      /* getting the stock of the product forming an array of
                      objects and mapping that array */
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option value={x + 1} key={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Cart Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                )
              </h2>
              ₹{" "}
              {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button
              className="w-100"
              type="button"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default Cart;
