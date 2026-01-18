import React, { useState } from 'react';
import styles from './Support.module.css';
import { FiPhone, FiMail, FiMessageSquare, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

const Support3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Issue',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent to our support team!");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>Contact Us</span>
          <h2 className={styles.title}>Still need <span className={styles.accent}>Help?</span></h2>
          <p className={styles.desc}>
            We are here to assist you. Choose a method below or fill out the form, 
            and we'll get back to you within 2 hours.
          </p>
        </div>

        <div className={styles.wrapper}>
          
          {/* LEFT: Contact Information */}
          <div className={styles.contactInfo}>
            
            <div className={styles.infoCard}>
              <div className={styles.iconBox}><FiPhone /></div>
              <div>
                <h3>Call Us</h3>
                <p>Speak to a specialist 24/7.</p>
                <a href="tel:+18001234567" className={styles.link}>+1-800-NSN-MART</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}><FiMail /></div>
              <div>
                <h3>Email Us</h3>
                <p>For general queries & bulk orders.</p>
                <a href="mailto:support@nsnmart.com" className={styles.link}>support@nsnmart.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}><FiMessageSquare /></div>
              <div>
                <h3>Live Chat</h3>
                <p>Average wait time: 2 mins.</p>
                <button className={styles.chatBtn}>Start Chat</button>
              </div>
            </div>

            {/* Office Info Box */}
            <div className={styles.officeBox}>
              <div className={styles.officeHeader}>
                <FiMapPin /> <span>Headquarters</span>
              </div>
              <p className={styles.address}>
                123 Market Street, Suite 400<br />
                San Francisco, CA 94105
              </p>
              <div className={styles.hours}>
                <FiClock /> <span>Mon - Fri: 9AM - 6PM PST</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                >
                  <option>Order Issue</option>
                  <option>Payment & Refund</option>
                  <option>Product Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Describe your issue..." 
                  rows="5"
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <FiSend />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support3;