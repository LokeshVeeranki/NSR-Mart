import React from 'react';
import styles from './AboutUs.module.css';
import { FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';

const AboutUs3 = () => {
  const team = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      bio: "Visionary leader with 15+ years in retail logistics. Alex built NSN-Mart to bridge the gap between local vendors and global standards."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "The engine behind our speed. Sarah ensures that your 'Next-Day Delivery' promise is kept, rain or shine."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "Tech wizard responsible for our seamless app experience and AI-driven inventory management systems."
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Believes that a happy customer is the best business strategy. She leads our 24/7 support team."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.subTitle}>Our Leadership</span>
            <h2 className={styles.title}>Meet the <span className={styles.accent}>Visionaries</span></h2>
            <p className={styles.description}>
              Building a world-class retail experience requires a world-class team. 
              Meet the minds driving innovation at NSN-Mart.
            </p>
          </div>
          
          <a href="/careers" className={styles.joinBtn}>
            Join Our Team <FiArrowRight />
          </a>
        </div>

        {/* Team Grid */}
        <div className={styles.grid}>
          {team.map((member) => (
            <div key={member.id} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.memberImg} />
                
                {/* Social Overlay */}
                <div className={styles.socialOverlay}>
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FiLinkedin /></a>
                  <a href="#" className={styles.socialIcon} aria-label="Twitter"><FiTwitter /></a>
                  <a href="#" className={styles.socialIcon} aria-label="Email"><FiMail /></a>
                </div>
              </div>

              {/* Info Area */}
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs3;