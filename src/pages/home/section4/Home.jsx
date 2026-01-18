import React from 'react';
import styles from './Home.module.css';
import { FiStar, FiUserCheck, FiTruck, FiShield, FiSmile } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const Home4 = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Verified Buyer",
      comment: "I was skeptical about buying electronics online, but NSN-Mart delivered my laptop in 24 hours with perfect packaging. Customer service was super responsive too!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Loyal Customer",
      comment: "The fresh grocery section is a game changer. The vegetables are actually fresher than my local supermarket. Highly recommend the subscription box.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Emily & Mark",
      role: "Home Decor Enthusiasts",
      comment: "We furnished our entire living room from the 'Home & Living' collection. The quality of the wood and fabrics exceeded our expectations for the price.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const stats = [
    { icon: <FiUserCheck />, number: "1M+", label: "Happy Customers" },
    { icon: <FiTruck />, number: "24h", label: "Fast Delivery" },
    { icon: <FiShield />, number: "100%", label: "Secure Payment" },
    { icon: <FiSmile />, number: "24/7", label: "Support Team" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>Testimonials</span>
          <h2 className={styles.title}>Trusted by <span className={styles.accent}>Millions</span></h2>
          <p className={styles.description}>
            Don't just take our word for it. See what our community has to say about their daily shopping experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <FaQuoteLeft className={styles.quoteIcon} />
              
              <p className={styles.comment}>"{review.comment}"</p>
              
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={i < review.rating ? styles.starFill : styles.starEmpty} 
                  />
                ))}
              </div>

              <div className={styles.profile}>
                <img src={review.image} alt={review.name} className={styles.avatar} />
                <div className={styles.meta}>
                  <h4 className={styles.name}>{review.name}</h4>
                  <span className={styles.role}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statIconBox}>{stat.icon}</div>
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home4;