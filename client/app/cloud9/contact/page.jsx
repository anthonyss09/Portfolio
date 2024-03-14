"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  fadeInElement,
  fadeOutElement,
} from "../../animationFrames/opacityAnimations";
import isEmail from "../../utils/isEmail";
import { useAppDispatch } from "../../../lib/hooks";
import {
  displayAlert,
  clearAlert,
} from "../../../lib/features/alerts/alertsSlice";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const emailValid = isEmail(email);
    if (!emailValid) {
      dispatch(displayAlert({ alertMessage: "Enter a valid email address." }));
    } else {
      try {
        const response = await axios.post("/api/transports/forward-email", {
          name: name,
          subject: subject,
          email: email,
          message: message,
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        dispatch(displayAlert({ alertMessage: "Message sent!" }));
      } catch (error) {
        console.log(error);
        dispatch(displayAlert({ alertMessage: "Something went wrong." }));
      }
    }

    setIsLoading(false);
    fadeInElement("alert-message", 300);
    setTimeout(() => {
      fadeOutElement("alert-message", 300);
      setTimeout(() => {
        dispatch(clearAlert());
      }, 500);
    }, 1500);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
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
      {isLoading && (
        <div className="loader-container">
          <p>Sending ...</p>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h4 className="contact-form-header">Thanks for reaching out!</h4>
        <div className="contact-form-row">
          {" "}
          <label htmlFor="name" className="contact-form-label">
            Name
          </label>
          <input
            id="name"
            value={name}
            className="contact-form-input"
            onChange={handleChange}
          />
        </div>

        <div className="contact-form-row">
          {" "}
          <label htmlFor="email" className="contact-form-label">
            Email Address
          </label>
          <input
            id="email"
            value={email}
            className="contact-form-input"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-row">
          <label htmlFor="subject" className="contact-form-label">
            Subject
          </label>
          <input
            id="subject"
            value={subject}
            className="contact-form-input"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-row">
          {" "}
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            className="contact-form-textarea"
            rows={6}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn  contact-form-btn">
          Send It!
        </button>
      </form>
    </div>
  );
}
