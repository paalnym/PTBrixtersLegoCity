import React, { Component } from "react";
import "./dashBoard.css";
import Iframe from 'react-iframe'
export default function DashBoard() {
  return (
    <div className="box-wrapper">
      <h2>Dashboard</h2>
      <div id="box3">
        <div id="trainFeedBox">
        
        <Iframe url="http://10.20.156.105:8081/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            frameBorder="0"
        />
        </div>
        <div className="middle-column">
          <div id="box5">GeeksforGeeks 5</div>
          <div id="box6">GeeksforGeeks 6</div>
          <div id="box7">GeeksforGeeks 7</div>
        </div>
        <div id="box8">GeeksforGeeks 8</div>
      </div>
    </div>
  );
}
