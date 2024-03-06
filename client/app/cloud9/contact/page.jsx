"use client";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const footer = document.getElementById("footer");
    const navbar = document.getElementById("navbar");
    setTimeout(() => {
      navbar.style.background = "white";
      footer.style.background = "white";
      navbar.style.opacity = 0.9;
    }, 500);
  }, []);
  return (
    <div className="contact-main">
      <form className="contact-form">
        <h4 className="contact-form-header">Thanks for reaching out!</h4>
        <div className="contact-form-row">
          {" "}
          <label htmlFor="name" className="contact-form-label">
            Name
          </label>
          <input id="name" className="contact-form-input" />
        </div>

        <div className="contact-form-row">
          {" "}
          <label htmlFor="emailAddress" className="contact-form-label">
            Email Address
          </label>
          <input id="emailAddress" className="contact-form-input" />
        </div>
        <div className="contact-form-row">
          <label htmlFor="subject" className="contact-form-label">
            Subject
          </label>
          <input id="subject" className="contact-form-input" />
        </div>
        <div className="contact-form-row">
          {" "}
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea id="message" className="contact-form-textarea" rows={6} />
        </div>
        <button className="btn contact-form-btn">Send It!</button>
      </form>
    </div>
  );
}
