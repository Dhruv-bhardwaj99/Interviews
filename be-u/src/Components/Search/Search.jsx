import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Search.css";

export const Search = () => {
  const [bag, setBag] = useState([]);
  const [store, setStore] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    //   console.log(res.data);
      setBag(res.data);
    });
  };

  const handleChange = (e) => {
    // const searchWord = e.target.value;
    const final = bag.filter((res) => {
        console.log(res.title.toLowerCase().includes(store.toLowerCase()))
        return res.title.toLowerCase().includes(store.toLowerCase());
      });
    setFilter(final);
  };

  return (
    <div>
      <h1>BeU</h1>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => {
          setStore(e.target.value);
        }}
      />
      <button onClick={handleChange}>Filter</button>

      {setStore.length !== 0 ? (
        <div>
          <div className="titleName">
            {filter.map((e) => (
              <div key={e.id} className="card">
                <h1>{e.title}</h1>
                <h4>{e.body}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="titleName">
            {bag.map((e) => (
              <div key={e.id} className="card">
                <h1>{e.title}</h1>
                <h4>{e.body}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
