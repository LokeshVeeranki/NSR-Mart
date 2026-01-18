import React, { useState, useEffect } from 'react';
import styles from './Deals.module.css';
import { FiClock, FiShoppingBag, FiTag, FiZap, FiCheck, FiFilter } from 'react-icons/fi';

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });
  const [activeTab, setActiveTab] = useState('lightning');

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock Deal Data
  const deals = [
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra",
      image: "https://images.unsplash.com/photo-1610945265078-38584e12e4c6?q=80&w=400&auto=format&fit=crop",
      price: 899,
      oldPrice: 1199,
      discount: "25%",
      claimed: 85,
      type: "lightning"
    },
    {
      id: 2,
      name: "Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
      price: 199,
      oldPrice: 350,
      discount: "43%",
      claimed: 40,
      type: "lightning"
    },
    {
      id: 3,
      name: "Adidas Running Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
      price: 65,
      oldPrice: 120,
      discount: "45%",
      claimed: 92,
      type: "clearance"
    },
    {
      id: 4,
      name: "4K Gaming Monitor 27\"",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop",
      price: 299,
      oldPrice: 450,
      discount: "33%",
      claimed: 60,
      type: "lightning"
    },
    {
      id: 5,
      name: "Smart Home Security Cam",
      image: "https://images.unsplash.com/photo-1558002038-1091773817a0?q=80&w=400&auto=format&fit=crop",
      price: 45,
      oldPrice: 99,
      discount: "55%",
      claimed: 20,
      type: "clearance"
    },
    {
      id: 6,
      name: "Italian Leather Wallet",
      image: "https://images.unsplash.com/photo-1627123424574-18bd08459800?q=80&w=400&auto=format&fit=crop",
      price: 35,
      oldPrice: 80,
      discount: "56%",
      claimed: 75,
      type: "clearance"
    }
  ];

  const filteredDeals = activeTab === 'all' ? deals : deals.filter(d => d.type === activeTab);

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO BANNER */}
      <div className={styles.heroBanner}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FiZap /> Flash Sale Live
            </div>
            <h1 className={styles.heroTitle}>Mega Discounts <br />Up to <span className={styles.highlight}>70% OFF</span></h1>
            <p className={styles.heroDesc}>
              Grab them before they are gone. Limited stock available for electronics, fashion, and home essentials.
            </p>
            
            {/* Countdown Timer */}
            <div className={styles.timerBox}>
              <div className={styles.timeBlock}>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <label>Hrs</label>
              </div>
              <div className={styles.colon}>:</div>
              <div className={styles.timeBlock}>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <label>Mins</label>
              </div>
              <div className={styles.colon}>:</div>
              <div className={styles.timeBlock}>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <label>Secs</label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Patterns */}
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>

      <div className={styles.container}>
        
        {/* 2. FILTERS & TABS */}
        <div className={styles.toolbar}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Deals
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'lightning' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('lightning')}
            >
              <FiZap /> Lightning Deals
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'clearance' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('clearance')}
            >
              <FiTag /> Clearance
            </button>
          </div>

          <div className={styles.filterAction}>
            <button className={styles.filterBtn}><FiFilter /> Filter</button>
          </div>
        </div>

        {/* 3. DEALS GRID */}
        <div className={styles.grid}>
          {filteredDeals.map((item) => (
            <div key={item.id} className={styles.card}>
              
              {/* Image & Badges */}
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} />
                <span className={styles.discountBadge}>-{item.discount}</span>
                {item.type === 'lightning' && (
                  <span className={styles.lightningBadge}><FiZap /> Fast Selling</span>
                )}
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.prodName}>{item.name}</h3>
                
                <div className={styles.priceRow}>
                  <div className={styles.prices}>
                    <span className={styles.currentPrice}>${item.price}</span>
                    <span className={styles.oldPrice}>${item.oldPrice}</span>
                  </div>
                  <div className={styles.saveBadge}>
                    Save ${(item.oldPrice - item.price).toFixed(0)}
                  </div>
                </div>

                {/* Stock Progress Bar */}
                <div className={styles.stockBarContainer}>
                  <div className={styles.stockInfo}>
                    <span className={styles.stockLabel}>Available: <strong>{100 - item.claimed}%</strong></span>
                    <span className={styles.stockSold}>{item.claimed}% Claimed</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{ 
                        width: `${item.claimed}%`,
                        backgroundColor: item.claimed > 80 ? '#EF4444' : '#F97316' 
                      }}
                    ></div>
                  </div>
                </div>

                <button className={styles.addToCartBtn}>
                  <FiShoppingBag /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. NEWSLETTER ALERT */}
        <div className={styles.alertBox}>
          <div className={styles.alertIcon}><FiClock /></div>
          <div className={styles.alertText}>
            <h3>Missed out?</h3>
            <p>Subscribe to get notified 1 hour before the next Flash Sale begins.</p>
          </div>
          <div className={styles.alertInput}>
            <input type="email" placeholder="Enter your email" />
            <button>Notify Me</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Deals;