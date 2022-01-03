import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter Can't go bellow 0
      </div>
      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment Counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement the counter
      </button>
    </div>
  );
}

export default App;
