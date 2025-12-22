console.log("[CHILD TWO] Rendered")

export default function ChildTwo({ updateMessage }) {
  const handleClick = () => {
    console.log("[CHILD TWO] Updating message")
    updateMessage("Updated by Child Two")
  }

  return (
    <button onClick={handleClick}>
      Child Two Update
    </button>
  )
}
