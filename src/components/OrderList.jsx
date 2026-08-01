import React, { useState } from "react";
import "./OrderList.css";

// function handleSubmit(e) {
//   // Prevent the browser from reloading the page
//   e.preventDefault();
//   console.log(deliveryRequired)

  // // Read the form data
  // const form = e.target;
  // const formData = new FormData(form);

  // // // Or you can work with it as a plain object:
  // // const formJson = Object.fromEntries(formData);
  // // console.log(formJson);

  // // window.location.href = "mailto:muffinccc@gmail.com"

  // const OrderForm = {
  //   name: formData.get("name"),
  //   phone: formData.get("phone number"),
  //   address: formData.get("address"),
  //   delivery: formData.get("radioButton"),
  //   originalSmall: formData.get("originalS"),
  //   originalLarge: formData.get("originalL"),
  //   AgedSmall: formData.get("agedS"),
  //   AgedLarge: formData.get("agedL"),
  //   SpicySmall: formData.get("spicyS"),
  //   SpicyLarge: formData.get("spicyL"),
  // };


  // console.log(OrderForm);

  // window.location.href = "mailto:muffinccc@gmail.com?body=${OrderForm}"
// }


const OrderList = () => {

  function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();
  console.log(deliveryRequired)
  }

  const [deliveryRequired, setDeliveryRequired] = useState('no')

  return (
    <div className="orderListContainer">
      {/* <form method="post" onSubmit={handleSubmit}> */}
      {/* <form
        method="post"
        action="mailto:muffinccc@gmail.com?subject=Your KIMCHILY order"
        enctype="text/plain"
        onSubmit={handleSubmit}
      > */}
        <div className="orderListHeader">
          <h3>Style</h3>
          <div className="orderSize">
            {/* 400g container */}
            <h3>Regular (500g)</h3>
          </div>
          <div className="orderSize">
            {/* 600g container */}
            <h3>Large (700g)</h3>
          </div>
        </div>
        <div className="orderListFresh">
          {/* Fresh Kimchi */}
          <h3 className="soldOut">Original Kimchi</h3>
          <div className="orderPrice">
            <h4>$12.00</h4>
            {/* <input
              type="text"
              name="Original Kimchi (S)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
          <div className="orderPrice">
            <h4>$16.00</h4>
            {/* <input
              type="text"
              name="Original Kimchi (L)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
        </div>
        <div className="orderListAged">
          <h3>Aged Kimchi</h3>
          {/* Aged Kimchi */}
          <div className="orderPrice">
            <h4>$13.00</h4>
            {/* <input
              type="text"
              name="Aged Kimchi (S)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
          <div className="orderPrice">
            <h4>$17.00</h4>
            {/* <input
              type="text"
              name="Aged Kimchi (L)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
        </div>
        <div className="orderListSpicy">
          <h3 className="soldOut">Extra Spicy Kimchi</h3>
          {/* Spicy Kimchi */}
          <div className="orderPrice">
            <h4>$13.00</h4>
            {/* <input
              type="text"
              name="Extra Spicy Kimchi (S)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
          <div className="orderPrice">
            <h4>$17.00</h4>
            {/* <input
              type="text"
              name="Extra Spicy Kimchi (L)"
              placeholder="qty"
              className="qtyInput"
            /> */}
          </div>
        </div>
        {/* <h4>Name</h4>
        <input type="text" name="Name" required/>
        <h4>Contact Number</h4>{" "}
        <input
          type="text"
          name="Phone Number"
          required
        />
        <h4>Delivery Address </h4>{" "}
        <input
          type="text"
          name="Delivery Address"
          placeholder="(if applicable)"
          required={deliveryRequired}
        />
        <label>
          <input
            type="radio"
            name="Delivery"
            value="no"
            defaultChecked={true}
            onChange={() => setDeliveryRequired('no')}
            onClick={console.log('no')}
          />
          Pick up
        </label>
        <label>
          <input type="radio" name="Delivery" value="yes" onChange={() => setDeliveryRequired('yes')} onClick={console.log('yes')}/>
          Delivery
        </label>
        <div>
          <button type="submit">Submit Order by Email</button>
        </div>
      </form> */}
    </div>


  );
};

export default OrderList;
