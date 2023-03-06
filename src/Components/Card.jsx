import React from 'react';
import { useNavigate } from "react-router-dom";
import styl from "../Styles/Card.module.css";

function Card({ prod: { title, brand, category, id, image, price } }) {
  const navigate = useNavigate();
  return (
    <div className={styl.card}>
      <img src={image} alt={title} onClick={()=>{navigate(`/product/${id}`) }}/>
      <h4>{title}</h4>
      <p>{category}</p>
      <p>{brand}</p>
      <h2>{price}</h2>
    </div>
  );
}

export default Card;
