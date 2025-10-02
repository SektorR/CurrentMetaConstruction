import React from 'react';

const Services = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Current Meta Construction Services</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We provide comprehensive construction services utilizing modern methods
            and traditional craftsmanship to deliver exceptional results.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>🏗️ Timber Frame Construction</h3>
              <p>
                Expert timber frame construction using sustainable Australian timber.
                We specialize in residential and commercial timber framing with
                precise engineering and quality craftsmanship.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Residential timber framing</li>
                <li>Commercial timber structures</li>
                <li>Custom carpentry solutions</li>
                <li>Sustainable timber sourcing</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>📊 Project Estimating</h3>
              <p>
                Accurate cost estimation services to help you plan and budget
                your construction project effectively. Our detailed estimates
                include materials, labor, and project timelines.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Detailed cost breakdowns</li>
                <li>Material quantity calculations</li>
                <li>Labor cost analysis</li>
                <li>Timeline estimations</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>⏰ Construction Scheduling</h3>
              <p>
                Professional project scheduling and management to ensure your
                construction project stays on track and meets all deadlines
                while maintaining quality standards.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Critical path analysis</li>
                <li>Resource allocation</li>
                <li>Milestone tracking</li>
                <li>Progress monitoring</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>💼 Construction Consulting</h3>
              <p>
                Expert consulting services for all phases of your construction
                project. From initial planning to project completion, we provide
                professional guidance and support.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Project planning consultation</li>
                <li>Building code compliance</li>
                <li>Quality assurance</li>
                <li>Risk assessment</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>📈 Construction Analytics</h3>
              <p>
                Data-driven insights and analytics to optimize your construction
                processes, improve efficiency, and reduce costs through informed
                decision-making.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Performance metrics analysis</li>
                <li>Cost optimization strategies</li>
                <li>Efficiency reporting</li>
                <li>Predictive analytics</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>🛠️ Specialized Carpentry</h3>
              <p>
                Custom carpentry services for unique construction requirements.
                Our skilled craftsmen deliver precision work for both functional
                and decorative elements.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Custom millwork</li>
                <li>Architectural features</li>
                <li>Built-in solutions</li>
                <li>Restoration work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Modern Methods of Construction</h2>
          <div className="two-column">
            <div>
              <h3>Innovative Techniques</h3>
              <p>
                We employ the latest construction methodologies including prefabrication,
                modular construction, and advanced timber engineering to deliver
                superior results efficiently.
              </p>
              <p>
                Our commitment to modern methods ensures faster project delivery,
                improved quality control, and enhanced sustainability.
              </p>
            </div>
            <div>
              <h3>Technology Integration</h3>
              <p>
                We leverage cutting-edge technology including BIM modeling,
                project management software, and digital scheduling tools to
                streamline the construction process.
              </p>
              <p>
                This technology-driven approach allows for better coordination,
                reduced waste, and improved project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Contact us today for a consultation and detailed project estimate.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;