import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import ShipementInfo from "../OrderDetails/shipmentInfo";
import AppleImage from "../../images/appleX2.png";

import orders from "../../mocks/order.json";

const OrderSummary = () => {
  const {
    items: [item],
  } = orders[0];

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {item.name} - {item.skuAttributes.size}
        </Card.Title>
        <Row>
          <Col xs="4">
            <Image src={AppleImage} height={133} width={98} />
          </Col>
          <Col>
            <ShipementInfo />
          </Col>
        </Row>
        <a href="order-status">View Order Details</a>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;
