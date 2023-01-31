import { count } from "console";
import React, { useState } from "react";

export default function CounterAppAdvance() {
  const [counter, setCounter] = useState(0);

  const increment = (kitna = 1) => {
    setCounter(counter + kitna);
  };

  const decrement = (kitna =1 ) => {
    setCounter(counter - kitna);
  };

  return (
    <>
    <br />
      <div>Advance Counter App</div>
      <br />
      <button onClick={()=> increment()}>Increment 1</button>
      <button onClick={()=> increment(2)}>Increment 2</button>
      <button onClick={()=> increment(3)}>Increment 3</button>

      {counter}
      <button onClick={()=> decrement()}>Decrement 1</button>
      <button onClick={()=> decrement(2)}>Decrement 2</button>
      <button onClick={()=> decrement(3)}>Decrement 3</button>

    </>
  );
}
