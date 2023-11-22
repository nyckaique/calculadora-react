import React, { useState } from "react";
import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operador, setOperador] = useState();
  const [refazer, setRefazer] = useState(false);
  const [ultimoDigitado, setUltimoDigitado] = useState(0);

  function inputNum(e) {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentagem() {
    setNum(
      (parseFloat(num.replace(",", ".")) / 100).toLocaleString("pt-BR", {
        useGrouping: false,
      })
    );
  }

  function mudarSinal() {
    if (num > 0) {
      setNum(-num);
    } else if (num < 0) {
      setNum(Math.abs(num));
    }
  }

  function operadorHandle(e) {
    var operadorInput = e.target.value;
    setOperador(operadorInput);
    setOldNum(num);
    console.log(oldNum);
    setNum(0);
    setRefazer(false);
  }

  function calcular() {
    const oldNumNumber = parseFloat(oldNum);
    const numNumber = parseFloat(num);
    if (refazer) {
      if (operador === "/") {
        setNum((numNumber / ultimoDigitado).toLocaleString("en"));
      } else if (operador === "*") {
        setNum((numNumber * ultimoDigitado).toLocaleString("en"));
      } else if (operador === "-") {
        setNum((numNumber - ultimoDigitado).toLocaleString("en"));
      } else if (operador === "+") {
        setNum((numNumber + ultimoDigitado).toLocaleString("en"));
      }
    } else {
      if (operador === "/") {
        setNum((oldNumNumber / numNumber).toLocaleString("en"));
      } else if (operador === "*") {
        setNum((oldNumNumber * numNumber).toLocaleString("en"));
      } else if (operador === "-") {
        setNum((oldNumNumber - numNumber).toLocaleString("en"));
      } else if (operador === "+") {
        setNum((oldNumNumber + numNumber).toLocaleString("en"));
      }
      setUltimoDigitado(numNumber);
      setRefazer(true);
    }
  }
  return (
    <div>
      <Box m={3} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="resultado">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={mudarSinal}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={operadorHandle} value="/">
            /
          </button>
          <button className="grey" onClick={inputNum} value={7}>
            7
          </button>
          <button className="grey" onClick={inputNum} value={8}>
            8
          </button>
          <button className="grey" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operadorHandle} value="*">
            X
          </button>
          <button className="grey" onClick={inputNum} value={4}>
            4
          </button>
          <button className="grey" onClick={inputNum} value={5}>
            5
          </button>
          <button className="grey" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operadorHandle} value="-">
            -
          </button>
          <button className="grey" onClick={inputNum} value={1}>
            1
          </button>
          <button className="grey" onClick={inputNum} value={2}>
            2
          </button>
          <button className="grey" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operadorHandle} value="+">
            +
          </button>
          <button className="grey btn-lg" onClick={inputNum} value={0}>
            0
          </button>
          <button className="grey" onClick={inputNum} value=".">
            .
          </button>
          <button className="orange" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
