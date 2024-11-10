import React, { useState } from "react";

function BackgroundContent({cvv, setCVV, nameValue, setNameValue, numberValue, setNumberValue, month, setMonth, year, setYear }) {
  
  const [nameValid, setNameValid] = useState(true); 
  const [numberValid, setNumberValid] = useState(true);  
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
 

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setNameValue(inputValue);

    if (!/^[A-Z ]+$/.test(inputValue)) {
      if (!/^[A-Z ]+$/.test(inputValue) && /^[a-zA-Z ]+$/.test(inputValue)) {
        setErrorMessage("Please type in capital letters only");
      } else {
        setErrorMessage("Wrong format, alphabet only");
      }
      setNameValid(false);
    } else {
      setNameValid(true);
      setErrorMessage("");
    }
  };

  const handleNumberChange = (e) => {
    let inputValue = e.target.value.replace(/\s/g, '');
    inputValue = inputValue.slice(0, 16);
    const formattedValue = inputValue.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    setNumberValue(formattedValue);
    
    if (!/^\d+$/.test(inputValue)) {
      setNumberValid(false);
    } else {
      setNumberValid(true);
    }
  };

  const handleMonthChange = (event) => {
    const value = event.target.value;
    if (value.length <= 2 && !isNaN(value)) {
      setMonth(value);
    }
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    if (value.length <= 2 && !isNaN(value)) {
      setYear(value);
    }
  };

  const handlecvvChange = (event) => {
    const value = event.target.value;
    if (value.length <= 3 && !isNaN(value)) {
      setCVV(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!month || !year || !cvv) {
      setErrorMessage("Cant't be blank");
    } else {
      setErrorMessage("");
      setFormSubmitted(true);
    }
  };
  const handleContinue = () => {
    setFormSubmitted(false);
    setNameValue("");
    setNumberValue("");
    setMonth("");
    setYear("");
    setCVV("");
    setErrorMessage("");
  }

  return (
    <div className="container">
      {!formSubmitted && (
        <div className="background-content">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <label for="fullname">CARD-HOLDER NAME(In Capital Letters)</label>
              <br />
              <input
                type="text"
                value={nameValue}
                onChange={handleNameChange}
                className="input-box"
                style={{
                  borderColor: nameValid
                    ? "hsl(270, 3%, 87%)"
                    : "hsl(0, 100%, 66%)",
                }}
                placeholder={nameValue ? " " : "e.g. BHARTI VERMA"}
              />
              <br/>
              <br />
              <label for="number">CARD NUMBER</label>
              <br></br>
              <input
                type="text"
                value={numberValue}
                onChange={handleNumberChange}
                className="input-box"
                style={{
                  borderColor: numberValid
                    ? "hsl(270, 3%, 87%"
                    : "hsl(0, 100%, 66%",
                }}
                placeholder={numberValue ? "" : "e.g. 1234 5678 9123 0000"}
              />
              <br />
              {!numberValid && (
                <p style={{ color: "red" }}>Wrong format, numbers only</p>
              )}
              <br />
              <label for="number">EXP. DATE [MM/YY]</label>
              <label for="number" id="cvv">
                CVV
              </label>
              <div className="content-item">
                <input
                  type="number"
                  className="input-box"
                  value={month}
                  onChange={handleMonthChange}
                  id="date"
                  placeholder="MM"
                />
                <input
                  type="number"
                  className="input-box"
                  value={year}
                  onChange={handleYearChange}
                  id="date"
                  placeholder="YY"
                />
                <input
                  type="number"
                  className="input-box"
                  value={cvv}
                  onChange={handlecvvChange}
                  id="num"
                  placeholder="e.g. 123"
                />
              </div>
              <div style={{ color: "red" }}>{errorMessage}</div>
              <br />

              <button type="submit" className="btn">
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}

      {formSubmitted && (
        <div className="content-submit">
          <div className="right-circle">
            <div className="right-sign"></div>
          </div>
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button type="button" className="btn" onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
}

export default BackgroundContent;
