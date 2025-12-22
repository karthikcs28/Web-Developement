import { useState } from "react"

console.log("[PAGE] Contact loaded")

export default function Contact() {
  const [msg, setMsg] = useState("")

  const sendMail = () => {
    console.log("[CONTACT] Opening mail")
    window.location.href =
      `mailto:yaramalakarthikreddy000@gmail.com?body=${encodeURIComponent(msg)}`
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <textarea
        placeholder="Write your message..."
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />

      <button onClick={sendMail}>Send Message</button>

      <p className="credit">© Developed by Karthik</p>
    </section>
  )
}
