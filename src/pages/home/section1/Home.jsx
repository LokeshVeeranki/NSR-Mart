import React from 'react';
import styles from './Home.module.css';
import { FiShoppingBag, FiArrowRight, FiTruck, FiCheckCircle } from 'react-icons/fi';

const Home1 = () => {
  return (
    <section className={styles.heroSection}>
      
      {/* Background Graphic Elements */}
      <div className={styles.bgBlob}></div>
      
      <div className={styles.container}>
        
        {/* LEFT: Text Content */}
        <div className={styles.content}>
          
          <div className={styles.saleBadge}>
            <span className={styles.pulse}></span>
            Weekend Mega Sale is Live!
          </div>

          <h1 className={styles.title}>
            Upgrade Your Life <br />
            With <span className={styles.highlight}>Premium Picks.</span>
          </h1>

          <p className={styles.description}>
            From latest gadgets to fresh groceries and trending fashion. 
            Experience the joy of quality shopping delivered to your doorstep 
            at unbeatable prices.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/shop" className={styles.primaryBtn}>
              Start Shopping <FiShoppingBag />
            </a>
            <a href="/deals" className={styles.secondaryBtn}>
              View Deals <FiArrowRight />
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <div className={styles.iconBox}><FiTruck /></div>
              <div className={styles.trustText}>
                <strong>Free Delivery</strong>
                <span>On orders over $50</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.iconBox}><FiCheckCircle /></div>
              <div className={styles.trustText}>
                <strong>100% Genuine</strong>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT: Visuals */}
        <div className={styles.visuals}>
          <div className={styles.imageWrapper}>
            {/* Main Hero Image: Shopping Concept */}
            <img 
              src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1000&auto=format&fit=crop" 
              alt="Happy shopper holding bags" 
              className={styles.mainImage} 
            />

            {/* Floating Product Cards (Glassmorphism) */}
            <div className={`${styles.floatCard} ${styles.card1}`}>
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop" 
                alt="Headphones" 
                className={styles.miniImg} 
              />
              <div className={styles.cardInfo}>
                <span>Wireless Audio</span>
                <strong>$199</strong>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.card2}`}>
              <div className={styles.discountBadge}>50% OFF</div>
              <div className={styles.cardInfo}>
                <span>Fresh Grocery</span>
                <strong>Combo Pack</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home1;