import React from 'react';
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productState, setProductState] = useState({});
  const { image, brand, title, category, price } = productState;

  const addProductToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("miniEcomCart")) || [];
    let present = cartItems.filter((ele) => {
      return ele.id == id;
    });
    if (present.length != 0) return;
    cartItems.push({ ...productState, quantity: 1 });
    localStorage.setItem("miniEcomCart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
    )
      .then((res) => res.json())
      .then((resData) => {
        setProductState({ ...resData.data });
      });
  }, [id]);
  return (
    <div style={{background:"#d7e77c", width:"500px" , margin:"auto", padding:"60px"}}>
      <h1>ProductDetails </h1>
      <img src={image} alt={title} width="300px" />
      <h4>{title}</h4>
      <button onClick={addProductToCart}>Add To Cart</button>
      <p>{category}</p>
      <p>{brand}</p>
      <h2>Rs: {price}</h2>
    </div>
  );
}
export default ProductDetails;
