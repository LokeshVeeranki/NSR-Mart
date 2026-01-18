import React, { useState } from 'react';
import styles from './Wishlist.module.css';
import { FiTrash2, FiShoppingBag, FiHeart, FiAlertCircle } from 'react-icons/fi';

const Wishlist = () => {
  // Mock Data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Sony WH-1000XM5",
      price: 348,
      oldPrice: 399,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop",
      inStock: true,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Men's Bomber Jacket",
      price: 85,
      oldPrice: 120,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop",
      inStock: true,
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 49,
      oldPrice: 79,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
      inStock: false, // Out of Stock Example
      category: "Gadgets"
    },
    {
      id: 4,
      name: "Organic Green Tea",
      price: 15,
      oldPrice: null,
      image: "https://images.unsplash.com/photo-1627435601361-ec25488c30d7?q=80&w=400&auto=format&fit=crop",
      inStock: true,
      category: "Grocery"
    }
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (id) => {
    // Logic to add to cart and remove from wishlist would go here
    alert("Moved to Cart!");
    removeItem(id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyPage}>
        <div className={styles.emptyContainer}>
          <div className={styles.iconBox}>
            <FiHeart />
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>Save items you love here for later.</p>
          <a href="/shop" className={styles.shopBtn}>Explore Products</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>My Wishlist <span className={styles.count}>({wishlistItems.length})</span></h1>
          <button className={styles.clearBtn} onClick={() => setWishlistItems([])}>
            Clear All
          </button>
        </div>

        <div className={styles.grid}>
          {wishlistItems.map((item) => (
            <div key={item.id} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} className={item.inStock ? '' : styles.faded} />
                
                {!item.inStock && (
                  <span className={styles.outStockBadge}>Out of Stock</span>
                )}

                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeItem(item.id)}
                  title="Remove from Wishlist"
                >
                  <FiTrash2 />
                </button>
              </div>

              {/* Info Area */}
              <div className={styles.details}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.name}>{item.name}</h3>
                
                <div className={styles.priceRow}>
                  <span className={styles.price}>${item.price}</span>
                  {item.oldPrice && <span className={styles.oldPrice}>${item.oldPrice}</span>}
                </div>

                {item.inStock ? (
                  <button className={styles.cartBtn} onClick={() => moveToCart(item.id)}>
                    <FiShoppingBag /> Move to Cart
                  </button>
                ) : (
                  <button className={styles.notifyBtn}>
                    <FiAlertCircle /> Notify Me
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wishlist;