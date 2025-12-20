import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ onClose }) {
  console.log("🟣 Modal function executed");

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    console.log("🔴 modal-root NOT FOUND");
    return null;
  }

  useEffect(() => {
    console.log("✅ Modal mounted (Portal attached)");

    return () => {
      console.log("❌ Modal unmounted (Portal removed)");
    };
  }, []);

  console.log("🟢 Rendering modal via createPortal");

  return createPortal(
    <div className="overlay">
      <div className="modal">
        <h2>Your Info</h2>
        <p>Yaramala Karthik Reddy</p>

        <button
          onClick={() => {
            console.log("🔴 Close button clicked");
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
