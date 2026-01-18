import React from 'react';
import styles from './AboutUs.module.css';
import { FiArrowUpRight, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const AboutUs4 = () => {
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      desc: "Launched as a small local grocery delivery service in San Francisco with just 5 employees and 1 van."
    },
    {
      year: "2018",
      title: "Going National",
      desc: "Expanded operations to 15 major cities. Introduced 'NSN-Express' for same-day delivery."
    },
    {
      year: "2021",
      title: "Tech Revolution",
      desc: "Launched our AI-driven mobile app and automated warehouses, reducing delivery times by 40%."
    },
    {
      year: "2024",
      title: "Market Leaders",
      desc: "Served our 10 millionth customer. Voted 'Best E-commerce Platform' by Retail Weekly."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Timeline Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>Our History</span>
          <h2 className={styles.title}>A Decade of <span className={styles.accent}>Growth</span></h2>
        </div>

        {/* Timeline Grid */}
        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.yearBubble}>{item.year}</div>
              <div className={styles.content}>
                <h3 className={styles.milestoneTitle}>{item.title}</h3>
                <p className={styles.milestoneDesc}>{item.desc}</p>
              </div>
              {/* Connector Line (Hidden for last item) */}
              {index !== milestones.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <div className={styles.iconCircle}>
              <FiTrendingUp />
            </div>
            <div>
              <h3 className={styles.ctaTitle}>Ready to Grow With Us?</h3>
              <p className={styles.ctaText}>
                Whether you are a vendor looking to sell or a brand looking to partner, 
                we are always open to new opportunities.
              </p>
            </div>
          </div>
          
          <div className={styles.ctaActions}>
            <button className={styles.primaryBtn}>
              Become a Seller <FiBriefcase />
            </button>
            <button className={styles.secondaryBtn}>
              Contact Sales <FiArrowUpRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs4;