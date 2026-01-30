import React from "react";
import "./OrderList.css";

const OrderList = () => {
  return (
    <div className="orderListContainer">
      <div className="orderListHeader">
        <h3>Style</h3>
        <div className="orderSize">
          <h3>Regular (400g)</h3> {/* 400g container */}
        </div>
        <div className="orderSize">
          <h3>Large (600g)</h3> {/* 600g container */}
        </div>
      </div>
      <div className="orderListFresh">
        <h3>Fresh Kimchi</h3> {/* Fresh Kimchi */}
        <div className="orderPrice">
          <h4>$7.00</h4>
        </div>
        <div className="orderPrice">
          <h4>$10.00</h4>
        </div>
      </div>
      <div className="orderListAged">
        <h3>Aged Kimchi</h3> {/* Aged Kimchi */}
        <div className="orderPrice">
          <h4>$7.00</h4>
        </div>
        <div className="orderPrice">
          <h4>$10.00</h4>
        </div>
      </div>
      <div className="orderListSpicy">
        <h3>Spicy Kimchi</h3> {/* Spicy Kimchi */}
        <div className="orderPrice">
          <h4>$7.00</h4>
        </div>
        <div className="orderPrice">
          <h4>$10.00</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
