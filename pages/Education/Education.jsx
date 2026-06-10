import { useState } from 'react'

function Education() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const educations = [
    { title: 'BS Information Technology', school: 'Trimex Colleges', period: '2025 - 2026', desc: 'Major in Web Development. Graduated with honors. Thesis: Automated Registration System.' },
    { title: 'Senior High School', school: 'Green Field Integrated School', period: '2019 - 2020', desc: 'STEM Strand. Consistent honor student.' },
    { title: 'Junior High School', school: 'Pulong Sta. Cruz National High School', period: '2015 - 2019', desc: 'With Honors. Math and Science Club Officer.' },
    { title: 'Elementary', school: 'Bagong Tanyag Elementary', period: '2010 - 2015', desc: 'With Honors. Consistent top student.' }
  ]
  
  const openModal = (title, school, period, desc) => {
    setModalData({ title, desc: `${school}\n${period}\n\n${desc}` })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="two-column-grid">
        {educations.map((edu, i) => (
          <div key={i} className="flip-card-exp-medium animate-item" style={{ animationDelay: `${0.1 + i * 0.1}s` }} onClick={() => openModal(edu.title, edu.school, edu.period, edu.desc)}>
            <div className="flip-card-exp-inner-medium">
              <div className="flip-card-exp-front-medium">
                <div className="card-icon-3d"><i className="fas fa-graduation-cap"></i></div>
                <h4>{edu.title}</h4>
                <span>{edu.school}</span>
              </div>
              <div className="flip-card-exp-back-medium">
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

export default Education