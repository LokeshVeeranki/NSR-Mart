import React from 'react';
import styles from './AboutUs.module.css';
import { FiTruck, FiShield, FiSmile, FiGlobe, FiPackage, FiZap } from 'react-icons/fi';

const AboutUs2 = () => {
  const features = [
    {
      id: 1,
      icon: <FiZap />,
      title: "Lightning Fast Delivery",
      description: "We don't just ship; we sprint. With our hyper-local warehouses, 85% of orders are delivered within 24 hours."
    },
    {
      id: 2,
      icon: <FiShield />,
      title: "Quality Verified",
      description: "Every gadget, garment, and grocery item goes through a strict 5-point quality check before it hits our shelves."
    },
    {
      id: 3,
      icon: <FiSmile />,
      title: "Customer Obsessed",
      description: "Our support team isn't a chatbot. Real humans are available 24/7 to solve your queries in under 5 minutes."
    },
    {
      id: 4,
      icon: <FiGlobe />,
      title: "Eco-Conscious",
      description: "We are committed to the planet. We use 100% recyclable packaging and electric vehicles for last-mile delivery."
    },
    {
      id: 5,
      icon: <FiPackage />,
      title: "Secure Packaging",
      description: "Fragile items get special treatment. Our tamper-proof packaging ensures your items arrive in pristine condition."
    },
    {
      id: 6,
      icon: <FiTruck />,
      title: "Easy Returns",
      description: "Changed your mind? No problem. Our 'No-Questions-Asked' return policy makes shopping risk-free."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>Why Choose NSN-Mart</span>
          <h2 className={styles.title}>The Standard of <span className={styles.accent}>Excellence</span></h2>
          <p className={styles.description}>
            We aren't just another e-commerce site. We are a logistics and quality 
            powerhouse built to make your life easier.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs2;