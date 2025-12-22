import { useState } from "react"
import Display from "./components/Display"
import ChildOne from "./components/ChildOne"
import ChildTwo from "./components/ChildTwo"

console.log("[APP] App rendered")

export default function App() {
  const [message, setMessage] = useState("Initial Message")

  console.log("[APP] Current message:", message)

  return (
    <div className="container">
      <h2>Lifting State with Multiple Children</h2>

      <Display text={message} />

      <div className="actions">
        <ChildOne updateMessage={setMessage} />
        <ChildTwo updateMessage={setMessage} />
      </div>
    </div>
  )
}
