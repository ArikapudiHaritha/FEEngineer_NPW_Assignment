import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import AppleImage from "../../images/appleX2.png";
import AppleRedX from "../../images/appleRedX2.png";
import orders from "../../mocks/order.json";

const items = () => {
  const { items = [] } = orders[0];

  return (
    <Row className="mt-5">
      {items.map((item) => (
        <Col md="6" xs="12" className="mb-2">
          <Row>
            <Col xs="4">
              <Image src={AppleImage} height={133} width={98} />
            </Col>
            <Col>
              <div className="product-info">
                <p className="mb-0">
                  <b>
                    {item.name} - {item.skuAttributes.size}
                  </b>
                </p>
                <p className="mb-0">
                  <b>{item.skuAttributes.color}</b>
                </p>
                <p className="mb-0">Qty : {item.quantity}</p>
                <p className="mb-0">{item.skuAttributes.manufacturer}</p>
                <p className="mb-0">{item.skuAttributes.model}</p>
              </div>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default items;
