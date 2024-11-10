import React from "react";

function BackCard({ cvv }) {
   
    return (
        <div className="card-back">
          <div id="black-area"></div>
          <div id="back-num" >{cvv}</div>
        </div>
    );
}

export default BackCard;