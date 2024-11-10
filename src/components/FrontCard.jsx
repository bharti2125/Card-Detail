import React from "react";


function FrontCard({ nameValue, numberValue, month, year}) {

    return (
        <div className="card-front">
          <div className="circle" id="big-circle"></div>
          <div className="circle" id="small-circle"></div>
          <div className="front-num" >{numberValue}</div>
          <div className="front-day" id="front-name">{nameValue}</div>
          <div className="front-day" id="day-num">{month}/{year}</div>
        </div>
    );
}

export default FrontCard;