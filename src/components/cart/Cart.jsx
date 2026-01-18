import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag, FiShield, FiTag, FiCheckCircle } from 'react-icons/fi';

import Avacodo from '../../assets/images/Avocado.jpeg';

const Cart = () => {
  // Mock Cart Data (Mart variety: Electronics, Fashion, Grocery)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sony WH-1000XM5",
      variant: "Black",
      category: "Electronics",
      price: 348,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=200&auto=format&fit=crop",
      quantity: 1,
      stock: 10
    },
    {
      id: 2,
      name: "Men's Classic Tee",
      variant: "Size: M | Color: Navy",
      category: "Fashion",
      price: 25,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop",
      quantity: 2,
      stock: 50
    },
    {
      id: 3,
      name: "Organic Avocados (Pack of 4)",
      variant: "Fresh Grocery",
      category: "Grocery",
      price: 8,
      image: Avacodo,
      quantity: 1,
      stock: 20
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const FREE_SHIPPING_THRESHOLD = 500;
  const SHIPPING_COST = 15;

  // Calculate Subtotal
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);

  // Update Quantity
  const updateQuantity = (id, type) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Remove Item
  const removeItem = (id) => {
    const filteredItems = cartItems.filter(item => item.id !== id);
    setCartItems(filteredItems);
  };

  // Calculations
  const progressPercent = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const finalShipping = isFreeShipping ? 0 : SHIPPING_COST;
  const grandTotal = subtotal + finalShipping;

  // Empty State
  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIconBox}>
            <FiShoppingBag />
          </div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything yet. Explore our categories to find great deals!</p>
          <a href="/shop" className={styles.startShoppingBtn}>Start Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <h1 className={styles.pageTitle}>Shopping Cart <span className={styles.count}>({cartItems.length} items)</span></h1>

        <div className={styles.cartLayout}>
          
          {/* LEFT COLUMN: Cart Items */}
          <div className={styles.itemsColumn}>
            
            {/* Free Shipping Progress Bar */}
            <div className={styles.shippingBar}>
              <div className={styles.shippingText}>
                {isFreeShipping ? (
                  <span className={styles.successMsg}><FiCheckCircle /> You've unlocked <strong>Free Express Shipping!</strong></span>
                ) : (
                  <span>Add <strong>${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}</strong> more for Free Shipping</span>
                )}
              </div>
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${progressPercent}%`, backgroundColor: isFreeShipping ? '#10B981' : '#F97316' }}
                ></div>
              </div>
            </div>

            {/* Header Row (Desktop) */}
            <div className={styles.tableHeader}>
              <span className={styles.colProduct}>Product</span>
              <span className={styles.colPrice}>Price</span>
              <span className={styles.colQty}>Quantity</span>
              <span className={styles.colTotal}>Total</span>
            </div>

            {/* Items List */}
            <div className={styles.itemList}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  
                  {/* Product Info */}
                  <div className={styles.itemProduct}>
                    <div className={styles.imgWrapper}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemCat}>{item.category}</span>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <span className={styles.itemVariant}>{item.variant}</span>
                      <button className={styles.removeBtnMobile} onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className={styles.itemPrice}>
                    ${item.price}
                  </div>

                  {/* Quantity */}
                  <div className={styles.itemQty}>
                    <div className={styles.qtySelector}>
                      <button onClick={() => updateQuantity(item.id, 'dec')}><FiMinus /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 'inc')}><FiPlus /></button>
                    </div>
                  </div>

                  {/* Total & Remove (Desktop) */}
                  <div className={styles.itemTotal}>
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    <button className={styles.removeBtnDesktop} onClick={() => removeItem(item.id)} title="Remove Item">
                      <FiTrash2 />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            <a href="/shop" className={styles.backLink}>
              <FiArrowLeft /> Continue Shopping
            </a>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Shipping Estimate</span>
                {isFreeShipping ? (
                  <span className={styles.freeText}>Free</span>
                ) : (
                  <span>${SHIPPING_COST.toFixed(2)}</span>
                )}
              </div>
              
              <div className={styles.summaryRow}>
                <span>Tax Estimate</span>
                <span>Calculated at checkout</span>
              </div>

              {/* Coupon Input */}
              <div className={styles.couponSection}>
                <div className={styles.inputWrapper}>
                  <FiTag className={styles.inputIcon} />
                  <input type="text" placeholder="Promo Code" />
                </div>
                <button className={styles.applyBtn}>Apply</button>
              </div>

              <div className={styles.divider}></div>

              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>

              <button className={styles.checkoutBtn}>
                Checkout Securely <FiShield />
              </button>

              <div className={styles.trustBadges}>
                <p>Guaranteed Safe Checkout</p>
                <div className={styles.cardsRow}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;