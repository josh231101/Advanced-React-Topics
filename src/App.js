import { useState } from "react";
import CommonProps from "./CommonProps";
import StateMachine from "./StateMachine";
import FetchStateMachine from "./FetchStateMachine";
import "./styles.css";
import CompundComponents from "./CompundComponents";
import FlexibleCompoundComponents from "./FlexibleCompoundComponents";

export default function App() {
  return (
    <div className="App">
      <h1>Using Common Props</h1>
      <CommonProps />
      <hr />
      <h1>State Machine</h1>
      <StateMachine />
      <StateMachine background="green" />
      <hr />
      <h1>State Machine with HTTP request</h1>
      <FetchStateMachine />
      <hr />
      <h1>Compound Components</h1>
      <CompundComponents />
      <hr />
      <h1>Flexible CC from useContext</h1>
      <FlexibleCompoundComponents />
    </div>
  );
}
