import React, { useState } from 'react';
import styles from './Shop.module.css';
import { FiFilter, FiSearch, FiX, FiShoppingBag, FiHeart, FiChevronDown, FiGrid, FiList, FiStar } from 'react-icons/fi';

const Shop = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock Product Data (Mart Variety)
  const products = [
    {
      id: 1,
      name: "Apple MacBook Air M2",
      category: "Electronics",
      price: 999,
      oldPrice: 1199,
      rating: 4.9,
      reviews: 320,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=400&auto=format&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Nike Air Jordan 1",
      category: "Fashion",
      price: 145,
      oldPrice: null,
      rating: 4.8,
      reviews: 150,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Electronics",
      price: 348,
      oldPrice: 399,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Organic Coffee Beans",
      category: "Grocery",
      price: 18,
      oldPrice: 22,
      rating: 4.5,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop",
      badge: "Organic"
    },
    {
      id: 5,
      name: "Modern Sofa Set",
      category: "Home",
      price: 450,
      oldPrice: 550,
      rating: 4.6,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
      badge: null
    },
    {
      id: 6,
      name: "Skin Care Kit",
      category: "Beauty",
      price: 45,
      oldPrice: null,
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1556228720-1957be992648?q=80&w=400&auto=format&fit=crop",
      badge: "Cruelty Free"
    },
    {
      id: 7,
      name: "Men's Denim Jacket",
      category: "Fashion",
      price: 65,
      oldPrice: 89,
      rating: 4.4,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400&auto=format&fit=crop",
      badge: null
    },
    {
      id: 8,
      name: "4K Smart TV 55\"",
      category: "Electronics",
      price: 520,
      oldPrice: 650,
      rating: 4.3,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400&auto=format&fit=crop",
      badge: "Deal"
    }
  ];

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'All' || product.category === selectedCategory) &&
           (product.price <= priceRange);
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Header Breadcrumb/Title */}
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Shop All Products</h1>
          <p className={styles.breadcrumbs}>Home / Shop / <span>{selectedCategory}</span></p>
        </div>

        {/* Top Toolbar */}
        <div className={styles.toolbar}>
          <button 
            className={styles.filterToggle} 
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <FiFilter /> Filters
          </button>

          <div className={styles.resultCount}>
            Showing <strong>{filteredProducts.length}</strong> results
          </div>

          <div className={styles.toolbarActions}>
            <div className={styles.sortWrapper}>
              <span>Sort by:</span>
              <select className={styles.sortSelect}>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
            
            <div className={styles.viewToggle}>
              <button 
                className={viewMode === 'grid' ? styles.activeView : ''} 
                onClick={() => setViewMode('grid')}
              >
                <FiGrid />
              </button>
              <button 
                className={viewMode === 'list' ? styles.activeView : ''} 
                onClick={() => setViewMode('list')}
              >
                <FiList />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.layout}>
          
          {/* SIDEBAR FILTERS */}
          <aside className={`${styles.sidebar} ${isMobileFilterOpen ? styles.open : ''}`}>
            <div className={styles.sidebarHeader}>
              <h3>Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}><FiX /></button>
            </div>

            {/* Categories */}
            <div className={styles.filterGroup}>
              <h4>Categories</h4>
              <ul className={styles.filterList}>
                {['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Grocery'].map(cat => (
                  <li key={cat}>
                    <button 
                      className={selectedCategory === cat ? styles.activeFilter : ''}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Slider */}
            <div className={styles.filterGroup}>
              <h4>Price Range</h4>
              <div className={styles.priceInputs}>
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="2000" 
                step="50"
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className={styles.rangeSlider}
              />
            </div>

            {/* Ratings */}
            <div className={styles.filterGroup}>
              <h4>Customer Rating</h4>
              <div className={styles.checkboxGroup}>
                {[5, 4, 3].map(star => (
                  <label key={star} className={styles.checkboxLabel}>
                    <input type="checkbox" />
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className={i < star ? styles.starFill : styles.starEmpty} />
                      ))}
                      <span>& Up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands (Visual Only) */}
            <div className={styles.filterGroup}>
              <h4>Brands</h4>
              <div className={styles.checkboxGroup}>
                {['Apple', 'Nike', 'Samsung', 'Sony', 'Adidas'].map(brand => (
                  <label key={brand} className={styles.checkboxLabel}>
                    <input type="checkbox" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

          </aside>

          {/* PRODUCT GRID */}
          <main className={styles.mainContent}>
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? styles.grid : styles.list}>
                {filteredProducts.map(product => (
                  <div key={product.id} className={styles.card}>
                    
                    {/* Image */}
                    <div className={styles.imageWrapper}>
                      <img src={product.image} alt={product.name} />
                      {product.badge && <span className={styles.badge}>{product.badge}</span>}
                      <button className={styles.wishlistBtn}><FiHeart /></button>
                      
                      {viewMode === 'grid' && (
                        <button className={styles.quickAdd}>
                          <FiShoppingBag /> Add to Cart
                        </button>
                      )}
                    </div>

                    {/* Details */}
                    <div className={styles.details}>
                      <span className={styles.catName}>{product.category}</span>
                      <h3 className={styles.prodName}>{product.name}</h3>
                      
                      <div className={styles.ratingBox}>
                        <FiStar className={styles.starIcon} />
                        <span>{product.rating}</span>
                        <span className={styles.reviewCount}>({product.reviews})</span>
                      </div>

                      <div className={styles.priceBox}>
                        <span className={styles.price}>${product.price}</span>
                        {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
                      </div>

                      {viewMode === 'list' && (
                        <p className={styles.desc}>
                          High quality {product.category.toLowerCase()} item with premium finish. 
                          Available for fast shipping and easy returns.
                        </p>
                      )}

                      {viewMode === 'list' && (
                        <button className={styles.listAddBtn}>Add to Cart</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <h3>No products found</h3>
                <p>Try adjusting your price range or filters.</p>
                <button onClick={() => {setPriceRange(2000); setSelectedCategory('All');}} className={styles.resetBtn}>
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className={styles.pagination}>
                <button disabled>&lt;</button>
                <button className={styles.activePage}>1</button>
                <button>2</button>
                <button>3</button>
                <button>&gt;</button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Shop;