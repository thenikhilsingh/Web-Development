import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Button incrementCount={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="hriday">
        <h1>Best Web Dev Course</h1>
        <p>trying to be consistent in this</p>
        <p>will complete the course soon</p>
      </Card>
      <card children="mai ek children hu">
        hello jee, kaise ho saare
      </card> */}
    </>
  );
}

export default App;
