export default function Alert({ alertMessage }) {
  return (
    <div id="alert-container" className="alert-container">
      <div id="alert-message" className="alert-message">
        {" "}
        {alertMessage}
      </div>
    </div>
  );
}
