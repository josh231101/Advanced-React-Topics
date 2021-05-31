import React, { createContext, useState, useContext } from "react";

const CheckBoxInterface = createContext(null);

const CheckBox = ({ children }) => {
  // IN this case we are going to useContext to share to every child no matter
  // how nested it is...
  const [checked, setChecked] = useState(true);

  return (
    <CheckBoxInterface.Provider
      value={{
        checked,
        setChecked
      }}
    >
      {children}
    </CheckBoxInterface.Provider>
  );
};

const CheckBoxInput = () => {
  const context = useContext(CheckBoxInterface);

  const { checked, setChecked } = context;
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const Label = ({ children }) => {
  const context = useContext(CheckBoxInterface);

  const { checked, setChecked } = context;

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
  return (
    <CheckBox>
      <CheckBoxInput />
      <div>
        <div>
          <Label>Check box label</Label>
        </div>
      </div>
    </CheckBox>
  );
};
export default CompundComponents;
