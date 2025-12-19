//  constant time setup
// import { useState } from "react";

// function App() {
//   const [time, setTime] = useState(0);

//   return (
//     <div>
//       <h1>Time: {time}s</h1>
//     </div>
//   );
// }

// export default App;


// Auto timer//

// import { useState, useEffect } from "react";

// function App() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(t => t + 1);
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return <h1>Time: {time}s</h1>;
// }

// export default App;


// start,stop,reset the timer using on click buttons
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  console.log("🔄 App rendered | Time:", time, "| Running:", isRunning);

  useEffect(() => {
    if (!isRunning) {
      console.log("⏸️ Timer stopped");
      return;
    }

    console.log("▶️ Timer started");

    const interval = setInterval(() => {
      setTime(t => {
        const newTime = t + 1;
        console.log("⏱️ Tick:", newTime);
        return newTime;
      });
    }, 1000);

    return () => {
      console.log("🧹 Interval cleared");
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    console.log("🟢 Start button clicked");
    setIsRunning(true);
  };

  const handleStop = () => {
    console.log("🔴 Stop button clicked");
    setIsRunning(false);
  };

  const handleReset = () => {
    console.log("🔄 Reset button clicked");
    setTime(0);
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Stopwatch: {time}s</h1>

        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

