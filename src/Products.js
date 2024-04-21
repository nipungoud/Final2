

import React from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const product = location.state;
  return (
    <div className="container ">
         <div className="card w-50 p-4 m-auto text-center" key={product.id} >
                <div>
                <img
                  style={{ width: "250px", boxShadow: "30px white",justifyContent:"space-between", alignItems:"center"}}
                  className="m-auto"
                  src={product.image}
                  alt=""
                />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button className="btn btn-success">
                  Add to Cart
                </button>
                </div>
          </div>
    </div>
  );
}

export default Products;