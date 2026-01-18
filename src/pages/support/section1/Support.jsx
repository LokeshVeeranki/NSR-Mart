import React from 'react';
import styles from './Support.module.css';
import { FiSearch, FiPackage, FiRefreshCw, FiCreditCard, FiUser, FiArrowRight } from 'react-icons/fi';

const Support1 = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Header & Search */}
        <div className={styles.content}>
          <span className={styles.badge}>NSN-Mart Support</span>
          <h1 className={styles.title}>How can we help you today?</h1>
          <p className={styles.subtitle}>
            Search our knowledge base or browse common topics below.
          </p>

          <div className={styles.searchWrapper}>
            <FiSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Type your issue (e.g., 'Where is my order?')" 
              className={styles.searchInput} 
            />
            <button className={styles.searchBtn}>Search</button>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className={styles.quickGrid}>
          
          <div className={styles.card}>
            <div className={styles.iconBox}><FiPackage /></div>
            <h3>Track Order</h3>
            <p>Check the status of your delivery.</p>
            <a href="/track" className={styles.link}>Track Now <FiArrowRight /></a>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}><FiRefreshCw /></div>
            <h3>Returns & Refunds</h3>
            <p>Start a return or check refund status.</p>
            <a href="/returns" className={styles.link}>Start Return <FiArrowRight /></a>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}><FiCreditCard /></div>
            <h3>Payment Issues</h3>
            <p>Queries about billing or failed payments.</p>
            <a href="/billing" className={styles.link}>Get Help <FiArrowRight /></a>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}><FiUser /></div>
            <h3>Account Settings</h3>
            <p>Manage password, address, or profile.</p>
            <a href="/account" className={styles.link}>Manage Account <FiArrowRight /></a>
          </div>

        </div>

      </div>
      
      {/* Background Decorative Element */}
      <div className={styles.bgWave}></div>
    </section>
  );
};

export default Support1;