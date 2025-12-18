import { useState, useEffect } from "react";

function PersistentName() {
  const [name, setName] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <div>
      <h3>Persistent Input</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}

export default PersistentName;
