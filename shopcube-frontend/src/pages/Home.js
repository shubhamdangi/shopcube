import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import FeedCarousel from "../components/FeedCarousel";
import { listProducts } from "../actions/productActions";
import Button from "@material-ui/core/Button";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import HeadsetIcon from "@material-ui/icons/Headset";
import WatchIcon from "@material-ui/icons/Watch";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";

function Home({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;
  const [choice, setChoice] = useState("");

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    document.title = "Shopcube | Home";
  }, []);

  return (
    <div>
      <div style={{ margin: "0 -8vw 0 -8vw" }}>
        {!keyword && <FeedCarousel />}
      </div>
      <br />
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#D9D7F1",
          display: "flex",
          position: "sticky",
          top: "10.1vh",
          zIndex: "100",
          borderRadius: "10px",
          marginTop: "5px",
          justifyContent: "space-evenly",
          border: "2.5px solid black",
        }}
      >
        {/* <Button>
          Filter
          <CategoryIcon />
        </Button>{" "}
        <span
          style={{
            borderLeft: "2px solid black",
            margin: "-12px  0px 0 10px",
            height: "30px",
          }}
        ></span> */}
        <Button
          onClick={() => setChoice("")}
          style={{ fontSize: "18px", textTransform: "none" }}
        >
          <ViewCarouselIcon />
          &nbsp; All
        </Button>
        <Button
          onClick={() => setChoice("Mobile")}
          style={{ fontSize: "18px", textTransform: "none" }}
        >
          <PhoneIphoneIcon />
          &nbsp; Mobiles
        </Button>
        <Button
          onClick={() => setChoice("laptops")}
          style={{ fontSize: "18px", textTransform: "none" }}
        >
          {" "}
          <LaptopChromebookIcon />
          &nbsp; Laptops
        </Button>
        {/* <Button onClick={() => setChoice("Accessories")}>
          <LocalMallIcon /> Accessories
        </Button> */}
        <Button
          onClick={() => setChoice("Headphones")}
          style={{ fontSize: "18px", textTransform: "none" }}
        >
          {" "}
          <HeadsetIcon />
          &nbsp; Headphones
        </Button>
        <Button
          onClick={() => setChoice("smart watches")}
          style={{ fontSize: "18px", textTransform: "none" }}
        >
          <WatchIcon />
          &nbsp; Smart Watches
        </Button>
      </div>
      <br />
      <br />
      {/* <h1>Deals of the Day</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <>
                {choice ? (
                  choice === product.category ? (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} choice={choice} />
                    </Col>
                  ) : (
                    ""
                  )
                ) : (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} choice={choice} />
                  </Col>
                )}
              </>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default Home;
