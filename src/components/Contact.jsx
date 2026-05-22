import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const [activeInput, setActiveInput] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name) => {
    setActiveInput((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name, value) => {
    if (value.trim() === '') {
      setActiveInput((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    // Simulate submission
    setTimeout(() => {
      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setActiveInput({ name: false, email: false, subject: false, message: false });
      
      // Auto clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Social Links & Info Info Card */}
          <div className="contact-info-card-wrapper">
            <div className="glass-card contact-info-card">
              <h3 className="card-headline">Let's collaborate on something awesome!</h3>
              <p className="card-subtext">
                Whether you're looking for an enthusiastic Computer Science intern, have questions about my projects, or just want to connect—feel free to reach out. I will get back to you as soon as possible!
              </p>

              <div className="info-channels">
                <a href="mailto:anish102anish@gmail.com" className="info-channel-item">
                  <div className="channel-icon-box cyan-glow">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Me</span>
                    <span className="channel-value">anish102anish@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/anish-r-54b11437b" target="_blank" rel="noreferrer" className="info-channel-item">
                  <div className="channel-icon-box indigo-glow">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Connect on LinkedIn</span>
                    <span className="channel-value">anish-r-54b11437b</span>
                  </div>
                </a>

                <a href="https://github.com/anishr102" target="_blank" rel="noreferrer" className="info-channel-item">
                  <div className="channel-icon-box violet-glow">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Follow on GitHub</span>
                    <span className="channel-value">github.com/anishr102</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="contact-form-card-wrapper">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              {formStatus.success && (
                <div className="form-alert success-alert">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Message sent successfully! Thank you, I will respond soon.</span>
                </div>
              )}

              <div className={`form-group ${activeInput.name || formData.name ? 'active' : ''}`}>
                <label htmlFor="name" className="floating-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  required
                  className="form-input"
                />
                <span className="input-focus-line"></span>
              </div>

              <div className={`form-group ${activeInput.email || formData.email ? 'active' : ''}`}>
                <label htmlFor="email" className="floating-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  required
                  className="form-input"
                />
                <span className="input-focus-line"></span>
              </div>

              <div className={`form-group ${activeInput.subject || formData.subject ? 'active' : ''}`}>
                <label htmlFor="subject" className="floating-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={(e) => handleBlur('subject', e.target.value)}
                  required
                  className="form-input"
                />
                <span className="input-focus-line"></span>
              </div>

              <div className={`form-group text-group ${activeInput.message || formData.message ? 'active' : ''}`}>
                <label htmlFor="message" className="floating-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  required
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
                <span className="input-focus-line"></span>
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="btn btn-primary btn-submit"
              >
                {formStatus.submitting ? (
                  <>Sending... <i className="fa-solid fa-spinner fa-spin"></i></>
                ) : (
                  <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
