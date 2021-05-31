import { useState } from "react";
import "./styles.css";

const Button = ({ color, underline, increment }) => {
  const [counter, setCounter] = useState(0);
  return (
    <button
      style={{
        color,
        textDecoration: underline && "underline"
      }}
      onClick={() => setCounter((c) => c + (increment ? increment : 1))}
    >
      I am a button {counter}
    </button>
  );
};

export default function CommonProps() {
  // Part One - Setting Common Props
  // When you repeat to many components the same props, is better to set them
  // Is a good practice to set default props
  const props = {
    increment: 2,
    color: "blue",
    underline: false
  };
  return (
    <div>
      <Button {...props} underline={true} />
      <Button {...props} />
      <Button color="green" />
    </div>
  );
}
