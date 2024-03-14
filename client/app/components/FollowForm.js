import isEmail from "../utils/isEmail";
import { useState } from "react";
import { useAddFollowerMutation } from "../../lib/features/api/apiSlice";
import { useAppDispatch } from "../../lib/hooks";
import {
  displayAlert,
  clearAlert,
} from "../../lib/features/alerts/alertsSlice";
import {
  fadeInElement,
  fadeOutElement,
} from "../animationFrames/opacityAnimations";

export default function FollowForm({ handleToggleFollowForm }) {
  const [email, setEmail] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const dispatch = useAppDispatch();
  const [addFollower] = useAddFollowerMutation();

  const handleChange = (e) => {
    const btn = document.getElementById("btn-follow-submit");
    const { value } = e.target;
    setEmail(value);
    const validEmail = isEmail(value);
    if (validEmail) {
      btn.style.background = "#1fa8f2";
      setBtnDisabled(false);
    } else {
      btn.style.background = "#ced9df";
      setBtnDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addFollower({ email });
      dispatch(
        displayAlert({ alertMessage: "All set, we'll send news soon!" })
      );
      handleToggleFollowForm();
    } catch (error) {
      dispatch(displayAlert({ alertMessage: "Something went wrong." }));
      handleToggleFollowForm();
    }
    fadeInElement("alert-message", 300);
    setTimeout(() => {
      fadeOutElement("alert-message", 300);
      setTimeout(() => {
        dispatch(clearAlert());
      }, 500);
    }, 1500);
  };
  return (
    <div className="follow-form-container">
      <form id="follow-form" className="follow-form" onSubmit={handleSubmit}>
        {" "}
        <button
          className="btn btn-follow-close"
          onClick={handleToggleFollowForm}
        >
          X
        </button>
        <h3 className="follow-form-header">Thanks for keeping up!</h3>
        <div className="follow-form-row">
          <label id="email" htmlFor="email" className="follow-form-label">
            Email
          </label>
          <input
            id="email"
            className="follow-form-input"
            onChange={handleChange}
            value={email}
          />
        </div>
        {btnDisabled && (
          <p className="p-validity">Enter valid email address.</p>
        )}
        <button
          type="submit"
          id="btn-follow-submit"
          className={`btn btn-follow-submit`}
          disabled={btnDisabled}
        >
          Send it!
        </button>
      </form>
    </div>
  );
}
