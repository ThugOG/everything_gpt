import React, { useState, useEffect } from "react";

const ChatComp = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const getGPTResponse = async() => {
    try{
        const data = await fetch("")
    }
    catch(errr){
        
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
        <button onClick={getGPTResponse}>GET</button>
      </div>
      <div className="response"></div>
    </div>
  );
};

export default ChatComp;
