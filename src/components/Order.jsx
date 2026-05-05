import React from "react";
import "./Order.css";
import OrderList from "./OrderList";
import orderPageKimchi from "../constants/order_page_kimchi.jpeg";
import { PiMapPinDuotone } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

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
          <div className="inlineOrder">
            <h5>
              <a
                href="mailto:kimchilykitchen@gmail.com?subject=Your KIMCHILY Order&body=Please fill in your order details below:%0D%0A%0D%0AName %3D %0D%0AContact Number %3D %0D%0ADelivery Address (or Pick Up) %3D %0D%0A%0D%0AYour order quantities below:%0D%0A%0D%0AOriginal Kimchi (S): %0D%0AOriginal Kimchi (L): %0D%0AAged Kimchi (S): %0D%0AAged Kimchi (L): %0D%0AExtra Spicy Kimchi (S): %0D%0AExtra Spicy Kimchi (L): %0D%0A%0D%0A%0D%0AThank you for your order!%0D%0A%0D%0AKIMCHILY"
                target="_blank"
              >
                <MdMailOutline size="2em" id="phoneIcon" />
              </a>
              Email us your order (preferred)
            </h5>
          </div>
          <div className="inlineOrder">
            <div>
              <a href={`tel:${phoneNumber}`} title="Phone Number">
                <FiPhone size="2em" id="phoneIcon" />
              </a>
            </div>
            <div>
              <h5>
                You can also text or us at (647)210-2789 to place your order
                (10:00AM to 2:00PM)
              </h5>
            </div>
          </div>
          <div id="takeout" className="inlineOrder">
            <div>
              <a href="#hours">
                <PiMapPinDuotone color="white" size="2em" />
              </a>
            </div>

          <div>
            <h5>Curbside pickup available during business hours</h5>
            </div>
          </div>
          <div>

          <h5>
            Same day delivery between 6PM to 7PM. <br/>Free delivery to Newcastle, Bowmanville, and Orono on orders $35 or
            more
          </h5>
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
