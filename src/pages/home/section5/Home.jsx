import React from 'react';
import styles from './Home.module.css';
import { FiCheckCircle, FiSmartphone, FiBell, FiMapPin } from 'react-icons/fi';
// Using FontAwesome for store icons (simulated with text/simple icons if package not available, 
// but here using generic placeholders or images is common. I will use SVG paths or text for "App Store").

const Home5 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left: Text Content */}
        <div className={styles.content}>
          <span className={styles.badge}>
            <FiSmartphone /> Mobile Exclusive
          </span>
          
          <h2 className={styles.title}>
            Shop Smarter with the <br />
            <span className={styles.accent}>NSN-Mart App</span>
          </h2>
          
          <p className={styles.description}>
            Get the full mart experience in your pocket. Unlock exclusive app-only deals, 
            track your orders in real-time, and get personalized recommendations.
          </p>

          <ul className={styles.featureList}>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span><strong>Instant Notifications</strong> on price drops</span>
            </li>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span><strong>Live Tracking</strong> for all deliveries</span>
            </li>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span><strong>App-Only Coupons</strong> worth $50+</span>
            </li>
          </ul>

          <div className={styles.storeButtons}>
            {/* Apple Store Button */}
            <button className={styles.storeBtn}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" 
                alt="Apple" 
                className={styles.storeLogo} 
              />
              <div className={styles.btnText}>
                <span className={styles.smallText}>Download on the</span>
                <span className={styles.bigText}>App Store</span>
              </div>
            </button>

            {/* Google Play Button */}
            <button className={`${styles.storeBtn} ${styles.googleBtn}`}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" 
                alt="Android" 
                className={styles.storeLogo} 
              />
              <div className={styles.btnText}>
                <span className={styles.smallText}>GET IT ON</span>
                <span className={styles.bigText}>Google Play</span>
              </div>
            </button>
          </div>

          <div className={styles.ratingBox}>
            <div className={styles.avatars}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
              <span className={styles.moreUser}>+2k</span>
            </div>
            <div className={styles.ratingText}>
              <strong>4.8/5 Rating</strong>
              <span>on App Store</span>
            </div>
          </div>
        </div>

        {/* Right: Phone Mockup Visuals */}
        <div className={styles.visuals}>
          <div className={styles.circleBg}></div>
          
          <div className={styles.phoneWrapper}>
            <img 
              src="https://play-lh.googleusercontent.com/n-J7iYEZu0yTxOq_WDacb8XlAxhkG2iZHd-kxA4qkKqBZ9KFlo0VGpKqTunIhI72MA=w526-h296-rw" 
              alt="NSN Mart App Interface" 
              className={styles.phoneMockup} 
            />

            {/* Floating Widgets */}
            <div className={`${styles.widget} ${styles.widget1}`}>
              <FiBell className={styles.widgetIcon} />
              <div>
                <strong>Order Shipped!</strong>
                <span>Arriving by 2 PM</span>
              </div>
            </div>

            <div className={`${styles.widget} ${styles.widget2}`}>
              <FiMapPin className={styles.widgetIcon2} />
              <div>
                <strong>Live Tracking</strong>
                <span>Driver is nearby</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home5;