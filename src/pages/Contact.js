import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Current Meta Construction Services</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Ready to start your construction project? Get in touch with our team
            for a consultation and detailed estimate.
          </p>

          <div className="two-column">
            <div>
              <h2>Get Your Free Quote</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="timber-frame">Timber Frame Construction</option>
                    <option value="estimating">Project Estimating</option>
                    <option value="scheduling">Construction Scheduling</option>
                    <option value="consulting">Construction Consulting</option>
                    <option value="analytics">Construction Analytics</option>
                    <option value="carpentry">Specialized Carpentry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Inquiry
                </button>
              </form>
            </div>

            <div>
              <div className="service-card">
                <h3>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>📧 Email:</strong><br />
                    info@currentmetaconstruction.com.au
                  </div>
                  <div>
                    <strong>📱 Phone:</strong><br />
                    +61 (0) 8 1234 5678
                  </div>
                  <div>
                    <strong>📍 Location:</strong><br />
                    Perth, Western Australia<br />
                    Australia
                  </div>
                  <div>
                    <strong>🕒 Business Hours:</strong><br />
                    Monday - Friday: 7:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <div className="service-card" style={{ marginTop: '2rem' }}>
                <h3>Service Areas</h3>
                <p>
                  We provide construction services throughout Western Australia,
                  with primary focus on the Greater Perth region.
                </p>
                <ul style={{ marginTop: '1rem' }}>
                  <li>Greater Perth Metropolitan Area</li>
                  <li>Mandurah & Peel Region</li>
                  <li>South West (Bunbury, Margaret River)</li>
                  <li>Wheatbelt Region</li>
                  <li>Perth Hills</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--primary-medium)' }}>
                  For projects outside these areas, please contact us to discuss
                  availability and travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Contact Us?</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🎯 Free Consultation</h3>
              <p>
                Initial consultation and project assessment at no cost.
                We'll discuss your requirements and provide expert advice.
              </p>
            </div>
            <div className="service-card">
              <h3>📋 Detailed Estimates</h3>
              <p>
                Comprehensive project estimates including materials, labor,
                timeline, and all associated costs with transparent pricing.
              </p>
            </div>
            <div className="service-card">
              <h3>⚡ Quick Response</h3>
              <p>
                We respond to all inquiries within 24 hours and can often
                provide initial assessments within 48 hours.
              </p>
            </div>
            <div className="service-card">
              <h3>🤝 Personalized Service</h3>
              <p>
                Every project is unique. We tailor our services to meet your
                specific needs, budget, and timeline requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;