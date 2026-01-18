import React from 'react';
import styles from './AboutUs.module.css';
import { FiTarget, FiUsers, FiAward, FiArrowDown } from 'react-icons/fi';

const AboutUs1 = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.contentColumn}>
          <span className={styles.preTitle}>Who We Are</span>
          <h1 className={styles.title}>
            Redefining Retail for the <br />
            <span className={styles.highlight}>Modern Era.</span>
          </h1>
          
          <p className={styles.description}>
            NSN-Mart started with a simple idea: <strong>Quality shouldn't be a luxury.</strong> 
            From our humble beginnings as a local grocery supplier to becoming a nationwide 
            e-commerce destination, our mission has remained unchanged — delivering 
            happiness to your doorstep, one package at a time.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <strong className={styles.statNumber}>50k+</strong>
              <span className={styles.statLabel}>Products</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <strong className={styles.statNumber}>1.2M</strong>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <strong className={styles.statNumber}>15+</strong>
              <span className={styles.statLabel}>Cities Covered</span>
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className={styles.imageColumn}>
          <div className={styles.imageGrid}>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
              alt="Fresh Groceries" 
              className={`${styles.gridImg} ${styles.imgTop}`} 
            />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
              alt="Happy Team" 
              className={`${styles.gridImg} ${styles.imgBottom}`} 
            />
            
            {/* Floating Badge */}
            <div className={styles.floatingBadge}>
              <div className={styles.badgeIcon}><FiAward /></div>
              <div className={styles.badgeText}>
                <strong>#1 Retailer</strong>
                <span>Choice Awards 2024</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Values Strip (Bottom of Hero) */}
      <div className={styles.valuesStrip}>
        <div className={styles.valueItem}>
          <FiTarget className={styles.valueIcon} />
          <div>
            <h4>Our Mission</h4>
            <p>To simplify daily shopping.</p>
          </div>
        </div>
        <div className={styles.valueItem}>
          <FiUsers className={styles.valueIcon} />
          <div>
            <h4>Community First</h4>
            <p>Empowering local sellers.</p>
          </div>
        </div>
        
        <div className={styles.scrollHint}>
          <span>Our Journey</span>
          <FiArrowDown className={styles.bounce} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;