import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderSummary from "../OrderSummary";
import OrderDetails from "../OrderDetails";
import useDeviceDetect from "../../utils/useDeviceDetect";
import "./App.css";

const App = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <Navbar fixed collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Brand</Nav.Link>
            <Nav.Link href="#pricing">Deals</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Recently Viewed</Nav.Link>
            {isMobile ? (
              <Nav.Link href="/order-status">Order Status</Nav.Link>
            ) : (
              <NavDropdown title="Order Status" id="collasible-nav-dropdown">
                <NavDropdown.Item as="div">
                  <OrderSummary />
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link eventKey={2} href="#memes">
              Saved Items
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/order-status">
            <OrderDetails />
          </Route>
          <Route path="/">Home Page Component</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
