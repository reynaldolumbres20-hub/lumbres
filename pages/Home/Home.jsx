function Home() {
  const facebookUrl = "https://web.facebook.com/joy.ormita.96"
  
  return (
    <div className="page-wrapper">
      <div className="premium-home-card animate-item animate-delay-1">
        <div className="hero-split-container">
          {/* LEFT SIDE - Facebook Card */}
          <div className="hero-left">
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
                <p>Web Developer | Software Developer</p>
                <div className="facebook-stats">
                  <span><i className="fas fa-trophy"></i> Challenges Accepted</span>
                  <span><i className="fas fa-heart"></i> Happy Worker</span>
                </div>
                <button className="visit-fb-home-btn">
                  <i className="fab fa-facebook-f"></i> Visit My Facebook
                </button>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - Name, Roles, Quote */}
          <div className="hero-right">
            <h1 className="hero-name"><span className="hero-highlight"></span>"New Era Code"</h1>
            <div className="hero-roles-container">
              <span className="hero-role-item">Hardworking</span>
              <span className="hero-role-item">Problem Solver</span>
              <span className="hero-role-item">Positive Thinker</span>
            </div>
            <div className="hero-quote-split">
              "I believe in giving my best in everything I do. The harder the challenge, the more motivated I become. There's no greater joy than finishing what I started and learning something new along the way."
            </div>
          </div>
        </div>
        <div className="card-divider"></div>
        <div className="objective-inside">
          <h3 className="objective-title"></h3>
          <p className="objective-text">
            <strong>Web and Software Developer</strong> who builds web-based systems using PHP, MySQL, JavaScript, and React for Payroll, Gym, Inventory, Library, E-Commerce, Online Booking, and Billing System, as well as standalone desktop software using C#, VB.NET, and MySQL for Registration with Gmail Integration, POS, and Inventory. Knows how to create complete thesis documentation from Chapter 1 to Chapter 5, including system architecture, flowcharts, algorithms, pseudocode, and unlimited revisions. Also proficient in graphic design and websites.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home