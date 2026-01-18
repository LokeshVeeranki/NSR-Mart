import React, { useState } from 'react';
import styles from './Support.module.css';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';

const Support2 = () => {
  const [activeCategory, setActiveCategory] = useState('Orders');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const categories = ['Orders', 'Shipping', 'Returns', 'Payments', 'Account'];

  const faqs = {
    Orders: [
      {
        question: "How do I track my order status?",
        answer: "Once your order is shipped, you will receive an email and SMS with a tracking link. You can also log in to your account and go to 'My Orders' to see live updates."
      },
      {
        question: "Can I cancel or modify my order?",
        answer: "Orders can be cancelled within 30 minutes of placing them. After that, processing begins. To modify items, please cancel and place a new order."
      },
      {
        question: "I received a damaged item. What should I do?",
        answer: "We are sorry for the inconvenience! Please take a photo of the damaged item and upload it in the 'Returns' section of your account within 48 hours for a free replacement."
      }
    ],
    Shipping: [
      {
        question: "Do you offer international shipping?",
        answer: "Currently, we ship to the US, Canada, and UK. We are working on expanding to more countries soon!"
      },
      {
        question: "How much does shipping cost?",
        answer: "Standard shipping is free for orders over $50. For orders under $50, a flat fee of $5.99 applies. Express shipping is calculated at checkout."
      }
    ],
    Returns: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day 'No Questions Asked' return policy for most items. Electronics must be returned in original packaging with seals intact."
      },
      {
        question: "When will I get my refund?",
        answer: "Refunds are processed within 24 hours of us receiving the returned item. It may take 3-5 business days to reflect in your bank account."
      }
    ],
    Payments: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay. We also offer 'Buy Now, Pay Later' via Klarna."
      },
      {
        question: "Is it safe to save my card details?",
        answer: "Yes, we use 256-bit SSL encryption and do not store your full card numbers. All payments are processed by secure third-party gateways."
      }
    ],
    Account: [
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click on 'Forgot Password' at the login screen. We will send a secure link to your registered email to create a new password."
      }
    ]
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>FAQ</span>
          <h2 className={styles.title}>Frequently Asked <span className={styles.accent}>Questions</span></h2>
          <p className={styles.desc}>
            Everything you need to know about shopping with NSN-Mart.
          </p>
        </div>

        <div className={styles.layout}>
          
          {/* Left: Category Sidebar */}
          <div className={styles.sidebar}>
            <h3 className={styles.catTitle}>Topics</h3>
            <ul className={styles.catList}>
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    className={`${styles.catBtn} ${activeCategory === cat ? styles.activeBtn : ''}`}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            {/* Support Contact Box */}
            <div className={styles.contactBox}>
              <FiHelpCircle className={styles.contactIcon} />
              <h4>Still need help?</h4>
              <p>Our team is available 24/7.</p>
              <button className={styles.contactBtn}>Chat with Us</button>
            </div>
          </div>

          {/* Right: Accordion Content */}
          <div className={styles.contentArea}>
            {faqs[activeCategory].map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.question}>{item.question}</span>
                  {openIndex === index ? <FiMinus className={styles.icon} /> : <FiPlus className={styles.icon} />}
                </button>
                
                <div 
                  className={styles.accordionBody}
                  style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                >
                  <div className={styles.answer}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Support2;