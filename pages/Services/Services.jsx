import { useState } from 'react'

function Services() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const services = [
    { title: 'Web Development', icon: 'fas fa-globe', desc: 'I create different management systems for businesses like inventory system for products, car rental system for rent vehicles, shop management system with POS, office system for employees, hotel and restaurant system for booking and billing, coffee shop system for order taking and inventory of coffee and ingredients, barber shop management system for appointment booking and customer queue, and school system for enrollment and grades. I have also made Gym, Food Inventory, Library, and Payroll System.' },
    { title: 'Thesis / Capstone Documentation', icon: 'fas fa-file-alt', desc: 'I create thesis from Chapter 1 to 5, including introduction, related literature, methodology, results with screenshots, and conclusion. I make all the diagrams you need: System Architecture Diagram, Use Case Diagram, DFD Level 0,1,2, UML Diagrams, ER Diagram, Flowchart, Algorithm and Pseudocode. I offer unlimited revision. I also make your document defense-ready with sample Q&A.' },
    { title: 'Graphic Design', icon: 'fas fa-palette', desc: 'I create logos for businesses, posters for events, brochures and flyers for promotions, business cards, social media graphics, tarpaulin, menus for restaurants, invitation cards, certificate templates, ID cards, and product packaging. I have made many logos for small businesses, event posters, and brochures.' },
    { title: 'Mobile App Development', icon: 'fas fa-mobile-alt', desc: 'I create mobile apps for Android using React Native. I can make e-commerce app with shopping cart and payment, booking app for hotels or services, school app for grades and announcements, business app for inventory and sales tracking, and attendance app using QR code.' },
    { title: 'Website Design and Development', icon: 'fas fa-laptop-code', desc: 'I create complete websites from start to launch. I can make company website with about us and services, e-commerce website with online payment, portfolio website, blog website, and landing page for product launch.' },
    { title: 'System Maintenance and Support', icon: 'fas fa-headset', desc: 'I do not disappear after I finish your system. I take care of it, I fix bugs, update it to work with new browser versions, add new features, backup the database so your data does not get lost, and answer your questions even after the project is done.' }
  ]
  
  const openModal = (title, desc) => {
    setModalData({ title, desc })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="flip-card-3d-large animate-item" style={{ animationDelay: `${0.1 + i * 0.08}s` }} onClick={() => openModal(s.title, s.desc)}>
            <div className="flip-card-inner-large">
              <div className="flip-card-front-large">
                <i className={s.icon}></i>
                <h4>{s.title}</h4>
              </div>
              <div className="flip-card-back-large">
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

export default Services