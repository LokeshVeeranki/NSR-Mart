import React, { useState } from 'react';
import styles from './New.module.css';
import { FiArrowRight, FiShoppingBag, FiHeart, FiFilter, FiBell } from 'react-icons/fi';

const New = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock Data for New Arrivals
  const products = [
    {
      id: 1,
      name: "Smart Home Hub Gen 4",
      category: "Tech",
      price: 129,
      image: "https://images.unsplash.com/photo-1558002038-1091773817a0?q=80&w=400&auto=format&fit=crop",
      badge: "Just Dropped",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Urban Cargo Pants",
      category: "Fashion",
      price: 55,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400&auto=format&fit=crop",
      badge: "Trending",
      date: "5 days ago"
    },
    {
      id: 3,
      name: "Ceramic Minimalist Vase",
      category: "Home",
      price: 35,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=400&auto=format&fit=crop",
      badge: "New",
      date: "1 week ago"
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      category: "Tech",
      price: 199,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400&auto=format&fit=crop",
      badge: "Pre-Order",
      date: "Coming Soon"
    },
    {
      id: 5,
      name: "Organic Honey Set",
      category: "Grocery",
      price: 24,
      image: "https://images.unsplash.com/photo-1587049359681-3676eaaf0a97?q=80&w=400&auto=format&fit=crop",
      badge: "Fresh",
      date: "3 days ago"
    },
    {
      id: 6,
      name: "Retro Denim Jacket",
      category: "Fashion",
      price: 89,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400&auto=format&fit=crop",
      badge: "Limited Edition",
      date: "1 day ago"
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            
            {/* Text Side */}
            <div className={styles.heroContent}>
              <span className={styles.seasonTag}>Spring Collection '26</span>
              <h1 className={styles.heroTitle}>The Future is <br /><span className={styles.accent}>Here.</span></h1>
              <p className={styles.heroDesc}>
                Discover the latest innovations in tech, fashion, and lifestyle. 
                Curated daily to keep you ahead of the curve.
              </p>
              <button className={styles.exploreBtn}>
                Explore Collection <FiArrowRight />
              </button>
            </div>

            {/* Image Side */}
            <div className={styles.heroVisual}>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
                alt="New Collection" 
                className={styles.heroImg} 
              />
              <div className={styles.floatingCard}>
                <span>New Arrival</span>
                <strong>Urban Streetwear</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className={styles.container}>
        
        {/* 2. FILTER BAR */}
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {['All', 'Tech', 'Fashion', 'Home', 'Grocery'].map(filter => (
              <button 
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className={styles.sort}>
            <FiFilter className={styles.icon} />
            <select>
              <option>Sort by: Newest</option>
              <option>Sort by: Trending</option>
            </select>
          </div>
        </div>

        {/* 3. PRODUCT GRID */}
        <div className={styles.grid}>
          {filteredProducts.map((item) => (
            <div key={item.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} />
                <span className={styles.badge}>{item.badge}</span>
                <span className={styles.dateTag}>{item.date}</span>
                
                <div className={styles.overlay}>
                  <button className={styles.actionBtn}><FiHeart /></button>
                  <button className={styles.actionBtn}><FiShoppingBag /></button>
                </div>
              </div>

              <div className={styles.details}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.name}>{item.name}</h3>
                <div className={styles.footer}>
                  <span className={styles.price}>${item.price}</span>
                  <button className={styles.buyLink}>Shop Now <FiArrowRight /></button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4. NOTIFICATION BANNER */}
        <div className={styles.notifyBanner}>
          <div className={styles.bellIcon}><FiBell /></div>
          <div className={styles.notifyText}>
            <h3>Never Miss a Drop</h3>
            <p>Get notified when new products arrive in your favorite categories.</p>
          </div>
          <div className={styles.emailBox}>
            <input type="email" placeholder="Enter your email" />
            <button>Notify Me</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default New;