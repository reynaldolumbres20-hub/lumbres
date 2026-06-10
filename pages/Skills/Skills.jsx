import { useState } from 'react'

function Skills() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const skills = [
    { name: 'React.js', icon: 'fab fa-react', desc: 'Frontend mastery, hooks, context API, component-driven architecture' },
    { name: 'PHP', icon: 'fab fa-php', desc: 'Backend logic, REST APIs, MVC pattern, database integration' },
    { name: 'MySQL', icon: 'fas fa-database', desc: 'Complex queries, indexing, optimization, data integrity' },
    { name: 'JavaScript', icon: 'fab fa-js', desc: 'ES6+, async patterns, DOM manipulation, closures' },
    { name: 'C# / VB.NET', icon: 'fas fa-code', desc: 'Desktop applications, WinForms, enterprise solutions' },
    { name: 'Git/GitHub', icon: 'fab fa-github', desc: 'Version control, collaborative workflows, CI/CD basics' },
    { name: 'UI/UX Design', icon: 'fas fa-paintbrush', desc: 'Figma, Canva, wireframing, user-centered design' },
    { name: 'RESTful APIs', icon: 'fas fa-plug', desc: 'Integration, authentication, third-party services' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', desc: 'Mobile-first, cross-browser, adaptive layouts' }
  ]
  
  const openModal = (title, desc) => {
    setModalData({ title, desc })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="flip-card-3d animate-item" style={{ animationDelay: `${0.1 + i * 0.05}s` }} onClick={() => openModal(s.name, s.desc)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className={s.icon}></i>
                <h4>{s.name}</h4>
              </div>
              <div className="flip-card-back">
                <i className="fas fa-mouse-pointer"></i>
                <p>Click for Details →</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay active" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.title}</h3>
            <p>{modalData.desc}</p>
            <button onClick={() => setShowModal(false)} className="modal-close">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills