console.log("[PAGE] Projects loaded")

export default function Projects() {
  return (
    <section className="projects">

      <div className="project-card">
        <h3>Fake News Detection</h3>
        <p>Detects misinformation using NLP</p>
        <span>BERT · BiGRU</span>
      </div>

      <div className="project-card">
        <h3>GrainPalette</h3>
        <p>Rice classification using Deep Learning</p>
        <span>CNN · MobileNet</span>
      </div>

      <div className="project-card">
        <h3>Student Depression Analysis</h3>
        <p>ML-based mental health insights</p>
        <span>Python · ML Algorithms</span>
      </div>

    </section>
  )
}
