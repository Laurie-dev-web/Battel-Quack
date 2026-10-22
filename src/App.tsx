import { useState } from "react";
import { Player } from "./components/Player";

// -> Importer mon image quack, image dans "public".
// import quackImg from "./assets/quack.png";

function App() {
  // utilisation de state
  const [counter, setCounter] = useState<number>(20);
  let incrementvalue = (value) => {
    setCounter(counter + value);
  };
  // RESET
  const resetAll = () => {
    setCounter(20);
  };

  return (
    <>
      <Player name="riri" imgSrc="/quack.png" />
      <p>PV {counter}</p>
      <button onClick={() => incrementvalue(1)}>+1</button>
      <button onClick={() => incrementvalue(-1)}>-1</button>
      <button onClick={() => incrementvalue(5)}>+5</button>
      <button onClick={() => incrementvalue(-5)}>-5</button>
      <button onClick={resetAll}>RESET</button>
    </>
  );
}
export default App;
