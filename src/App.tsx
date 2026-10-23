import { useState } from "react";
import { Player } from "./components/Player";

// -> Importer mon image quack, image dans "public".
// import quackImg from "./assets/quack.png".

function App() {
  // Utilisation de state.
  // Ne pas aller au dessus de 20.
  const [counter, setCounter] = useState<number>(20);
  const incrementvalue = (value: number) => {
    setCounter((prev) => {
      const nextValue = prev + value;
      return Math.min(nextValue, 20);
    });
  };

  // RESET
  const resetAll = () => {
    setCounter(20);
  };
  // Disable : const isDead = pv(counter) <= 0;
  const isDead = counter <= 0;

  return (
    <>
      <div>
        <Player name="riri" imgSrc="/riri.jpg" />
        <p>PV {counter}</p>
        <button onClick={() => incrementvalue(1)} disabled={isDead}>
          +1
        </button>
        <button onClick={() => incrementvalue(-1)} disabled={isDead}>
          -1
        </button>
        <button onClick={() => incrementvalue(5)} disabled={isDead}>
          +5
        </button>
        <button onClick={() => incrementvalue(-5)} disabled={isDead}>
          -5
        </button>
        <button onClick={resetAll}>RESET</button>
      </div>
      <div>
        <Player name="fifi" imgSrc="/fifi.jpg" />
        <p>PV {counter}</p>
        <button onClick={() => incrementvalue(1)} disabled={isDead}>
          +1
        </button>
        <button onClick={() => incrementvalue(-1)} disabled={isDead}>
          -1
        </button>
        <button onClick={() => incrementvalue(5)} disabled={isDead}>
          +5
        </button>
        <button onClick={() => incrementvalue(-5)} disabled={isDead}>
          -5
        </button>
        <button onClick={resetAll}>RESET</button>
      </div>
      <div>
        <Player name="loulou" imgSrc="/loulou.jpg" />
        <p>PV {counter}</p>
        <button onClick={() => incrementvalue(1)} disabled={isDead}>
          +1
        </button>
        <button onClick={() => incrementvalue(-1)} disabled={isDead}>
          -1
        </button>
        <button onClick={() => incrementvalue(5)} disabled={isDead}>
          +5
        </button>
        <button onClick={() => incrementvalue(-5)} disabled={isDead}>
          -5
        </button>
        <button onClick={resetAll}>RESET</button>
      </div>
    </>
  );
}
export default App;
