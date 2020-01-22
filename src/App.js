import OutPutScreen from "./OutPutScreen";
import Buttons from "./Buttons";
import React, { Component } from "react";
import * as math from "mathjs";
import "./App.scss";

export class App extends Component {
  state = {
    numbers: "0"
  };

  setNumber = value => {
    let numbers = this.state.numbers;

    switch (value) {
      case "*":
      case "/":
        if (
          numbers[numbers.length - 1] === "+" ||
          numbers[numbers.length - 1] === "-" ||
          numbers[numbers.length - 1] === "*" ||
          numbers[numbers.length - 1] === "/" ||
          numbers[numbers.length - 1] === "."
        ) {
          numbers = numbers.slice(0, -1);
          numbers += value;
        } else {
          numbers += value;
        }
        break;
      case "+":
        if (numbers[numbers.length - 1] === "-") {
          if (
            numbers[numbers.length - 2] === "*" ||
            numbers[numbers.length - 2] === "/"
          ) {
            numbers = numbers.slice(0, -2);
            numbers += value;
          } else {
            numbers = numbers.slice(0, -1);
            numbers += value;
          }
        } else if (
          numbers[numbers.length - 1] === "+" ||
          numbers[numbers.length - 1] === "*" ||
          numbers[numbers.length - 1] === "/" ||
          numbers[numbers.length - 1] === "."
        ) {
          numbers = numbers.slice(0, -1);
          numbers += value;
        } else {
          numbers += value;
        }
        break;
      case "-":
        if (
          numbers[numbers.length - 1] === "-" ||
          numbers[numbers.length - 1] === "+"
        ) {
          numbers = numbers.slice(0, -1);
          numbers += value;
        } else {
          numbers += value;
        }
        break;
      case ".":
        if (
          numbers[numbers.length - 1] === "+" ||
          numbers[numbers.length - 1] === "-" ||
          numbers[numbers.length - 1] === "*" ||
          numbers[numbers.length - 1] === "/" ||
          numbers[numbers.length - 1] === "."
        ) {
          numbers = numbers.slice(0, -1);
          numbers += value;
        }
        if (numbers.indexOf(".") === -1) {
          numbers += value;
        } else {
          if (
            numbers.indexOf("-") !== -1 ||
            numbers.indexOf("+") !== -1 ||
            numbers.indexOf("*") !== -1 ||
            numbers.indexOf("/") !== -1
          ) {
            numbers += value;
          }
          numbers = numbers + "";
        }
        break;
      case "=":
        numbers = math.evaluate(numbers);
        break;
      case "AC":
        numbers = "0";
        break;
      default:
        if (numbers[numbers.length - 1] === "0" && numbers.length === 1) {
          numbers = value;
        } else {
          numbers += value;
        }
        break;
    }

    this.setState({
      numbers
    });
  };

  render() {
    return (
      <div className="App">
        <OutPutScreen>{this.state.numbers}</OutPutScreen>
        <Buttons setNumber={this.setNumber} />
      </div>
    );
  }
}

export default App;
