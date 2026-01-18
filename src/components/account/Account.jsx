import React, { useState } from 'react';
import styles from './Account.module.css';
import { 
  FiUser, FiPackage, FiMapPin, FiHeart, FiLogOut, 
  FiSettings, FiCreditCard, FiChevronRight, FiBox, FiClock 
} from 'react-icons/fi';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const userProfile = {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    avatar: "AJ",
    points: 450,
    memberStatus: "Gold Member"
  };

  const orders = [
    {
      id: "#NSN-8832",
      date: "Oct 24, 2024",
      status: "Delivered",
      items: "Sony Headphones, USB-C Cable",
      total: "$358.00",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: "#NSN-8801",
      date: "Oct 10, 2024",
      status: "Processing",
      items: "Men's Denim Jacket",
      total: "$85.00",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Order History</h2>
            <div className={styles.ordersList}>
              {orders.map((order) => (
                <div key={order.id} className={styles.orderCard}>
                  <div className={styles.orderHeader}>
                    <div className={styles.orderMeta}>
                      <span className={styles.orderId}>{order.id}</span>
                      <span className={styles.orderDate}>{order.date}</span>
                    </div>
                    <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className={styles.orderBody}>
                    <img src={order.image} alt="Product" className={styles.orderImg} />
                    <div className={styles.orderDetails}>
                      <p className={styles.orderItems}>{order.items}</p>
                      <span className={styles.orderTotal}>Total: <strong>{order.total}</strong></span>
                    </div>
                    <button className={styles.trackBtn}>Track Order</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'dashboard':
      default:
        return (
          <div className={styles.contentSection}>
            {/* Welcome Banner */}
            <div className={styles.welcomeCard}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>{userProfile.avatar}</div>
                <div>
                  <h2>Hello, {userProfile.name}</h2>
                  <span className={styles.memberBadge}>{userProfile.memberStatus}</span>
                </div>
              </div>
              <div className={styles.walletBox}>
                <span>NSN Points</span>
                <strong>{userProfile.points} pts</strong>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.iconBox}><FiBox /></div>
                <div>
                  <strong>12</strong>
                  <span>Total Orders</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.iconBox}><FiHeart /></div>
                <div>
                  <strong>5</strong>
                  <span>Wishlist</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.iconBox}><FiCreditCard /></div>
                <div>
                  <strong>2</strong>
                  <span>Saved Cards</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <h3 className={styles.subHeader}>Recent Activity</h3>
            <div className={styles.recentActivity}>
              {orders.slice(0, 1).map(order => (
                <div key={order.id} className={styles.activityRow}>
                  <div className={styles.activityIcon}><FiClock /></div>
                  <div className={styles.activityInfo}>
                    <p>Order <strong>{order.id}</strong> is {order.status}</p>
                    <span>{order.date}</span>
                  </div>
                  <FiChevronRight className={styles.arrowIcon} />
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <h1 className={styles.pageTitle}>My Account</h1>

        <div className={styles.layout}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <nav className={styles.navMenu}>
              <button 
                className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <FiUser /> Overview
              </button>
              <button 
                className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <FiPackage /> Orders
              </button>
              <button 
                className={`${styles.navItem} ${activeTab === 'addresses' ? styles.active : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <FiMapPin /> Addresses
              </button>
              <button 
                className={`${styles.navItem} ${activeTab === 'wishlist' ? styles.active : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <FiHeart /> Wishlist
              </button>
              <button 
                className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <FiSettings /> Settings
              </button>
              
              <div className={styles.divider}></div>
              
              <button className={`${styles.navItem} ${styles.logout}`}>
                <FiLogOut /> Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.main}>
            {renderContent()}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Account;