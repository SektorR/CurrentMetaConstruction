import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Current Meta Construction Services</h3>
            <p>
              Modern methods of construction specializing in timber frame builds,
              estimating, scheduling and consulting services across Australia.
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Timber Frame Construction</Link></li>
              <li><Link to="/services">Project Estimating</Link></li>
              <li><Link to="/services">Construction Scheduling</Link></li>
              <li><Link to="/services">Consulting Services</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 info@currentmetaconstruction.com.au</p>
              <p>📱 +61 (0) 8 1234 5678</p>
              <p>📍 Perth, WA</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Current Meta Construction Services. All rights reserved.
          </p>
          <p>
            Modern construction solutions with traditional craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;