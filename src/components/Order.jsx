import React from "react";
import "./Order.css";
import OrderList from "./OrderList";
import orderPageKimchi from "../constants/order_page_kimchi.jpeg";
import { PiMapPinDuotone } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaCar } from "react-icons/fa6";

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
          <div className="orderButton">
            <a
              href="mailto:kimchilykitchen@gmail.com?subject=Your KIMCHILY Order&body=Please fill in your order details below%0D%0A%0D%0AName:%20%0D%0AContact Number:%20%0D%0ADelivery Address (or Pick Up):%20%0D%0A%0D%0AYour order quantities below%0D%0A%0D%0AOriginal Kimchi (R):%20%0D%0AOriginal Kimchi (L):%20%0D%0AAged Kimchi (R): Currently sold out%20%0D%0AAged Kimchi (L): Currently sold out%20%0D%0AExtra Spicy Kimchi (R):%20%0D%0AExtra Spicy Kimchi (L):%20%0D%0A%0D%0A%0D%0AThank you for your order!%0D%0A%0D%0AKIMCHILY"
              target="_blank"
            >
              <h3>
                {/* <MdMailOutline
                  size="2em"
                  id="phoneIcon"
                  style={{ marginRight: "3px" }}
                /> */}
                Click here to order!
              </h3>
            </a>
          </div>
          <div className="inlineOrder">
            {/* <div>
              <a href={`tel:${phoneNumber}`} title="Phone Number">
                <FiPhone size="2em" id="phoneIcon" />
              </a>
            </div>
            /* <div>
              <h5>
                You can also text or us at (647)210-2789 to place your order
                (10:00AM to 2:00PM)
              </h5>
            </div> */}
          </div>
          <div id="takeout" className="inlineOrder">
            <div>
              <FaCar
                color="white"
                size="1.5em"
                style={{ marginRight: "6px" }}
              />
            </div>

            {/* <div>
              <h5>Curbside pickup available during business hours</h5>
            </div>
          </div>
          <div>
            <h5>
              Same day delivery between 6PM to 7PM. <br /> */}
            <h5>
              Delivery charge of $3 to Newcastle, Bowmanville, and Orono. Free
              delivery on orders of $35 or more.
            </h5>
          </div>
          <div id="takeout" className="inlineOrder">
            <h5>
              <a href="#hours">
                <PiMapPinDuotone
                  color="white"
                  size="2em"
                  style={{ marginRight: "3px" }}
                />
                Pick up also available by appointment
              </a>
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
