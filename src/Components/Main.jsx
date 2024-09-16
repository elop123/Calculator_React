import React, { useState } from 'react';
import s from '../style/Main.module.scss'

function Main (){
  const [input, setInput] = useState("")
  const [input2, setInput2]= useState("")
  const [operation, setOperation] = useState("")
 

const handleClear=()=>{
    setInput("")
    setInput2("");
    setOperation("");
    setResult("");
}

const handleInput = (value) => {
    if (operation === "") {
      setInput((prev) => prev + value);
    } else {
      setInput2((prev) => prev + value);
    }
  };

  const handleOperation = (op) => {
    if (input !== "") {
      setOperation(op);
    }
  };

  const handleCalculate = () => {
    if (input !== "" && input2 !== "" && operation !== "") {
      const num1 = parseFloat(input);
      const num2 = parseFloat(input2);
      let result = 0;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }

    
      setInput("");
      setInput2("");
      setOperation(result.toString());
    }
  };
  
   

    return(
        <div className={s.calculator}>
        <input type="text"  value={input + operation + input2} readOnly/>
        <input  type="button" value="0" onClick={() => handleInput("0")}/>
        <input  type="button" value="1" onClick={() => handleInput("1")}/>
        <input  type="button" value="2" onClick={() => handleInput("2")}/>
        <input  type="button" value="3" onClick={() => handleInput("3")}/>
        <input  type="button" value="4" onClick={() => handleInput("4")}/>
        <input  type="button" value="5" onClick={() => handleInput("5")}/>
        <input  type="button" value="6" onClick={() => handleInput("6")}/>
        <input  type="button" value="7" onClick={() => handleInput("7")}/>
        <input  type="button" value="8" onClick={() => handleInput("8")}/>
        <input  type="button" value="9" onClick={() => handleInput("9")}/>
        <input  type="button" value="+" onClick={() => handleOperation("+")}/>
        <input  type="button" value="-" onClick={() => handleOperation("-")}/>
        <input  type="button" value="*" onClick={() => handleOperation("*")}/>
        <input  type="button" value="/" onClick={() => handleOperation("/")}/>
        <input  type="button" value="="  onClick={handleCalculate} />

        <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default Main