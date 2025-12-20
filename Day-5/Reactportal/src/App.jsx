import { useState, useEffect } from "react";
import Modal from "./Modal";

function App() {
  console.log("🟢 App rendered");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open ? "🟡 Modal OPEN" : "⚪ Modal CLOSED");
  }, [open]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Simple React Portal</h1>

      <button
        onClick={() => {
          console.log("🟠 Open button clicked");
          setOpen(true);
        }}
      >
        Open Modal
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default App;
