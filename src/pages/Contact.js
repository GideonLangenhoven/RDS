import React, { useState } from 'react';
import '../styles/pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Partner with Us to Build a Stronger Culture</h1>
        <p className="page-intro">
          Ready to transform your team's potential? Fill out the form below, and our experts will connect with you within 24 hours to craft your ideal corporate culture event.
        </p>
        
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="eventType">Type of Team Event/Culture Initiative*</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select an event type</option>
                <option value="teambuilding-retreat">Team Building Retreat</option>
                <option value="corporate-culture-workshop">Corporate Culture Workshop</option>
                <option value="employee-engagement-day">Employee Engagement Day</option>
                <option value="leadership-development-program">Leadership Development Program</option>
                <option value="virtual-team-event">Virtual Team Event</option>
                <option value="other-culture-initiative">Other Culture Initiative</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Share Your Vision for Your Team's Culture & Motivation*</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Vision</button>
          </form>
          
          <div className="contact-info">
            <h3>Connect With Our Team</h3>
            <p>
              <strong>Email:</strong> info@rdsevents.co.za<br />
              <strong>Phone:</strong> +27 21 123 4567<br />
              <strong>Address:</strong> 123 Bree Street, Cape Town, 8001
            </p>
            
            <div className="business-hours">
              <h4>Operating Hours</h4>
              <p>
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            
            <div className="social-links">
              <h4>Follow Our Journey</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">IN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
