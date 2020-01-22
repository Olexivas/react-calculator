import React, { Component } from "react";

export class Buttons extends Component {
  state = {
    buttons: [
      { id: "clear", value: "AC" },
      { id: "divide", value: "/" },
      { id: "multiply", value: "*" },
      { id: "seven", value: "7" },
      { id: "eight", value: "8" },
      { id: "nine", value: "9" },
      { id: "subtract", value: "-"},
      { id: "four", value: "4" },
      { id: "five", value: "5" },
      { id: "six", value: "6" },
      { id: "add", value: "+" },
      { id: "one", value: "1" },
      { id: "two", value: "2" },
      { id: "three", value: "3" },
      { id: "equals", value: "=" },
      { id: "zero", value: "0" },
      { id: "decimal", value: "." }
    ]
  };

  render() {
    const buttons = this.state.buttons.map(button => {
      return (
        <button key={button.id} id={button.id} value={button.value} className='btn'
          onClick={() => {
            this.props.setNumber(button.value)
          }}
        >
          {button.value}
        </button>
      );
    });

    return <div className="buttons">{buttons}</div>;
  }
}

export default Buttons;
