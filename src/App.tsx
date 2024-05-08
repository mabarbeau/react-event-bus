import { useState } from "react";
import { Child } from "./Child";

function App() {
  const [numberOfChildren, setNumberOfChildren] = useState(2);

  return (
    <>
      <h1>Counting with shared state</h1>
      <p>
        Counting example using and event bus to share state between components.
      </p>
      <main>
        {Array.from({ length: numberOfChildren }).map((_, index) => (
          <Child name={`Component ${index}`} key={index} />
        ))}
        <button onClick={() => setNumberOfChildren(numberOfChildren + 1)}>
          Create child
        </button>
      </main>
    </>
  );
}

export default App;
