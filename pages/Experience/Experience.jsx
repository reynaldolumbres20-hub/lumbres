import { useState } from 'react'

function Experience() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '' })
  
  const experiences = [
    { title: 'Freelance Web Developer & Graphic Designer', period: '2024 - Present', desc: 'In my freelance work, I create different systems for students like capstone and thesis projects. I also create management systems for small businesses. Aside from building systems, I also do graphic design like logos for companies, posters for events, and brochures for product or service promotion. I do this using PHP, MySQL, JavaScript for web development, and Canva or Photoshop for graphic design.' },
    { title: 'Jollibee Commercial Complex', period: '2022 - 2023', desc: 'As a service crew at Jollibee, I was part of the dining area team. My main job was to deliver customer orders to their tables. I made sure the order was correct and the food was still hot when it arrived at the customer. Aside from delivering orders, I also maintained the cleanliness of the dining area, I wiped the tables after the customer left, made sure there was no trash on the floor, and arranged the chairs for the next customer. I learned from this job the importance of fast service, having good customer relations, and being responsible in my work.' },
    { title: 'Chick N Juicy', period: '2023 - 2024', desc: 'At Chick N Juicy, I did many jobs. I was one of the cooks, I made sure the chicken was cooked right and tasty before serving to the customer. I also served food to customers, making sure their order was complete and the food was hot. I also became a cashier, I collected payment from customers, gave change, and balanced the money in the cash register at the end of the day. I also sold products like fried chicken and lechon manok. In this position, I learned the different aspects of running a food business, from cooking, serving, to handling money and customers.' }
  ]
  
  const openModal = (title, period, desc) => {
    setModalData({ title, desc: `${period}\n\n${desc}` })
    setShowModal(true)
  }
  
  return (
    <div className="page-wrapper">
      <div className="three-column-grid">
        {experiences.map((exp, i) => (
          <div key={i} className="flip-card-exp-large animate-item" style={{ animationDelay: `${0.1 + i * 0.1}s` }} onClick={() => openModal(exp.title, exp.period, exp.desc)}>
            <div className="flip-card-exp-inner-large">
              <div className="flip-card-exp-front-large">
                <div className="card-icon-3d"><i className="fas fa-briefcase"></i></div>
                <h4>{exp.title}</h4>
                <span>{exp.period}</span>
              </div>
              <div className="flip-card-exp-back-large">
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

export default Experience