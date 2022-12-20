import React from 'react';
import axios, { Axios } from 'axios';
import { useState } from 'react';

function PostForm() {
    const url ="localhost:5000/api/data-logs/add-data"
    const [data, setData] = useState({
        idNode: "",
        waterLevel: "",
        timestamp: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            idNode: data.idNode,
            waterLevel: data.waterLevel,
            timestamp: data.timestamp
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="idNode" value={data.idNode} placeholder="ID Node" type="text"></input>
                <input onChange={(e) => handle(e)} id="waterLevel" value={data.waterLevel} placeholder="Water Level" type="text"></input>
                <input onChange={(e) => handle(e)} id="timestamp" value={data.timestamp} placeholder="Timestamp" type="text"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;