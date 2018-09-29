import React, { Component } from "react";
import Draggable from 'react-draggable';
import "./index.css";

const UserFavourite = (props) => {
  return (<div>
      <h1>Favourite Page</h1>
      {props.items.userFavourite.map(item => <div className='eachCard'>
     
          <div className="cardheader"><p>{item.school}</p></div>
          <div className="container"><p>{item.program}</p></div>
    
          
        </div>)}
    </div>);
};

export default UserFavourite;
