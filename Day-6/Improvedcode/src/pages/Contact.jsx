import { useState } from "react"


console.log("[PAGE] Contact page loaded")


export default function Contact() {
const [subject, setSubject] = useState("")
const [message, setMessage] = useState("")


const handleSend = () => {
console.log("[CONTACT] Redirecting to mail client")
const mail = `mailto:yaramalakarthikreddy000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
window.location.href = mail
}


return (
<section className="card">
<h2>Contact Me</h2>
<input
value={subject}
onChange={e => setSubject(e.target.value)}
placeholder="Subject"
/>
<textarea
value={message}
onChange={e => setMessage(e.target.value)}
placeholder="Your message"
/>
<button onClick={handleSend}>Send Mail</button>
</section>
)
}