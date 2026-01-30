import React from "react";
import "./Order.css";
import OrderList from "./OrderList";
import orderPageKimchi from "../constants/order_page_kimchi.jpeg";
import { PiMapPinDuotone } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";

const Order = () => {
  const phoneNumber = "6472102789";

  return (
    <div className="orderContainer" id="order">
      <div className="orderWrapper">
        <div className="orderHeader">
          <h1>Order</h1>
        </div>
        <OrderList />
        <div className="serviceAreas">
          <h5>
            Free delivery to Newcastle, Bowmanville, and Orono on orders $35 or
            more.
          </h5>
          <div id="takeout">
            <div>
              <a href="#hours">
                <PiMapPinDuotone color="white" size="2em" />
              </a>
            </div>
            <div>
              <h5>Takeout available during business hours</h5>
            </div>
          </div>
        </div>
        <div className="howToOrder">
          <div>
            <a href={`tel:${phoneNumber}`} title="Phone Number">
              <FiPhone size="2em" id="phoneIcon" />
            </a>
          </div>
          <div>
            <h3>Call or text us at (647)210-2789 to order</h3>
          </div>
        </div>
      </div>
      <div className="orderPictures">
        {" "}
        {/* Decorative image on the right side */}
        <img src={orderPageKimchi} alt="kimchi" />
      </div>
    </div>
  );
};

export default Order;
