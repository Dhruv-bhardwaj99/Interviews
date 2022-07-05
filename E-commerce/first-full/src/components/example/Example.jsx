import { useState, useEffect } from "react";
import axios from "axios";
import "./Example.css";

export const Example = () => {
  const [first, setFirst] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://francophone-donair-27749.herokuapp.com/products")
      .then((res) => {
        setFirst(res.data);
        console.log(res.data);
      });
  };

  const handleChange = (e) =>{
    const sortby = +e.target.value;
    axios.get(`https://francophone-donair-27749.herokuapp.com/products?sort=${sortby}`).then((res) =>{
        console.log(res.data);
        setFirst(res.data);
    }).catch((err) =>{
        console.log("error message",err);
    });
  };


  return (
    <div>
      <div>
        <h1>hi</h1>
        <label htmlFor="sort">Sort By Price</label>
        <select id="sort" onChange={handleChange}>
          <option value="1">Sort by Price</option>
          <option value="1">Low to High</option>
          <option value="-1">High to Low</option>
        </select>

        <label htmlFor="filter">Filter By Price</label>
        <select id="filter">
          <option value="100-200">Filter by Price</option>
          <option value="100-200">100-400</option>
          <option value="401-800">401-800</option>
          <option value="801-1200">801-1200</option>
        </select>
      </div>
      <div className="cards">
        {first.map((e) => (
          <div key={e._id} className="details">
            <img src={e.imageurl} className="imgCards" alt="" />
            <h4> Name: {e.title}</h4>
            <p>Rs. {e.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
