import React, { useState } from "react";

// React.Children
/**
 * Allow us to iterate on every single child inside of the map function
 * @param {A} param0
 */
/**
 * A REACT COMPONENT CAN BE A FUNCTION,CLASS, DOM ELEMENT, OR NULL
 * THOSE ARE VALID JSX ELEMENTS
 */
const CheckBox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return React.Children.map(children, (child) => {
    // In here we are injecting props to every component
    if (typeof child.type !== "function") {
      return child;
    }
    const clone = React.cloneElement(child, {
      checked,
      setChecked
    });
    // console.log(clone);
    return clone;
  });
};

const CheckBoxInput = ({ checked, setChecked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const Label = ({ children, checked, setChecked }) => {
  if (!setChecked) {
    // called directly
    throw new Error("Label should be called inside a Checkbox component");
  }

  return (
    <label htmlFor="something" onClick={() => setChecked((state) => !state)}>
      {children}
    </label>
  );
};

const CompundComponents = () => {
  // The parent element can share a state and pass the props to every child
  return (
    <CheckBox>
      <CheckBoxInput />
      <Label>Check box label</Label>
    </CheckBox>
  );
};
export default CompundComponents;
