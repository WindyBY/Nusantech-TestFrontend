import React, { Component } from "react";
import { CalculatorInput } from "../CalculatorInput";
import { CalculatorControl } from "../CalculatorControl";
import CounterOutput from "../CounterOutput";
import { connect } from "react-redux";
import '../css/Calculator.css'

class Calculator extends Component {
  operatorHandler(param) {
    const filter = this.props.reducer.data.filter(
      (item) => item.checklist === true
    );
    const bil = filter.map(({value}) => value)
    console.log(filter);
    if (filter.length == 0 || filter.length == 1) {
      return alert("Cheklist tidak boleh kosong / kurang dari 2");
    } else {
      let temp = 0;
      if (param === "ADD") {
        temp = bil.reduce((a, b) => a + b);
      } else if (param === "SUBSTRACT") {
        temp = bil.reduce((a, b) => a - b);
      } else if (param === "MULTIPLY") {
        temp = bil.reduce((a, b) => a * b);
      } else if (param === "DIVISION") {
        temp = bil.reduce((a, b) => a / b);
      }
      this.props.operatorBil(temp);
    }
  }
  render() {
    return (
      <div>
        {this.props.reducer.data.map((item) => (
          <div className='row'>
              <div >
                <CalculatorInput
                    name={item.name}
                    value={item.value}
                    onChangeCounter={(event) =>
                        this.props.onChangeHandler(event, item.id)}/>
              </div>
              <div className='checkbox'>
                <input
                    type="checkbox"
                    name={item.name}
                    value={item.checklist}
                    onChange={(event) => this.props.onChangeCheckbox(event, item.id)}>
                </input>
              </div>
          </div>
        ))}

        <div class="d-flex justify-content-center">
          <div class="p-2 bd-highlight">
            <CalculatorControl
              label="+"
              clicked={() => this.operatorHandler("ADD")}
            />
          </div>
          <div class="p-2 bd-highlight">
            <CalculatorControl
              label="-"
              clicked={() => this.operatorHandler("SUBSTRACT")}
            />
          </div>
          <div class="p-2 bd-highlight">
            <CalculatorControl
              label="*"
              clicked={() => this.operatorHandler("MULTIPLY")}
            />
          </div>
          <div class="p-2 bd-highlight">
            <CalculatorControl
              label="/"
              clicked={() => this.operatorHandler("DIVISION")}
            />
          </div>
        </div>

        <div className="hr"></div>
        <CounterOutput
          outputCalTmbhKrg={this.props.outputCalTmbhKrg}
          outputCalKaliBagi={this.props.outputCalKaliBagi}
          showCounter={this.props.showCounter}
          total={this.props.reducer.total}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCounter: state.showCounter.show,
    outputCalTmbhKrg: state.outputCalTmbhKrg.counter,
    outputCalKaliBagi: state.outputCalKaliBagi.counter,
    inputCal1: state.inputCal.input1,
    inputCal2: state.inputCal.input2,
    inputCal3: state.inputCal.input3,
    reducer: state.reducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    operatorBil: (a) => dispatch({ type: "OPERATOR", a }),
    onChangeCounter: (event) =>
      dispatch({
        type: "onChangeInput",
        name: event.target.name,
        value: event.target.value,
      }),
    onChangeHandler: (event, id) =>
      dispatch({
        type: "INPUT",
        value: event.target.value,
        name: event.target.name,
        id,
      }),
    onChangeCheckbox: (event, id) =>
      dispatch({
        type: "CHECKBOX",
        value: event.target.value,
        name: event.target.name,
        id,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
