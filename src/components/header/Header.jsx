import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import {
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
  FiChevronRight,
  FiHeart,
} from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const navLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <>
      {/* FIXED WRAPPER */}
      <div
        className={`${styles.fixedWrapper} ${
          isScrolled ? styles.scrolledMode : ""
        }`}
      >
        {/* Announcement Bar */}
        <div className={styles.announcementBar}>
          <span>🚀 Free Express Shipping on Orders over $50 | 24/7 Support</span>
        </div>

        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.container}>
            {/* Mobile Menu Button */}
            <button
              className={styles.mobileToggle}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <FiMenu />
            </button>

            {/* Desktop Left Nav */}
            <nav className={`${styles.desktopNav} ${styles.leftNav}`}>
              <NavLink to="/shop" className={navLinkClass}>
                Shop All
              </NavLink>
              <NavLink to="/deals" className={navLinkClass}>
                Daily Deals
              </NavLink>
              <NavLink to="/new" className={navLinkClass}>
                New Arrivals
              </NavLink>
            </nav>

            {/* Logo */}
            <NavLink to="/" className={styles.logoContainer}>
              <span className={styles.logoText}>
                NSR<span className={styles.logoAccent}>-Mart</span>
              </span>
              <span className={styles.logoTagline}>
                Quality Delivered Daily
              </span>
            </NavLink>

            {/* Right Nav + Icons */}
            <div className={styles.actions}>
              <nav className={`${styles.desktopNav} ${styles.rightNav}`}>
                <NavLink to="/about-us" className={navLinkClass}>
                  About Us
                </NavLink>
                <NavLink to="/support" className={navLinkClass}>
                  Support
                </NavLink>
              </nav>

              <div className={styles.iconGroup}>
                <button
                  className={styles.iconBtn}
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <FiSearch />
                </button>

                <NavLink
                  to="/wishlist"
                  className={`${styles.iconBtn} ${styles.hideOnMobile}`}
                  aria-label="Wishlist"
                >
                  <FiHeart />
                </NavLink>

                <NavLink
                  to="/account"
                  className={`${styles.iconBtn} ${styles.hideOnMobile}`}
                  aria-label="Account"
                >
                  <FiUser />
                </NavLink>

                <NavLink
                  to="/cart"
                  className={styles.iconBtn}
                  aria-label="Cart"
                >
                  <FiShoppingBag />
                  <span className={styles.cartBadge}>3</span>
                </NavLink>
              </div>
            </div>
          </div>
        </header>

        {/* SEARCH OVERLAY */}
        <div
          className={`${styles.searchOverlay} ${
            isSearchOpen ? styles.searchActive : ""
          }`}
        >
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for electronics, groceries, fashion..."
              autoFocus={isSearchOpen}
            />
            <button
              className={styles.closeSearch}
              onClick={toggleSearch}
              aria-label="Close Search"
            >
              <FiX />
            </button>
          </div>
        </div>
      </div>

      {/* HEADER SPACER */}
      <div className={styles.headerSpacer} />

      {/* MOBILE OVERLAY */}
      <div
        className={`${styles.mobileOverlay} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`${styles.mobileDrawer} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            NSN<span className={styles.logoAccent}>-Mart</span>
          </span>
          <button onClick={toggleMenu} className={styles.closeBtn}>
            <FiX />
          </button>
        </div>

        <div className={styles.mobileScrollArea}>
          <ul className={styles.mobileLinks}>
            {[
              { name: "Home", path: "/" },
              { name: "Shop Categories", path: "/shop" },
              { name: "Daily Deals", path: "/deals" },
              { name: "My Account", path: "/account" },
              { name: "Track Order", path: "/track-order" },
              { name: "Help Center", path: "/support" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={styles.mobileLink}
                  onClick={toggleMenu}
                >
                  {item.name} <FiChevronRight />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.drawerPromo}>
            <p>Need Assistance?</p>
            <a href="tel:+18001234567" className={styles.promoLink}>
              1-800-NSN-MART
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
