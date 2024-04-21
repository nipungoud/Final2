import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Project1() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [newList, setNewList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const openProduct = (product) => {
    navigate("/Products", { state: product });
  };
  const onFormSubmit = (x) => {
    setSearch(x.sr);
    setNewList(list.filter((prod) => {
        return prod.title.toLowerCase().includes(search.toLowerCase());
      }));
  };
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container bg-dark border m-auto">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background:"lightblue",
        }}
      >
        <div className="m-auto text-coral mb-3 mt-3 ">
          <div />
          <div>
            <form onChange={handleSubmit(onFormSubmit)  }>
              <input type="text" placeholder="search"  {...register("sr")} />
            </form>
          </div>
        </div>
      </div>
      {search === "" ? (
        <div
          className="w-75 m-auto mt-4"
          style={{display: "flex",flexWrap: "wrap",gap: "8px",justifyContent: "space-around",}}
        >
          {list.map((product) => {
            return (
              <div className="card w-25 p-4 text-center" key={product.id}>
                <img
                  style={{ width: "150px", boxShadow: "30px white" }}
                  className="m-auto"
                  src={product.image}
                  alt=""
                />
                <p>{product.title}</p>
                <button className="btn btn-success" onClick={() => openProduct(product)}>
                  Details
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="w-75 m-auto mt-4"
          style={{display: "flex",flexWrap: "wrap",gap: "8px",justifyContent: "space-around",
          }}
        >
          {newList.map((product) => {
            return (
              <div className="card w-25 p-4 text-center" key={product.id}>
                <img
                  style={{ width: "150px", boxShadow: "30px white" }}
                  className="m-auto"
                  src={product.image}
                  alt=""
                />
                <p>{product.title}</p>
                <button onClick={()=>openProduct(product)} className="btn btn-success">Details</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Project1;