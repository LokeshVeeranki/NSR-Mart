import React from 'react';
import styles from './AboutUs.module.css';
import { FiInstagram, FiHeart, FiCamera } from 'react-icons/fi';

const AboutUs5 = () => {
  const gallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
      caption: "Brainstorming the next big feature 💡",
      size: "large" // Spans 2 rows/cols
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      caption: "Our automated warehouse in action 📦",
      size: "normal"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=600&auto=format&fit=crop",
      caption: "Annual Team Retreat 2024 🏔️",
      size: "normal"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop",
      caption: "Celebrating 1 Million Orders! 🎉",
      size: "wide" // Spans 2 cols
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      caption: "Community Service Day 💚",
      size: "normal"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconBadge}>
            <FiCamera />
          </div>
          <h2 className={styles.title}>Life at <span className={styles.highlight}>NSN-Mart</span></h2>
          <p className={styles.subtitle}>
            Behind the technology and logistics, we are a team of dreamers, doers, and creators.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className={styles.galleryGrid}>
          {gallery.map((item) => (
            <div key={item.id} className={`${styles.galleryItem} ${styles[item.size]}`}>
              <img src={item.src} alt="Culture" className={styles.image} />
              
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.caption}</span>
                <button className={styles.likeBtn}>
                  <FiHeart />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Follow Bar */}
        <div className={styles.socialBar}>
          <span className={styles.followText}>Follow our journey on</span>
          <a href="#" className={styles.instaLink}>
            <FiInstagram /> @nsnmart_life
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs5;