import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdHome, MdLocalShipping, MdDoneAll, MdClose } from "react-icons/md";

const icons = {
  size: 35,
  color: "#d3d3d3",
  activeColor: "#1e90ff",
};

const stausLevel = (status) => {
  if (status === "shipped") return 2;
  if (status === "delivered") return 3;
  return 1;
};

const shipmentInfo = ({ status, shipFailed }) => {
  const level = stausLevel(status);
  const isOrdered = level >= 1;
  const isShipped = level >= 2;
  const isDelivered = level >= 3;
  return (
    <>
      <Col xs={4} className="status-col">
        <MdDoneAll
          size={icons.size}
          color={isOrdered ? icons.activeColor : icons.color}
        />
        <div className={`separator ${isOrdered && "done"}`} />
        <div className={isOrdered ? "dark-text" : "light-text"}>Ordered</div>
      </Col>
      <Col xs={4} className="status-col">
        <MdLocalShipping
          size={icons.size}
          color={isShipped ? icons.activeColor : icons.color}
        />
        {shipFailed && (
          <MdClose size="30" color="red" className="failed-icon" />
        )}
        <div className={`separator ${isShipped && "done"}`} />
        <div className={isShipped ? "dark-text" : "light-text"}>Shipped</div>
      </Col>
      <Col xs={4} className="status-col">
        <MdHome
          size={icons.size}
          color={isDelivered ? icons.activeColor : icons.color}
        />
        <div className={`separator ${isDelivered && "done"}`} />
        <div className={isDelivered ? "dark-text" : "light-text"}>
          Delivered
        </div>
      </Col>
    </>
  );
};

export default shipmentInfo;
