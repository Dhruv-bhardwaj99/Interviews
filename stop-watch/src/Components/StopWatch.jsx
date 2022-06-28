import { useEffect, useRef, useState } from "react";

export const StopWatch = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          clearInterval(ref.current);
          console.log("The watch has been Stopped:", ref.current);
        }}
      >
        Stop
      </button>
      <button onClick={startTimer}>Start</button>
      <button
        onClick={() => {
          clearInterval(ref.current);
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
