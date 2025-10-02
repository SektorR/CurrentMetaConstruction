import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              Current Meta<br />
              Construction Services
            </h1>
            <p>
              Western Australian Specialists in Modern Timber Frame Construction Methods.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/services" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Current Meta Construction Services?</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🏗️ Modern Methods</h3>
              <p>
                We utilize cutting-edge construction techniques and technologies
                to deliver efficient, sustainable building solutions.
              </p>
            </div>
            <div className="service-card">
              <h3>🌲 Timber Expertise</h3>
              <p>
                Specialized in timber frame construction with deep knowledge
                of Australian timber species and building codes.
              </p>
            </div>
            <div className="service-card">
              <h3>📊 Analytics Driven</h3>
              <p>
                Data-driven approach to construction planning, scheduling,
                and project management for optimal outcomes.
              </p>
            </div>
            <div className="service-card">
              <h3>🎯 Precision Estimating</h3>
              <p>
                Accurate cost estimation and project scheduling to keep
                your build on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="two-column">
            <div>
              <h2>Expert Construction Consulting</h2>
              <p>
                With years of experience in the Australian construction industry,
                we provide comprehensive consulting services for residential and
                commercial projects.
              </p>
              <p>
                Our team combines traditional craftsmanship with modern technology
                to deliver exceptional results that stand the test of time.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div>
              <div className="service-card">
                <h3>Our Specialties</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    ✓ Timber Frame Construction
                  </li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    ✓ Project Cost Estimation
                  </li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    ✓ Construction Scheduling
                  </li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    ✓ Building Code Compliance
                  </li>
                  <li style={{ padding: '0.5rem 0' }}>
                    ✓ Project Management Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;