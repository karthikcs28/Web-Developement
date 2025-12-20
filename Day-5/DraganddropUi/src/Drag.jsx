import { useEffect, useState } from "react";

function DragDropAPI() {
  console.log("🟢 DragDropAPI rendered");

  const [tasks, setTasks] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);

  useEffect(() => {
    console.log("🟡 Fetching tasks from API");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => {
        console.log("✅ API data received:", data);
        setTasks(data);
      })
      .catch(err => console.log("❌ API error:", err));
  }, []);

  const handleDragStart = (index) => {
    console.log("🟠 Drag started:", tasks[index].title);
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    console.log("🟣 Dropped on index:", index);

    const updated = [...tasks];
    const draggedItem = updated[dragIndex];

    updated.splice(dragIndex, 1);
    updated.splice(index, 0, draggedItem);

    console.log("🔁 Updated order:", updated.map(t => t.title));

    setTasks(updated);
    setDragIndex(null);
  };

  return (
    <div>
      

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "12px",
              marginBottom: "8px",
              background: "#f1f1f1",
              cursor: "grab"
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropAPI;
