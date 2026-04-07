'use client';

import { useState } from 'react';
import styles from './Landing.module.css';

const Landing = () => {
  const [formData, setFormData] = useState({
    requesterName: '',
    department: '',
    itemName: '',
    quantity: '',
    urgency: 'normal',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = ['Sales', 'Marketing', 'IT', 'Operations', 'HR', 'Finance'];
  const urgencyLevels = [
    { value: 'low', label: 'Low - Can wait 2+ weeks' },
    { value: 'normal', label: 'Normal - 1 week' },
    { value: 'high', label: 'High - 2-3 days' },
    { value: 'urgent', label: 'Urgent - 24 hours' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Requisition submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          requesterName: '',
          department: '',
          itemName: '',
          quantity: '',
          urgency: 'normal',
          notes: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting requisition:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Procurement Requisition</h1>
        <p className={styles.subtitle}>
          Submit your purchase request quickly and efficiently. 
          All requests are processed within 24-48 hours.
        </p>
      </div>

      <div className={styles.formWrapper}>
        {submitted && (
          <div className={styles.successMessage}>
            ✅ Requisition submitted successfully! You will receive a confirmation email shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="requesterName" className={styles.label}>
              Requester Name *
            </label>
            <input
              type="text"
              id="requesterName"
              name="requesterName"
              value={formData.requesterName}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="department" className={styles.label}>
              Department *
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="itemName" className={styles.label}>
              Item/Product Name *
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="E.g., Laptop, Software License, Office Chair"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="quantity" className={styles.label}>
                Quantity *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                min="1"
                className={styles.input}
                placeholder="1"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="urgency" className={styles.label}>
                Urgency Level *
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className={styles.select}
              >
                {urgencyLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes" className={styles.label}>
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className={styles.textarea}
              placeholder="Please provide any additional information or specifications..."
            />
          </div>

          <button 
            type="submit" 
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Requisition'}
          </button>
        </form>

        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>📋 Important Information</h3>
          <ul className={styles.infoList}>
            <li>All requisitions are reviewed by the procurement team</li>
            <li>Budget approval may be required for items over $5,000</li>
            <li>You'll receive tracking updates via email</li>
            <li>Expected delivery time: 5-7 business days after approval</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;