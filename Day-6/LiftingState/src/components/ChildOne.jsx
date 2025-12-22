console.log("[CHILD ONE] Rendered")

export default function ChildOne({ updateMessage }) {
  const handleClick = () => {
    console.log("[CHILD ONE] Updating message")
    updateMessage("Updated by Child One")
  }

  return (
    <button onClick={handleClick}>
      Child One Update
    </button>
  )
}
