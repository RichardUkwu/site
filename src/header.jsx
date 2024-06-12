import React from 'react';
const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url("assets/img.jpeg")` }}>
      <nav className="nav">
        <div className="menu-icon">
          <img src="assets/menu.png" alt="" />
        </div>
        <div className="nav-title">ZACH WILLIAMS</div>
      </nav>
      <div className="hero">
        <p>ZACH </p>
        <p>WILLIAMS</p>
      </div>
      <div className="contact-links">
          <a href="https://wa.me/+18034776172" target="_blank" rel="noopener noreferrer">
            <img src="assets/whatsapp.png" alt="WhatsApp" className="contact-icon" />
          </a>
          <a href="mailto:Management.zach.hq@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="assets/gmail.png" alt="Gmail" className="contact-icon" />
          </a>
        </div>
    </header>
  );
};
export default Header;
