//child and app and incremental rendering 


// import { useState } from "react";

// function Child({ onClick }) {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Child Button</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("App rendered");

//   const handleClick = () => {
//     console.log("Child button clicked");
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default App;


// No rendering of the page due to usage of the call back
import { useState, useCallback, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
