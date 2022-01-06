import React from "react";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessesWord: "train", letterMatchCount: 3 },
          { guessesWord: "agile", letterMatchCount: 1 },
          { guessesWord: "party", letterMatchCount: 5 },
        ]}
      />
    </div>
  );
}

export default App;
