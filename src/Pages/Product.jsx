import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import appThunkActionCreator from "../Redux/action";

import stly from "../Styles/Product.module.css";

function Product() {
  const [queryparams, setQueryParams] = useState({
    order: "asc",
    category: "",
  });

  const handleSetectInput = (e) => {
    setQueryParams({
      ...queryparams,
      [e.target.name]: e.target.value,
    });
  };

  const { data, totalPages } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${queryparams.category}&sort=price&order=${queryparams.order}`;
    dispatch(appThunkActionCreator(url));
  }, [queryparams]);

  return (
    <div style={{background:"#FCF3CF ",marginTop:"-20px"}}>
      <h1>Products</h1>
      <div className={stly.sortandfilterdiv}>
        <div>
          <label htmlFor="">Filter By Category: </label>
          <select
            name="category"
            id="filterByCategory"
            onChange={handleSetectInput}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Homedecor</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Sort By Price: </label>
          <select name="order" id="sortByPrice" onChange={handleSetectInput}>
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </div>

      <div className={stly.allProducts}>
        {data.map((ele, i) => {
          return <Card key={i} prod={ele} />;
        })}
      </div>
    </div>
  );
}
export default Product;
