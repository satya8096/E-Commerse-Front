import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import CheckAuth from "../Reducers/CheckAuth";

export default function CartBag() {

  const [quantity, setQuantity] = useState(1);
  if (quantity === 0) {
    alert("Minimum  1 Quanity is Required !");
    setQuantity(1);
  } else if (quantity === 6) {
    alert("Maximum 5 Qunatity is Allowed");
    setQuantity(5);
  }

  const userDetails = async ()=>{
    const user = await CheckAuth(localStorage.getItem("user"));

    console.log(user.cart);
  }

  useEffect(()=>{
    userDetails()
  })



  return (
    <div className="cart-main-container">
      <div className="cart-products-list d-flex">
        <div className="cart-product d-flex">
          <div className="cart-img">
            <img src="/men-images/shirt-1.webp" alt="img" width={"100%"} />
            <div className="quantity-btns">
              <Link onClick={(e) => setQuantity(quantity - 1)}>-</Link>
              <span>{quantity}</span>
              <Link onClick={(e) => setQuantity(quantity + 1)}>+</Link>
            </div>
          </div>
          <div className="cart-content pt-2">
            <h5>
              <Link>LAHEJA Solid Men Black, Grey Track Pants</Link>
            </h5>
            <span>Size : XL</span>
            <span>Seller : Satyanarayana</span>
            <span>
              <span className="text-decoration-line-through">Rs. 2999/-</span>{" "}
              <span
                className=""
                style={{ fontWeight: "600", fontSize: "1.5rem" }}
              >
                Rs. 598/-
              </span>
              <span>78% Off</span>
            </span>
            <button className="btn btn-danger" style={{ width: "6rem" }}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="cart-price-details">
        <h5>Price Details</h5>
        <hr></hr>
        <table>
          <tbody>
            <tr>
              <th>Price(1 item)</th>
              <td>Rs. 2000</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>- Rs. 200</td>
            </tr>
            <tr>
              <th>Buy More & Save More</th>
              <td>- Rs. 172</td>
            </tr>
            <tr>
              <th>Coupons For You</th>
              <td>- Rs. 29</td>
            </tr>
            <tr>
              <th>Delivery Charges
                <hr></hr>
              </th>
              <td>
                <span className="text-decoration-line-through">- Rs. 200</span>{" "}
                Free
                <hr></hr>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>Rs. 1423</td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        <h6>You Will Save Rs. 2000/- On This Order</h6>
      </div>
      {/* { (
        <div className="cart-empty-container">
          <div className="cart-empty-container-img">
            <img src="/other-images/cart-empty.webp" alt="img" width={"100%"} />
          </div>
          <h6>Your Cart Is Empty !</h6>
          <p>Add items to now</p>
          <button className="btn btn-warning">Shop Now</button>
        </div>
      )} */}
    </div>
  );
}
