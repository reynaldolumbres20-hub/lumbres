import { useState } from 'react'

function Certificates() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const certificates = [
    { title: 'NSTP Certificate of Completion', issuer: 'Jabez Camp Site, Cavite', desc: 'I received this certificate on May 6, 2023 at Jabez Camp Site, Dasmariñas, Cavite. I completed the National Service Training Program where I underwent leadership training, community service, and other activities that taught me discipline and responsibility as a citizen.' },
    { title: 'ISITE Conference Participation', issuer: 'Lyceum University', desc: 'I participated as an active participant in the 3rd ISITE Conference with the theme "Developing Industry Skills and Technological Advancement through Research". It was held at Lyceum of the Philippines University – Laguna on March 17, 2023. Here I learned new technologies and how to apply research in the information technology industry.' },
    { title: 'Freelance Web Development Certification', issuer: 'Online Course', desc: 'I took an online course for freelance web development and completed it with a certificate in 2025. Here I learned comprehensive web development using React.js, PHP, and MySQL. I was also taught how to start a freelancing career, how to communicate with clients, and how to deliver quality projects on time.' },
    { title: 'Strategic Management Advanced', issuer: 'Online Course', desc: 'I completed this comprehensive course that covers strategic planning, business analysis, and organizational leadership. This certificate was awarded to me on April 16, 2026. Here I learned how to plan strategy for business, analyze business operations, and lead an organization, skills that I can use in handling projects and dealing with clients.' }
  ]
  
  const openModal = (title, issuer, desc) => {
    setModalData({ title, desc: `${issuer}\n\n${desc}` })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="two-column-grid">
        {certificates.map((cert, i) => (
          <div key={i} className="flip-card-exp-medium animate-item" style={{ animationDelay: `${0.1 + i * 0.1}s` }} onClick={() => openModal(cert.title, cert.issuer, cert.desc)}>
            <div className="flip-card-exp-inner-medium">
              <div className="flip-card-exp-front-medium">
                <div className="card-icon-3d"><i className="fas fa-certificate"></i></div>
                <h4>{cert.title}</h4>
                <span>{cert.issuer}</span>
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

export default Certificates