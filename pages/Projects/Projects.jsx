import { useState } from 'react'

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '', link: '', icon: '', imageLink: '', isImage: false })
  
  const projects = [
    { 
      title: 'The Den Barbershop - Online Booking System', 
      desc: 'A complete barbershop appointment management system with step-by-step wizard booking, barber selection, service catalog, appointment tracking, customer management, and real-time revenue reporting. Features include gold premium theme, animated UI, glassmorphism effects, and responsive design. Built with React.js for modern barbershop operations.',
      link: 'https://denbarbershop.vercel.app/',
      icon: 'fas fa-cut',
      isImage: false
    },
    { 
      title: 'Coffee Shop Management System', 
      desc: 'A fully functional Point of Sale (POS) system for coffee shops. Features include order taking, cart management, payment processing with change calculator, inventory tracking, sales reports, and printable receipts. Built with React.js and modern CSS.',
      link: 'https://coffeshop-h9yx.vercel.app/',
      icon: 'fas fa-mug-hot',
      isImage: false
    },
    { 
      title: 'Shane - AI Language Translator', 
      desc: 'A powerful language translator application that supports 12+ languages including English, Tagalog, Spanish. Uses MyMemory API for accurate translations with real-time processing.',
      link: 'https://shane-sigma.vercel.app/',
      icon: 'fas fa-language',
      isImage: false
    },
    { 
      title: 'Design and Implementation of a Web Based Payroll and Attendance Management System', 
      desc: 'I made this web-based payroll and attendance management system for companies that want automated computation of employee salary based on their attendance. I used a biometric device to capture the employee time in and time out. I enabled automatic computation of regular salary, overtime, late deductions, and other adjustments. I made an admin dashboard where the employer can see payroll history, generate payslip, and create reports. I made the whole system using PHP, MySQL, and JavaScript.',
      link: '#',
      imageLink: 'https://drive.google.com/thumbnail?id=1cFIK7YdeN1WXmTFBhfc54Pau3p0Dh1rv&sz=w1920',
      icon: 'fas fa-money-bill',
      isImage: true
    },
    { 
      title: 'Development of Gymmate: A Real Time Gym Management System Using Mac Heap – Based Priority Queue', 
      desc: 'I made this web-based real time gym management system called Gymmate for gyms. I used Mac Heap – Based Priority Queue algorithm for equipment queue. I enabled the registration system for gym members where they can choose a workout plan and queue for equipment. I made the priority queue algorithm that determines who will use the equipment next. I made a real-time dashboard that shows who is currently using the equipment and who is next in line. I also added due date reminders for membership expiration. I made the system using PHP, MySQL, and JavaScript.',
      link: '',
      imageLink: 'https://drive.google.com/thumbnail?id=1-3IijWGyvEnhIxhjlF2fXEuZQlHN-NLO&sz=w1920',
      icon: 'fas fa-dumbbell',
      isImage: true
    },
    { 
      title: 'An Automated Food Inventory and Ordering Management System with Real-Time Stock Monitoring', 
      desc: 'I made this web-based automated food inventory and ordering management system for restaurants and food businesses. I enabled real-time stock monitoring where the owner can track all products in the kitchen or warehouse, how many arrived, how many were used, and how many are left. I added a low-stock alert that notifies when a product is about to run out. I also made automatic purchase order generation to order from the supplier the products that need to be restocked. I also added supplier management to track who is the supplier of each product. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-utensils',
      isImage: false
    },
    { 
      title: 'A Web-Based Library Management and Book Monitoring System for Trimex Colleges', 
      desc: 'I made this web-based library management and book monitoring system for Trimex Colleges. I enabled the online browsing system where students and teachers can browse books, see if a book is available or checked out, and borrow books online. I made digital borrowing logs where it is recorded who borrowed and when the book should be returned. I also enabled automatic fine computation for late returns. I made an admin dashboard for the librarian where they can add, edit, and delete books, and see borrowing history. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-book',
      isImage: false
    },
    { 
      title: 'E-Commerce Online Shopping Web Based System', 
      desc: 'I made this web-based e-commerce online shopping system for businesses that want to sell online. I enabled the product catalog where customers can browse products by category. I made a shopping cart system that shows the total amount and allows adding or removing products. I integrated a payment system (GCash, Credit Card, or Bank Transfer) for online payment. I made an order tracking system so the customer can know where their order is. I also added an admin dashboard for the seller where they can manage products, manage orders, and manage customer list. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-shopping-cart',
      isImage: false
    },
    { 
      title: 'Automated Registration and Referral Management System with Gmail Integration', 
      desc: 'The Automated Registration and Referral Management System that I made is a standalone desktop software for Trimex Colleges with Gmail Integration. In this system, students can register, manage their requirements (like PSA, Form 138, Form 137, Good Moral, etc.), and have a referral system where a person can refer a student. It has a dashboard that shows statistics using charts, how many are transferee, new student, referral, and submitted requirements. It also automatically sends email to students and referrers using Gmail API to notify them about the status of their registration and requirements. It also has a trash system where deleted records can be restored or permanently deleted, and admin password protection for sensitive actions like deleting and updating records. I made it using VB.NET for frontend, MySQL for database, and Gmail SMTP for automated email notifications.',
      link: '#',
      imageLink: 'https://drive.google.com/thumbnail?id=1nS87YrbLqw6GACmucPuddwa1R21Voh47&sz=w1920',
      icon: 'fas fa-envelope',
      isImage: true
    }
  ]
  
  const openModal = (title, desc, link, icon, imageLink, isImage) => {
    setModalData({ title, desc, link, icon, imageLink, isImage })
    setShowModal(true)
  }
  
  const openProjectLink = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank')
    } else {
      alert('Demo link coming soon! This project is currently under development.')
    }
  }
  
  return (
    <div className="page-wrapper">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="flip-card-3d-large animate-item" style={{ animationDelay: `${0.1 + i * 0.08}s` }} onClick={() => openModal(p.title, p.desc, p.link, p.icon, p.imageLink, p.isImage)}>
            <div className="flip-card-inner-large">
              <div className="flip-card-front-large">
                <i className={p.icon}></i>
                <h4>{p.title}</h4>
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
          <div className="modal-content-project" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-project">
              <i className={modalData.icon} style={{ fontSize: '1.2rem', color: '#1e90ff' }}></i>
              <h3>{modalData.title}</h3>
              <button className="modal-close-project" onClick={() => setShowModal(false)}>✕</button>
            </div>
            
            {modalData.isImage ? (
              <div className="preview-box">
                <div className="preview-label">📸 Project Screenshot</div>
                <div className="preview-frame-container">
                  <img 
                    src={modalData.imageLink} 
                    alt={modalData.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="preview-footer">
                  <span>✨ Gymmate System Interface ✨</span>
                </div>
              </div>
            ) : (
              modalData.link && modalData.link !== '#' && (
                <div className="preview-box" onClick={() => openProjectLink(modalData.link)}>
                  <div className="preview-label">🔗 Live Demo Preview - Click to Open</div>
                  <div className="preview-frame-container">
                    <iframe 
                      src={modalData.link} 
                      title={modalData.title}
                      className="preview-iframe"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                    />
                    <div className="preview-overlay-click">
                      <div className="click-hint">
                        <span>🔗 Click anywhere to open the full system</span>
                      </div>
                    </div>
                  </div>
                  <div className="preview-footer">
                    <span>✨ Click the preview above to open the live demo ✨</span>
                  </div>
                </div>
              )
            )}
            
            <div className="modal-desc-project">
              <p>{modalData.desc}</p>
            </div>
            
            <div className="modal-buttons-project">
              <button className="modal-close-btn-project" onClick={() => setShowModal(false)}>Close</button>
              {!modalData.isImage && (
                <button className="modal-demo-btn-project" onClick={() => openProjectLink(modalData.link)}>
                  🔗 Open Full Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects