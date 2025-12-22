import { useMemo } from "react"
import { useApp } from "../context/AppContext"


console.log("[PAGE] Projects page loaded")


export default function Projects() {
const { projects } = useApp()


const projectCards = useMemo(() => {
console.log("[PROJECTS] Rendering project cards")
return projects.map(p => (
<div key={p.id} className="card">
<h3>{p.title}</h3>
<span>{p.tech}</span>
</div>
))
}, [projects])


return <section className="grid">{projectCards}</section>
}