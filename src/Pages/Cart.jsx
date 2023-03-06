import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import stly from "../Styles/Cart.module.css";

function Cart() {
  const [allItems, setAllItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const changeQuantity = (obj, val) => {
    let newarr = allItems.map((ele) => {
      if (ele.id == obj.id) {
        obj.quantity += val;
      }
      return ele;
    });
    localStorage.setItem("miniEcomCart", JSON.stringify(newarr));
    setAllItems(newarr);
    calTotal();
  };
 const orderPlaced=(obj) =>{
  obj.orderId=uuidv4();
  let orderarr =JSON.parse( localStorage.getItem("order"))||[];
  orderarr.push(obj);
  localStorage.setItem("order",JSON.stringify(orderarr))
  alert(`Order has been Placed, orderId: ${obj.orderId}`)
  let newarr = allItems.filter((ele) => {
    
    return ele.id !=obj.id;
  });
  localStorage.setItem("miniEcomCart", JSON.stringify(newarr));
  setAllItems(newarr);
  calTotal();
 }
  const calTotal = ()=>{
    let total = 0;
    allItems.map(({quantity, price})=>{
        total += (+quantity) * (+price);
    })
    setTotalPrice(total);

  }
  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("miniEcomCart")) || [];
    setAllItems(cartItems);
    calTotal();
    
  }, []);
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        <h2>Total = {totalPrice} + 50 (Delivery Charge) = {totalPrice+50} </h2>
      </div>
      <div className={stly.items}>
        {allItems.map((ele, i) => {
          return (
            <div key={i} className={stly.card}>
              <div>
                <img src={ele.image} alt={ele.title} />
              </div>
              <div>
                <p>{ele.title}</p>
                <p>{ele.category}</p>
                <p>{(+ele.price)*(+ele.quantity)}</p>
                <h2>
                  <span
                    style={ele.quantity <= 1 ? { display: "none" } : {}}
                    onClick={() => {
                      changeQuantity(ele, -1);
                    }}
                  >
                    {" "}
                    -{" "}
                  </span>
                  {ele.quantity}
                  <span
                    style={ele.quantity >= 5 ? { display: "none" } : {}}
                    onClick={() => {
                      changeQuantity(ele, +1);
                    }}
                  >
                    {" "}
                    +{" "}
                  </span>
                </h2>
                <button onClick={()=>{orderPlaced(ele)}}>Place Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cart;
