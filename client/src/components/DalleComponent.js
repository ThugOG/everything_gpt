import React, { useState } from "react";
import { imageStatements } from "../constants";
const DalleComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null)
  const handleSearch = (e) => {
    setSearchText(e.target.value)
  };
  const handleRequested = async() => {
    try{
        const data = await fetch("https://everything-gpt.onrender.com/api/media/dalle",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                prompt: searchText,
            })
        })
        const json = await data.json();
        setData(json.url)
    }
    catch(err){
        console.log(err)
    }
  }
  const handleRequestedRandom = async() => {
    try{
        const random = imageStatements[Math.floor(Math.random()*50)]
        const data = await fetch("https://everything-gpt.onrender.com/api/media/dalle",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                prompt: random,
            })
        })
        const json = await data.json();
        setData(json.url)
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div className="DalleComp">
      <h1>DALLE-2.0</h1>
      <div className="inputDalle">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Get as wierd as you can and best part is no one gonna judge you."
        ></input>
        <button className="get_dalle" onClick={handleRequested}>GET</button>
        <button className="get_dalle_random" onClick={handleRequestedRandom}>Random Response</button>
      </div>
      <div className="response_dalle">
        <img src={
            (data) ? data : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        }></img>
      </div>
    </div>
  );
};

export default DalleComponent;
