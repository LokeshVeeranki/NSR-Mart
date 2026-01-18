import React, { useState } from 'react';
import styles from './Footer.module.css';
import { 
  FiInstagram, FiFacebook, FiTwitter, FiYoutube, 
  FiArrowRight, FiMail, FiMapPin, FiPhone, FiCreditCard, FiHelpCircle 
} from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing to NSN-Mart updates!");
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      
      {/* Top Section: Newsletter & Support */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.topGrid}>
            
            {/* Newsletter */}
            <div className={styles.newsContent}>
              <div className={styles.newsText}>
                <h3 className={styles.newsTitle}>Subscribe & Save</h3>
                <p className={styles.newsDesc}>
                  Get <span className={styles.highlight}>10% off</span> your first order and exclusive deals.
                </p>
              </div>
              <form onSubmit={handleSubmit} className={styles.newsForm}>
                <div className={styles.inputWrapper}>
                  <FiMail className={styles.inputIcon} />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.subBtn}>
                  Subscribe <FiArrowRight />
                </button>
              </form>
            </div>

            {/* Support Box */}
            <div className={styles.supportBox}>
              <FiHelpCircle className={styles.supportIcon} />
              <div>
                <span className={styles.supportLabel}>24/7 Support</span>
                <span className={styles.supportNumber}>1-800-NSN-MART</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Column 1: Brand Info */}
            <div className={styles.colBrand}>
              <div className={styles.logoContainer}>
                <span className={styles.logoText}>NSN<span className={styles.logoAccent}>-Mart</span></span>
              </div>
              <p className={styles.brandBio}>
                Your one-stop destination for premium electronics, fresh groceries, and trendy fashion. 
                Quality delivered to your doorstep daily.
              </p>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
                <a href="#" aria-label="YouTube"><FiYoutube /></a>
              </div>
            </div>

            {/* Column 2: Shopping */}
            <div className={styles.colLinks}>
              <h4 className={styles.colTitle}>Shop Categories</h4>
              <ul>
                <li><a href="#">Electronics & Gadgets</a></li>
                <li><a href="#">Men's Fashion</a></li>
                <li><a href="#">Women's Fashion</a></li>
                <li><a href="#">Home & Kitchen</a></li>
                <li><a href="#">Groceries & Essentials</a></li>
              </ul>
            </div>

            {/* Column 3: Customer Care */}
            <div className={styles.colLinks}>
              <h4 className={styles.colTitle}>Customer Care</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">Returns & Refunds</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className={styles.colContact}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul>
                <li>
                  <FiMapPin className={styles.icon} />
                  <span>123 Market Street, Tech Park,<br/>San Francisco, CA 94105</span>
                </li>
                <li>
                  <FiPhone className={styles.icon} />
                  <a href="tel:+18001234567">1-800-123-4567</a>
                </li>
                <li>
                  <FiMail className={styles.icon} />
                  <a href="mailto:support@nsnmart.com">support@nsnmart.com</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p>&copy; {new Date().getFullYear()} NSN-Mart Inc. All rights reserved.</p>
            
            <div className={styles.paymentMethods}>
              <span className={styles.paymentIcon}><FiCreditCard /> Visa</span>
              <span className={styles.paymentIcon}><FiCreditCard /> MasterCard</span>
              <span className={styles.paymentIcon}><FiCreditCard /> PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;