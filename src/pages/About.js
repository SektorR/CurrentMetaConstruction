import React from 'react';

const About = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Current Meta Construction Services</h1>

          <div className="two-column">
            <div>
              <h2>Our Story</h2>
              <p>
                Current Meta Construction Services was founded with a vision to revolutionize
                the construction industry by combining traditional craftsmanship with
                modern construction methods and cutting-edge technology.
              </p>
              <p>
                With decades of combined experience in the construction industry,
                our team brings expertise in timber frame construction, project management,
                and innovative building solutions.
              </p>
              <p>
                We specialize in sustainable construction practices, utilizing quality
                timber and modern construction techniques to deliver projects that are
                both environmentally responsible and built to last.
              </p>
            </div>
            <div>
              <div className="service-card">
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional construction services that exceed client
                  expectations while promoting sustainable building practices and
                  supporting the Australian construction industry.
                </p>
                <h4 style={{ marginTop: '1.5rem' }}>Core Values</h4>
                <ul style={{ marginTop: '0.5rem' }}>
                  <li>Quality craftsmanship</li>
                  <li>Sustainable practices</li>
                  <li>Innovation and technology</li>
                  <li>Client satisfaction</li>
                  <li>Safety and compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🌲 Timber Frame Specialists</h3>
              <p>
                Extensive experience in timber frame construction using sustainable
                Australian hardwoods and engineered timber products. We understand
                the unique properties of different timber species and their optimal
                applications in construction.
              </p>
            </div>
            <div className="service-card">
              <h3>📊 Analytics & Data</h3>
              <p>
                We leverage construction analytics and data-driven insights to
                optimize project performance, reduce costs, and improve delivery
                timelines. Our analytical approach ensures informed decision-making
                throughout the construction process.
              </p>
            </div>
            <div className="service-card">
              <h3>🔧 Modern Methods</h3>
              <p>
                Pioneers in implementing modern methods of construction including
                off-site manufacturing, modular construction, and digital design
                technologies that improve efficiency and reduce environmental impact.
              </p>
            </div>
            <div className="service-card">
              <h3>📋 Project Management</h3>
              <p>
                Comprehensive project management services including detailed
                estimating, scheduling, and consulting. We ensure projects are
                delivered on time, within budget, and to the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="two-column">
            <div>
              <h3>Experience & Expertise</h3>
              <p>
                Our team brings together decades of experience in Australian
                construction, combining traditional building knowledge with
                innovative modern techniques.
              </p>

              <h3>Quality Assurance</h3>
              <p>
                We maintain the highest standards of quality through rigorous
                quality control processes, regular inspections, and adherence
                to Australian building codes and standards.
              </p>

              <h3>Sustainable Practices</h3>
              <p>
                Committed to environmental responsibility through sustainable
                material sourcing, waste reduction, and energy-efficient
                construction methods.
              </p>
            </div>
            <div>
              <h3>Technology Integration</h3>
              <p>
                We utilize the latest construction technology including Building
                Information Modeling (BIM), project management software, and
                digital collaboration tools for superior project delivery.
              </p>

              <h3>Client-Focused Approach</h3>
              <p>
                Every project is tailored to meet specific client requirements
                with clear communication, transparent pricing, and dedicated
                project support throughout the construction process.
              </p>

              <h3>Local Knowledge</h3>
              <p>
                Deep understanding of Australian building regulations, climate
                considerations, and local material availability ensures projects
                are perfectly suited to Australian conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Work with Us?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Let's discuss your construction project and how our expertise in modern
            construction methods can bring your vision to life.
          </p>
          <div>
            <a href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Contact Us Today
            </a>
            <a href="/services" className="btn btn-outline">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;