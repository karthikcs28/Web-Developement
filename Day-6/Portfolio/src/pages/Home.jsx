import profile from "../assets/profile.jpg"

console.log("[PAGE] Home loaded")

export default function Home() {
  return (
    <div className="home">

      <section className="summary">
        <img src={profile} alt="Profile" />
        <div>
          <h1>Hi, I’m Yaramala Karthik Reddy</h1>
          <p>
            "Computer Science and Engineering (AI & ML) graduate with a strong foundation in frontend development and a 
passion for building user-centric, scalable applications. Experienced in leveraging JavaScript, React.js, and 
modern web technologies alongside machine learning concepts to solve real-world problems. Thrive in 
collaborative environments that encourage curiosity and innovation, and committed to delivering solutions that 
create meaningful impact—not just completing tasks. Aspiring to contribute to projects at the intersection of 
intuitive user experiences, data-driven intelligence, and cutting-edge technology."
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>Pursuing Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence & Machine Learning) at Seshadri Rao Gudlavalleru Engineering College (2022–2026)</li>
          <li>Completed Intermediate Education (10+2) in MPC under the Board of Intermediate Education, Andhra Pradesh (2020–2022).</li>
        </ul>
      </section>

      <section className="section">
        <h2>Technologies Known</h2>
        <div className="tech">
          <span>Python</span>
          <span>Java Programming</span>
          <span>C-Programming</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>Data Structures</span>
          <span>Data Base Management Systems</span>
          <span>Operating Systems</span>
          <span>Artificial Intelligence</span>
          <span>Machine Learning</span>
          <span>Deep Learning</span>
          <span>Reinforcement Learning</span>
        </div>
      </section>

    </div>
  )
}
