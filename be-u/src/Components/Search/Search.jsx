import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import "./Search.css"

export const Search = () =>{
    const [value, setValue] = useState([]);
    const [store, setStore] = useState([]);
    useEffect(() =>{
        getData();
    }, [])

    const getData = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) =>{
            console.log(res.data);
            setValue(res.data);
        })
    };

    const handleChange = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${store}`).then((res) =>{
            setValue(res.data);
            console.log(res.data);
        });
    }

    const storedData = (e) =>{
        setStore(e.target.value);
    }

    return(
        <div>
            <h1>BeU</h1>
            <input type="text" placeholder="Search Here" onChange={storedData} />
            <button onClick={handleChange}>Filter</button>

            <div>
                <div className="titleName">
                    {value.map((e) =>(
                        <div key={e.id} className="card">
                            <h1>{e.title}</h1>
                            <h4>{e.body}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}