import isEmail from "../utils/isEmail";
import { useState } from "react";
import { useAddFollowerMutation } from "../../lib/features/api/apiSlice";

export default function FollowForm({ handleToggleFollowForm }) {
  const [email, setEmail] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

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

  const handleClick = async () => {
    console.log("btn clicked");

    try {
      const response = await addFollower({ user: "i am the user" });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="follow-form-container">
      <form id="follow-form" className="follow-form">
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
          type="button"
          id="btn-follow-submit"
          className={`btn btn-follow-submit`}
          disabled={btnDisabled}
          onClick={handleClick}
        >
          Send it!
        </button>
      </form>
    </div>
  );
}
