import React, { useState } from "react";
import BackgroundImage from "../components/Background-image";
import BackgroundContent from "./Background-content";
import FrontCard from "./FrontCard";
import BackCard from "./Backcard";

function App() {
  const [cvv, setCVV] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  

 return (
   <div className="interactive-card-container">
     <BackgroundImage />
     <BackgroundContent 
      cvv={cvv} 
      setCVV={setCVV}
      nameValue={nameValue}
      setNameValue={setNameValue}
      numberValue={numberValue}
      setNumberValue={setNumberValue}
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}

      />
     <FrontCard 
      nameValue={nameValue} 
      numberValue={numberValue}  
      month={month} 
      year={year} 
     />
     <BackCard cvv = {cvv}/>
   </div>
 );
}


export default App;