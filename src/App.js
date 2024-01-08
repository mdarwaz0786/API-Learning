import React from "react";
import "./App.css";
import Get from "./axios/Get.js";
import Post from "./axios/Post.js";
import Put from "./axios/Put.js";
import Delete from "./axios/Delete.js";

const App = () => {
  return (
    <>
      <div className="App">
        <Get /> <br />
        <Post /> <br />
        <Put /><br />
        <Delete /><br />
      </div>
    </>
  );
};

export default App;

