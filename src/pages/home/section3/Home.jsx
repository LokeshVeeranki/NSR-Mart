import React, { useState } from 'react';
import styles from './Home.module.css';
import { FiShoppingBag, FiHeart, FiEye, FiStar, FiCheck } from 'react-icons/fi';

const Home3 = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock Product Data
  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "gadgets",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
      price: 348,
      oldPrice: 399,
      rating: 4.9,
      reviews: 120,
      badge: "Best Seller",
      badgeColor: "#F97316" // Orange
    },
    {
      id: 2,
      name: "Men's Bomber Jacket",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
      price: 85,
      oldPrice: 120,
      rating: 4.7,
      reviews: 45,
      badge: "-30%",
      badgeColor: "#EF4444" // Red
    },
    {
      id: 3,
      name: "Organic Green Tea",
      category: "essentials",
      image: "https://images.unsplash.com/photo-1627435601361-ec25488c30d7?q=80&w=600&auto=format&fit=crop",
      price: 15,
      oldPrice: null,
      rating: 4.8,
      reviews: 230,
      badge: "Organic",
      badgeColor: "#10B981" // Green
    },
    {
      id: 4,
      name: "Smart Fitness Watch",
      category: "gadgets",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop",
      price: 49,
      oldPrice: 79,
      rating: 4.5,
      reviews: 89,
      badge: "New",
      badgeColor: "#3B82F6" // Blue
    },
    {
      id: 5,
      name: "Ceramic Vase Set",
      category: "essentials",
      image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=600&auto=format&fit=crop",
      price: 34,
      oldPrice: null,
      rating: 4.9,
      reviews: 67,
      badge: null,
      badgeColor: ""
    },
    {
      id: 6,
      name: "Leather Crossbody",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
      price: 110,
      oldPrice: 150,
      rating: 4.8,
      reviews: 112,
      badge: "Hot",
      badgeColor: "#F97316"
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      category: "gadgets",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
      price: 120,
      oldPrice: null,
      rating: 4.9,
      reviews: 340,
      badge: null,
      badgeColor: ""
    },
    {
      id: 8,
      name: "Nike Air Max 90",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
      price: 130,
      oldPrice: 160,
      rating: 5.0,
      reviews: 890,
      badge: "Trending",
      badgeColor: "#8B5CF6" // Purple
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header with Tabs */}
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>Weekly <span className={styles.accent}>Top Picks</span></h2>
            <p className={styles.subtitle}>Handpicked items just for you.</p>
          </div>

          <div className={styles.tabs}>
            {['all', 'gadgets', 'fashion', 'essentials'].map((tab) => (
              <button 
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={product.image} />
                
                {product.badge && (
                  <span 
                    className={styles.badge} 
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                )}

                <div className={styles.actions}>
                  <button className={styles.actionBtn} title="Add to Wishlist"><FiHeart /></button>
                  <button className={styles.actionBtn} title="Quick View"><FiEye /></button>
                </div>

                <button className={styles.addToCartBtn}>
                  <FiShoppingBag /> Add to Cart
                </button>
              </div>

              {/* Info Area */}
              <div className={styles.info}>
                <div className={styles.rating}>
                  <FiStar className={styles.star} />
                  <span>{product.rating}</span>
                  <span className={styles.reviews}>({product.reviews})</span>
                </div>
                
                <h3 className={styles.productName}>{product.name}</h3>
                
                <div className={styles.priceRow}>
                  <div className={styles.prices}>
                    <span className={styles.currentPrice}>${product.price}</span>
                    {product.oldPrice && (
                      <span className={styles.oldPrice}>${product.oldPrice}</span>
                    )}
                  </div>
                  {product.rating >= 4.8 && (
                    <span className={styles.trustBadge}>
                       Choice <FiCheck />
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className={styles.loadMore}>
          <button className={styles.loadBtn}>View All Products</button>
        </div>

      </div>
    </section>
  );
};

export default Home3;