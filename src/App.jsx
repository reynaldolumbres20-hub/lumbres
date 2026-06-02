import { useState } from 'react'

function Gate({ onEnter }) {
  return (
    <div className="gate-overlay">
      <div className="gate-container">
        <h1 className="gate-title">REYNALDO <span>LUMBRES</span></h1>
        <p className="gate-subtitle">PROVERBS 21:5</p>
        <p className="gate-subtitle"> Code. Create. Conquer. Repeat.</p>
        <button onClick={onEnter} className="gate-btn">ENTER PORTFOLIO</button>
      </div>
    </div>
  )
}

function Navbar({ page, setPage }) {
  const pages = ['Home', 'Services', 'Projects', 'Skills', 'Experience', 'Education', 'Certificates', 'Contact']
  return (
    <div className="navbar">
      {pages.map(p => (
        <div key={p} onClick={() => setPage(p)} className={`nav-item ${page === p ? 'active' : ''}`}>
          {p}
        </div>
      ))}
    </div>
  )
}

function Home() {
  const facebookUrl = "https://web.facebook.com/joy.ormita.96"
  
  const myPhotos = []
  
  return (
    <div className="page-wrapper">
      <div className="premium-home-card animate-item animate-delay-1">
        <div className="hero-split-container">
          <div className="hero-left">
            <h1 className="hero-name">Reynaldo <span className="hero-highlight"> Lumbres</span></h1>
            <div className="hero-roles-container">
              <span className="hero-role-item">Web Developer</span>
              <span className="hero-role-sep">◆</span>
              <span className="hero-role-item">Graphic Designer</span>
              <span className="hero-role-sep">◆</span>
              <span className="hero-role-item">IT Graduate</span>
            </div>
            <div className="hero-quote-split">
              "Took a tres, why can't I resist you? Pa automate kana, ano tara!"
            </div>
          </div>
          <div className="hero-right">
            <div className="facebook-card-home" onClick={() => window.open(facebookUrl, '_blank')}>
              <div className="facebook-card-inner-home">
                <div className="facebook-avatar-home">
                  <img 
                    src="https://graph.facebook.com/100063771798194/picture?type=large&width=150&height=150" 
                    alt="Reynaldo Lumbres" 
                  />
                  <div className="facebook-overlay-home">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </div>
                <h3>Reynaldo Lumbres</h3>
                <p>Web Developer | Graphic Designer</p>
                <div className="facebook-stats">
                  <span><i className="fas fa-users"></i> Friends</span>
                  <span><i className="fas fa-thumbs-up"></i> Likes</span>
                </div>
                <button className="visit-fb-home-btn">
                  <i className="fab fa-facebook-f"></i> Visit My Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-divider"></div>
        <div className="objective-inside">
          <h3 className="objective-title">Professional Objective</h3>
          <p className="objective-text">
            <strong>Web & Software Developer</strong> specializing in web-based systems (PHP, MySQL, JS) for Payroll, Gym, Inventory, Library, and E-Commerce, and standalone desktop software (C#, VB.NET, MySQL) for Registration with Gmail Integration, POS, and Inventory. Proficient in complete thesis documentation (Chapter 1-5 with all diagrams) unlimited revision. Skilled in graphic design, mobile apps (React Native), and websites. A music enthusiast who never gives up until success is achieved. Provides post-project maintenance, bug fixes, updates, and database backup.
          </p>
        </div>
      </div>
    </div>
  )
}

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

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: '', desc: '', link: '', icon: '' })
  
  const projects = [
    { 
      title: 'The Den Barbershop - Premium Booking System', 
      desc: 'A complete barbershop appointment management system with step-by-step wizard booking, barber selection, service catalog, appointment tracking, customer management, and real-time revenue reporting. Features include gold premium theme, animated UI, glassmorphism effects, and responsive design. Built with React.js for modern barbershop operations.',
      link: 'https://denbarbershop.vercel.app/',
      icon: 'fas fa-cut'
    },
    { 
      title: 'Coffee Shop Management System', 
      desc: 'A fully functional Point of Sale (POS) system for coffee shops. Features include order taking, cart management, payment processing with change calculator, inventory tracking, sales reports, and printable receipts. Built with React.js and modern CSS.',
      link: 'https://coffeshop-h9yx.vercel.app/',
      icon: 'fas fa-mug-hot'
    },
    { 
      title: 'Shane - AI Language Translator', 
      desc: 'A powerful language translator application that supports 12+ languages including English, Tagalog, Spanish, Japanese, Korean, Chinese, and more. Uses MyMemory API for accurate translations with real-time processing.',
      link: 'https://shane-sigma.vercel.app/',
      icon: 'fas fa-language'
    },
    { 
      title: 'Design and Implementation of a Web Based Payroll and Attendance Management System', 
      desc: 'I made this web-based payroll and attendance management system for companies that want automated computation of employee salary based on their attendance. I used a biometric device to capture the employee time in and time out. I enabled automatic computation of regular salary, overtime, late deductions, and other adjustments. I made an admin dashboard where the employer can see payroll history, generate payslip, and create reports. I made the whole system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-money-bill'
    },
    { 
      title: 'Development of Gymmate: A Real Time Gym Management System Using Mac Heap – Based Priority Queue', 
      desc: 'I made this web-based real time gym management system called Gymmate for gyms. I used Mac Heap – Based Priority Queue algorithm for equipment queue. I enabled the registration system for gym members where they can choose a workout plan and queue for equipment. I made the priority queue algorithm that determines who will use the equipment next. I made a real-time dashboard that shows who is currently using the equipment and who is next in line. I also added due date reminders for membership expiration. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-dumbbell'
    },
    { 
      title: 'An Automated Food Inventory and Ordering Management System with Real-Time Stock Monitoring', 
      desc: 'I made this web-based automated food inventory and ordering management system for restaurants and food businesses. I enabled real-time stock monitoring where the owner can track all products in the kitchen or warehouse, how many arrived, how many were used, and how many are left. I added a low-stock alert that notifies when a product is about to run out. I also made automatic purchase order generation to order from the supplier the products that need to be restocked. I also added supplier management to track who is the supplier of each product. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-utensils'
    },
    { 
      title: 'A Web-Based Library Management and Book Monitoring System for Trimex Colleges', 
      desc: 'I made this web-based library management and book monitoring system for Trimex Colleges. I enabled the online browsing system where students and teachers can browse books, see if a book is available or checked out, and borrow books online. I made digital borrowing logs where it is recorded who borrowed and when the book should be returned. I also enabled automatic fine computation for late returns. I made an admin dashboard for the librarian where they can add, edit, and delete books, and see borrowing history. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-book'
    },
    { 
      title: 'E-Commerce Online Shopping Web Based System', 
      desc: 'I made this web-based e-commerce online shopping system for businesses that want to sell online. I enabled the product catalog where customers can browse products by category. I made a shopping cart system that shows the total amount and allows adding or removing products. I integrated a payment system (GCash, Credit Card, or Bank Transfer) for online payment. I made an order tracking system so the customer can know where their order is. I also added an admin dashboard for the seller where they can manage products, manage orders, and manage customer list. I made the system using PHP, MySQL, and JavaScript.',
      link: '#',
      icon: 'fas fa-shopping-cart'
    },
    { 
      title: 'Automated Registration and Referral Management System with Gmail Integration', 
      desc: 'The Automated Registration and Referral Management System that I made is a standalone desktop software for Trimex Colleges with Gmail Integration. In this system, students can register, manage their requirements (like PSA, Form 138, Form 137, Good Moral, etc.), and have a referral system where a person can refer a student. It has a dashboard that shows statistics using charts, how many are transferee, new student, referral, and submitted requirements. It also automatically sends email to students and referrers using Gmail API to notify them about the status of their registration and requirements. It also has a trash system where deleted records can be restored or permanently deleted, and admin password protection for sensitive actions like deleting and updating records. I made it using VB.NET for frontend, MySQL for database, and Gmail SMTP for automated email notifications.',
      link: '#',
      icon: 'fas fa-envelope'
    }
  ]
  
  const openModal = (title, desc, link, icon) => {
    setModalData({ title, desc, link, icon })
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
          <div key={i} className="flip-card-3d-large animate-item" style={{ animationDelay: `${0.1 + i * 0.08}s` }} onClick={() => openModal(p.title, p.desc, p.link, p.icon)}>
            <div className="flip-card-inner-large">
              <div className="flip-card-front-large">
                <i className={p.icon} style={{ fontSize: '2.5rem', color: '#1e90ff', marginBottom: '0.8rem' }}></i>
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
              <i className={modalData.icon} style={{ fontSize: '2rem', color: '#1e90ff' }}></i>
              <h3>{modalData.title}</h3>
              <button className="modal-close-project" onClick={() => setShowModal(false)}>✕</button>
            </div>
            
            {modalData.link && modalData.link !== '#' && (
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
            )}
            
            <div className="modal-desc-project">
              <p>{modalData.desc}</p>
            </div>
            
            <div className="modal-buttons-project">
              <button className="modal-close-btn-project" onClick={() => setShowModal(false)}>Close</button>
              <button className="modal-demo-btn-project" onClick={() => openProjectLink(modalData.link)}>
                🔗 Open Full Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

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

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')

  const handlePageChange = (page) => {
    if (page === currentPage) return
    setCurrentPage(page)
  }

  if (!showPortfolio) {
    return <Gate onEnter={() => setShowPortfolio(true)} />
  }

  const pages = {
    'Home': <Home />,
    'Services': <Services />,
    'Projects': <Projects />,
    'Skills': <Skills />,
    'Experience': <Experience />,
    'Education': <Education />,
    'Certificates': <Certificates />,
    'Contact': <Contact />
  }

  return (
    <div>
      <div className="bg-animation-3d">
        <div className="particle-3d particle-1-3d"></div>
        <div className="particle-3d particle-2-3d"></div>
        <div className="particle-3d particle-3-3d"></div>
        <div className="particle-3d particle-4-3d"></div>
        <div className="particle-3d particle-5-3d"></div>
      </div>
      
      <div className="unified-container">
        <div className="main-glass-card-3d">
          <Navbar page={currentPage} setPage={handlePageChange} />
          <div className="content-3d">
            {pages[currentPage]}
            <div className="footer-3d">© 2025 Reynaldo Lumbres — Sa tahanan ng mga malalakas ako ang pinakamalakas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
