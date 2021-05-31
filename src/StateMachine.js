import React, { useReducer } from "react";
import styled from "styled-components";
// We should manage a State Machine with useReducer
// to handle like http request, and avoid errors when rendering somethinf
// or getting udnefined or null values

// reducer receives two argumentos
// 1. The current state : Object
// 2. The type and payload passed on function called : Object (type,payload)
function reducer({ text }) {
  switch (text) {
    case "PRESSED_ONCE":
      return {
        text: "PRESSED_TWO"
      };
    case "PRESSED_TWO":
      return {
        text: "PRESSED_THREE"
      };
    case "PRESSED_THREE":
      return {
        text: "PRESSED_ONE"
      };
    default:
      return {
        text: "PRESSED_ONCE"
      };
  }
}

const Button = styled.button`
  font-weight: 600;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  color: white;
`;

const StateMachine = ({ background = "blue" }) => {
  const [state, dispatch] = useReducer(reducer, {
    text: "PRESSED_ONCE"
  });

  return (
    <>
      <Button style={{ background }} onClick={() => dispatch()}>
        Use Reducer
      </Button>
      <h2>{state.text}</h2>
    </>
  );
};

export default StateMachine;
