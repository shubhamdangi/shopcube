import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProfileScreen from "./pages/ProfileScreen";
// import { Routes, Route, HashRouter as Router } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import ShippingScreen from "./pages/ShippingScreen";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrder from "./pages/PlaceOrder";
import OrderDetails from "./pages/OrderDetails";
import UserListDetails from "./pages/UserListDetails";
import UserEditScreen from "./pages/UserEditScreen";
import ProductList from "./pages/ProductList";
import ProductEditScreen from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";
import ReactGA from "react-ga";
import ScrollToTop from "./containers/ScrollToTop";
import SellerLogin from "./pages/SellerLogin";
import Scroll from "./containers/Scroll";

ReactGA.initialize("UA-217584050-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />

        <main style={{ padding: "15vh 0 5vh 0", backgroundColor: "#F5F5F5" }}>
          <Container>
            <Route path="/" component={Home} exact />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/order/:id" component={OrderDetails} />
            <Route path="/admin/users" component={UserListDetails} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path="/admin/productlist" component={ProductList} />
            <Route path="/seller" component={SellerLogin} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderList} />
          </Container>
        </main>
        <Footer />
        <Scroll showBelow={450} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
