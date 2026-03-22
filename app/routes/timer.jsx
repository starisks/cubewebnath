import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>⏱️ Cube Timer</h1>

      <h2>{(time / 1000).toFixed(2)}s</h2>

      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={() => {
        setRunning(false);
        setTime(0);
      }}>
        Reset
      </button>

      <br /><br />
      <Link to="/">← Back</Link>
    </div>
  );
}
