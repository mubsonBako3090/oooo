export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-700">
          ProcureSys
        </h1>

        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </a>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Streamline Procurement Across Your Institution
        </h2>

        <p className="text-gray-600 max-w-2xl mb-6">
          Manage requisitions, approvals, budgets, and vendor processes in one
          unified platform designed for transparency and efficiency.
        </p>

        <div className="flex gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Get Started
          </a>

          <a
            href="#features"
            className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="bg-white py-16 px-8 grid md:grid-cols-3 gap-8"
      >
        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            Requisition Management
          </h3>
          <p className="text-gray-600">
            Create, track, and manage procurement requests with full visibility.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            Multi-Level Approvals
          </h3>
          <p className="text-gray-600">
            Seamless approval workflows across departments and leadership.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            Budget Control
          </h3>
          <p className="text-gray-600">
            Monitor spending and ensure procurement aligns with budgets.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            Vendor Management
          </h3>
          <p className="text-gray-600">
            Maintain vendor records and streamline procurement sourcing.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            LPO Generation
          </h3>
          <p className="text-gray-600">
            Automatically generate Local Purchase Orders with ease.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-bold text-lg mb-2">
            Reports & Analytics
          </h3>
          <p className="text-gray-600">
            Gain insights with exportable reports and audit tracking.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} ProcureSys. All rights reserved.
      </footer>
    </div>
  );
}    setIsSubmitting(true);
    
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
