import React from "react";
import iconThankYou from "../../assets/images/thankyou.svg";
import "../css/step5.css";

function Step5({ onClose }) {
  return (
    <div className="step5 wrapper">
      <div className="step5-container">

        <img
          src={iconThankYou}
          alt="Thank you icon"
          className="thanks-icon"
        />
        
        <h2 className="step5 title">Thank You!</h2>
        <p className="step5 parag">
          Thanks for confirming your subscription! We hope you enjoy using our
          platform. If you need help, feel free to contact us at support@loremgaming.com.
        </p>

        <button className="step5 btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Step5;
