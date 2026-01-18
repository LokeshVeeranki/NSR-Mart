import React from 'react';
import styles from './Home.module.css';
import { FiArrowRight, FiSmartphone, FiShoppingBag, FiCoffee, FiWatch, FiMonitor, FiHome } from 'react-icons/fi';

const Home2 = () => {
  const categories = [
    {
      id: 1,
      name: "Gadgets & Tech",
      items: "Laptops, Phones...",
      icon: <FiMonitor />,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop",
      bg: "#E0F2FE" // Light Blue
    },
    {
      id: 2,
      name: "Men's Fashion",
      items: "Shirts, Sneakers...",
      icon: <FiWatch />,
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop",
      bg: "#F3E8FF" // Light Purple
    },
    {
      id: 3,
      name: "Home & Living",
      items: "Decor, Furniture...",
      icon: <FiHome />,
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop",
      bg: "#DCFCE7" // Light Green
    },
    {
      id: 4,
      name: "Beauty & Care",
      items: "Skincare, Makeup...",
      icon: <FiSmartphone />, // Placeholder icon
      image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600&auto=format&fit=crop",
      bg: "#FCE7F3" // Light Pink
    },
    {
      id: 5,
      name: "Fresh Grocery",
      items: "Fruits, Veggies...",
      icon: <FiCoffee />,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
      bg: "#FFEDD5" // Light Orange
    },
    {
      id: 6,
      name: "Accessories",
      items: "Bags, Belts...",
      icon: <FiShoppingBag />,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
      bg: "#E5E7EB" // Light Grey
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.subTitle}>Collections</span>
            <h2 className={styles.title}>Shop by <span className={styles.accent}>Category</span></h2>
          </div>
          <a href="/shop" className={styles.viewAllBtn}>
            View All Categories <FiArrowRight />
          </a>
        </div>

        {/* Category Grid */}
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card} style={{ '--hover-color': cat.bg }}>
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat.name} className={styles.catImage} />
                <div className={styles.overlay}>
                  <span className={styles.shopNow}>Shop Now</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>{cat.icon}</div>
                <div>
                  <h3 className={styles.catName}>{cat.name}</h3>
                  <span className={styles.catItems}>{cat.items}</span>
                </div>
                <button className={styles.arrowBtn} aria-label="Go"><FiArrowRight /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Flash Sale Banner Strip */}
        <div className={styles.flashBanner}>
          <div className={styles.flashContent}>
            <div className={styles.flashTag}>Flash Sale ⚡</div>
            <h3>Apple MacBook Air M2 - <span className={styles.strike}>$1199</span> <strong>$999</strong></h3>
            <p>Offer ends in 04:23:12</p>
          </div>
          <button className={styles.flashBtn}>Grab Deal</button>
          
          {/* Decorative shapes */}
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>

      </div>
    </section>
  );
};

export default Home2;