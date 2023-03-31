import React, { useState, useEffect } from "react";

const ChatComp = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState("")
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const getGPTResponse = async() => {
    try{
        const data = await fetch("https://everything-gpt.onrender.com/api/chat/response",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: searchText,
          })
        })
        const json = await data.json();
        console.log(json.message.content)
        setData(json.message.content)
    }
    catch(err){
        console.log(err)
    }
  };
  return (
    <div className="ChatComp">
      <h1>Chat</h1>
      <div className="input">
        <input
          type="text"
          value={searchText}
          placeholder="Ask Anything"
          onChange={handleSearchText}
        ></input>
        <button className="get_res" onClick={getGPTResponse}>GET</button>
      </div>
      <div className="response">{data}</div>
    </div>
  );
};

export default ChatComp;
