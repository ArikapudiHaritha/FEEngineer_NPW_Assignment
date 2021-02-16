import React, { useMemo } from "react";
import moment from "moment";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdWarning } from "react-icons/md";

import ShipmentInfo from "./shipmentInfo";
import Items from "./items";

import orders from "../../mocks/order.json";
import "./index.css";

const Labels = {
  confirmShipment: {
    title: "Heads up : The shipping date changed",
    subTitle:
      "Before we can complete your order, review the new date to confirm if you're OK with it",
    confirmWarnMsg:
      "Don't forget to let us know if you accept the new ship date. we will cancel your order if we don't hear from you soon",
  },
  ordered: {
    title: "Order Accepted : It's in your way",
    subTitle: "Fun stuff is headed your way",
  },
  shipped: {
    title: "Get exicted!",
    subTitle: "Fun stuff is headed your way",
  },
  delivered: {
    title: "Yeah! Pack of joy has delivered successfully!",
    subTitle: "Thank you for happy ordering!",
  },
};

const formattedAddress = (address) =>
  `${address.street}, ${address.city}, ${address.state} - ${address.zip}`;

const formattedDate = (date) => moment(date).format("ddd MMM Do, YYYY");

const OrderDetails = () => {
  const {
    items: [item],
    shipments: [shipment],
    shipingAddress,
  } = orders[0];

  const confirmationRequired = useMemo(
    () => item.status === "ordered" && !item.userAcceptedDelay,
    [item.status, item.userAcceptedDelay]
  );

  const isOrdered = item.status === "ordered";
  const isShipped = item.status === "shipped";
  const isDelivered = item.status === "delivered";

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12}>
          <div>
            <b>
              {confirmationRequired
                ? Labels.confirmShipment.title
                : isOrdered && Labels.ordered.title}
              {isShipped && Labels.shipped.title}
              {isDelivered && Labels.delivered.title}
            </b>
            <p className="mt-2">
              {confirmationRequired
                ? Labels.confirmShipment.subTitle
                : isOrdered && Labels.ordered.subTitle}
              {isShipped && Labels.shipped.subTitle}
              {isDelivered && Labels.delivered.subTitle}
            </p>
          </div>
        </Col>
        <Col>
          <ShipmentInfo
            shipFailed={confirmationRequired}
            status={item.status}
          />
        </Col>
        <Col xs={12}>
          <b>
            Items {item.status}: {item.quantity}
          </b>
          {confirmationRequired && (
            <div className="mt-3">
              <MdWarning color="orange" />
              <p className="warning-msg">
                {Labels.confirmShipment.confirmWarnMsg}
              </p>
            </div>
          )}
          {isShipped && (
            <div className="mt-3">
              <b>USPS tracking :</b>
              <p>
                <a href={shipment.trackingUrl}>{shipment.trackingNumber}</a>
              </p>
            </div>
          )}
        </Col>
        {confirmationRequired && (
          <Col xs={12}>
            <p className="mb-0">
              <b>New estimated ship date:</b>
            </p>
            <p>
              {formattedDate(item.newEstimatedShipDateRange.fromDate)} -{" "}
              {formattedDate(item.newEstimatedShipDateRange.toDate)}{" "}
            </p>
            <p className="mb-0">Original estimated ship date:</p>
            <p>
              {formattedDate(item.estimatedShipDateRange.fromDate)} -{" "}
              {formattedDate(item.estimatedShipDateRange.toDate)}{" "}
            </p>
          </Col>
        )}
        <Col xs={12}>
          <p>
            <b>Address: </b>
            {formattedAddress(shipingAddress)}
          </p>
        </Col>
        {(isShipped || (isOrdered && !confirmationRequired)) && (
          <Col>
            <p>
              <b>Estimated delivery date : </b>{" "}
              {formattedDate(shipment.estimatedDeliveryDate)}
            </p>
          </Col>
        )}
        {confirmationRequired && (
          <Col xs={12}>
            <Button variant="primary" size="xs" block>
              Accept new ship date
            </Button>
            <Button variant="outline-dark" size="xs" block>
              Cancel your order
            </Button>
          </Col>
        )}
      </Row>
      <Items />
    </Container>
  );
};

export default OrderDetails;
