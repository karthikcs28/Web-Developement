//re rendderding 

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("App rendered");

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default App;

//basic Rendering

// import { useState } from "react";

// function App() {
//   console.log("App rendered");

//   return (
//     <div>
//       <h1>Performance Basics</h1>
//     </div>
//   );
// }

// export default App;



//child renderding when parent renders


// import { useState } from "react";

// function Child() {
//   console.log("Child rendered");
//   return <h2>Child Component</h2>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("App rendered");

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <Child />
//     </div>
//   );
// }

// export default App;

//child doesnot rerendered
import { useState, memo } from "react";

const Child = memo(function Child() {
  console.log("Child rendered");
  return <h2>Child Component</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child />
    </div>
  );
}

export default App;

