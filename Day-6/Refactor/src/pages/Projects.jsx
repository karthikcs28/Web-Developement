import { useApp } from "../context/AppContext"
export default function Projects() {
const { projects } = useApp()
return (
<section className="grid">
{projects.map(p => (
<div key={p.id} className="card">
<h3>{p.title}</h3>
<span>{p.tech}</span>
</div>
))}
</section>
)
}