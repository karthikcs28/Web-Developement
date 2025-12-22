console.log("[DISPLAY] Rendered")

export default function Display({ text }) {
  return (
    <div className="card">
      <h3>Current Text</h3>
      <p>{text}</p>
    </div>
  )
}
