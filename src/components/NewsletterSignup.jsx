import React, { useState } from "react";
import "../styles/NewsletterSignup.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* LEFT SIDE - Form */}
        <div className="newsletter-form">
          {!submitted ? (
            <>
              <h3>
                <em>sign up for the latest from Interior Design</em>
              </h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <p className="info-text">
                  Interior Design uses the information you provide us to contact you
                  about our relevant content, experiences, and services. You may
                  unsubscribe from these communications at any time. For more
                  information, check out our{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>.
                </p>
                <button type="submit" className="submit-btn">
                  <em>Submit</em>
                </button>
                <p className="terms">
                  By signing up you agree to our{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>.
                </p>
              </form>
            </>
          ) : (
            <div className="success-msg">
              <h3>🎉 Thank you for signing up!</h3>
              <p>We’ll keep you updated with the latest from Interior Design.</p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE - Logo */}
        <div className="newsletter-logo">
          <h1>INTERIOR<br />DESIGN</h1>
        </div>
      </div>
    </section>
  );
}
