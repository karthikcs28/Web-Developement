console.log("[CONTROLLER] Component rendered")

export default function Controller({ updateText }) {
  const handleClick = () => {
    console.log("[CONTROLLER] Button clicked → updating state")
    updateText("State lifted and updated from Child!")
  }

  return (
    <button onClick={handleClick}>
      Change Text
    </button>
  )
}
