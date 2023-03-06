import React, { useEffect, useState } from "react";
// import styl from "../Styles/card.module.css";
import { useNavigate } from "react-router-dom";
function Order() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let orderarr = JSON.parse(localStorage.getItem("order")) || [];
    setState(orderarr);
  }, []);
  return (
    <div>
      {state.map((el) => {
        return (
          <div
            style={{
              background: "#a3e77d",
              width: "500px",
              margin: "auto",
              padding: "50px",
              display:"flex",
              justifyContent:"space-between",
              boxShadow:"0 0 10px solid black"
            }}
          >
            <div>
              <img
                src={el.image}
                alt={el.title}
                onClick={() => {
                  navigate(`/product/${el.id}`);
                }}
              />
            </div>
            <div>
              <h4>{el.title}</h4>
              <p>{el.category}</p>
              <p>{el.brand}</p>
              <h2>{el.price}</h2>
              <h4>Order-Id: {el.orderId}</h4>
            </div>
           
          </div>

        );
      })}
    </div>
  );
}
export default Order;
