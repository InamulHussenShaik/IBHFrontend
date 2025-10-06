import ReactDOM from "react-dom";

export default function LogoutPopup({ show, onConfirm, onCancel }) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="logout-popup">
      <div className="logout-popup-content">
        <h3>Are you sure you want to logout?</h3>
        <div className="logout-popup-buttons">
          <button className="yes-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="no-btn" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>,
    document.body // ✅ renders on top of entire app, outside your layout
  );
}
