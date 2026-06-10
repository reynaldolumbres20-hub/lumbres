import { useState } from 'react'

function Contact() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const contacts = [
    { title: 'Phone', icon: 'fas fa-phone-alt', value: '+63 970 550 8581', desc: 'Available for calls from 9AM - 6PM, Monday to Saturday.' },
    { title: 'Email', icon: 'fas fa-envelope', value: 'reynaldolumbres20@gmail.com', desc: 'Best way to reach me. I respond within 24 hours.' },
    { title: 'Facebook', icon: 'fab fa-facebook-f', value: 'Reynaldo_Lumbres@yahoo.com', desc: 'Connect with me on Facebook for quick updates.' },
    { title: 'Location', icon: 'fas fa-map-marker-alt', value: 'Santa Rosa, Laguna', desc: 'Available for on-site work in Laguna area.' }
  ]
  
  const openModal = (title, value, desc) => {
    setModalData({ title, desc: `${value}\n\n${desc}` })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="two-column-grid">
        {contacts.map((contact, i) => (
          <div key={i} className="flip-card-exp-medium animate-item" style={{ animationDelay: `${0.1 + i * 0.1}s` }} onClick={() => openModal(contact.title, contact.value, contact.desc)}>
            <div className="flip-card-exp-inner-medium">
              <div className="flip-card-exp-front-medium">
                <div className="card-icon-3d"><i className={contact.icon}></i></div>
                <h4>{contact.title}</h4>
                <p className="contact-value">{contact.value}</p>
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

export default Contact