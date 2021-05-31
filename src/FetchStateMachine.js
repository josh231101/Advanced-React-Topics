import React, { useState } from "react";

// Making state, out of your application
const FetchStateMachine = () => {
  const [state, setState] = useState("idle");
  function clicked() {
    setState("loading");
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then(({ quote }) => {
        console.log("loaded", quote);
        setState(quote);
      })
      .catch((err) => {
        setState("error");
        console.log(err);
      });
  }
  if (state === "loading") {
    return <div>loading...</div>;
  }
  if (state === "error") {
    return <div>Network Error</div>;
  }
  return (
    <div>
      Kayne Says : "{state}" <br />
      <button onClick={clicked}>Fetch Data</button>
    </div>
  );
};

export default FetchStateMachine;
