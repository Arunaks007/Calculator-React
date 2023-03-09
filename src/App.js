import { useEffect, useRef, useState } from "react";
import "./styles.css";

const REGEX_NUMBER = /^\d+$/;
const OPERATOR_ARRAY = ["+", "-", "/", "*", "="];

export default function App() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState("");
  const valueTemp = useRef();
  const boolTemp = useRef();

  useEffect(() => {
    document.addEventListener("keydown", keybordClicked);

    return () => {
      document.removeEventListener("keydown", keybordClicked);
    };
  });

  function keybordClicked(event) {
    switch (event.key.toLowerCase()) {
      case ".":
        setInput(input + event.key);
        break;
      case "backspace":
        let temp = input.slice(0, input.length - 1);
        setInput((prevVal) => {
          if (prevVal.length === 1) {
            boolTemp.current = false;
            valueTemp.current = 0;
            setOperator("");
            return "0";
          } else return temp;
        });
        break;
      case "delete":
        valueTemp.current = 0;
        boolTemp.current = false;
        setInput("0");
        setOperator("");
        break;
      default:
        if (OPERATOR_ARRAY.some((val) => val === event.key)) {
          setOperator(() => {
            if (input !== "0") return event.key;
          });
          doMath(event.key !== "=" ? event.key : operator);
        }
    }

    if (input.length >= 8) return;

    if (REGEX_NUMBER.test(Number(event.key))) {
      if (boolTemp.current) {
        setInput(event.key);
        boolTemp.current = false;
      } else if (boolTemp.current === false) {
        setInput((prev) => prev + event.key);
      } else {
        input !== "0" ? setInput(input + event.key) : setInput(event.key);
      }
    }
  }

  const onScreenButtonClicked = (event) => {
    let tempObj = {};
    switch (event.target.innerText.toLowerCase()) {
      case "del":
        tempObj.key = "Backspace";
        break;
      case "ac":
        tempObj.key = "Delete";
        break;
      default:
        tempObj.key = event.target.innerText;
    }
    keybordClicked(tempObj);
  };

  const doMath = (operatorValues) => {
    switch (operatorValues) {
      case "+":
        if (operatorValues !== operator && valueTemp.current !== undefined) {
        } else if (valueTemp.current === undefined) {
          valueTemp.current = 0;
          valueTemp.current = Number(input);
        } else {
          valueTemp.current += Number(input);
          console.log("inside" + valueTemp.current);
          setInput(valueTemp.current.toString());
        }
        boolTemp.current = true;
        console.log(valueTemp);
        break;
      case "-":
        if (operatorValues !== operator && valueTemp.current !== undefined) {
        } else if (valueTemp.current === undefined) {
          valueTemp.current = 0;
          valueTemp.current = Number(input);
        } else {
          valueTemp.current -= Number(input);
          console.log("inside" + valueTemp.current);
          setInput(valueTemp.current.toString());
        }
        boolTemp.current = true;
        console.log(valueTemp);
        break;
      case "/":
        if (operatorValues !== operator && valueTemp.current !== undefined) {
        } else if (valueTemp.current === undefined) {
          valueTemp.current = 0;
          valueTemp.current = Number(input);
        } else {
          valueTemp.current /= Number(input);
          console.log("inside" + valueTemp.current);
          setInput(valueTemp.current.toString());
        }
        boolTemp.current = true;
        console.log(valueTemp);
        break;
      case "*":
        if (operatorValues !== operator && valueTemp.current !== undefined) {
        } else if (valueTemp.current === undefined) {
          valueTemp.current = 0;
          valueTemp.current = Number(input);
        } else {
          valueTemp.current *= Number(input);
          console.log("inside" + valueTemp.current);
          setInput(valueTemp.current.toString());
        }
        boolTemp.current = true;
        console.log(valueTemp);
        break;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container-grid">
        <div id="input">
          <label className="operator-place">{operator}</label>
          <label>{input}</label>
        </div>
        <button onClick={onScreenButtonClicked} type="button" id="AC">
          AC
        </button>
        <button
          onClick={onScreenButtonClicked}
          type="button"
          style={{ padding: 0, fontSize: "22px" }}
        >
          DEL
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          /
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          1
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          2
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          3
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          *
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          4
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          5
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          6
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          +
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          7
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          8
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          9
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          -
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          .
        </button>
        <button onClick={onScreenButtonClicked} type="button">
          0
        </button>
        <button onClick={onScreenButtonClicked} id="enter">
          =
        </button>
      </div>
    </div>
  );
}
