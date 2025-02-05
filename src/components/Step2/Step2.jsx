import React from "react";
import "../css/step2.css"; 
import { step2Data } from "./step2Data"; 

function Step2({ formData, setFormData, decrementStep, incrementStep }) {
  const subscription = formData.subscription || "Arcade"; 
  const isToggled = formData.isToggled || false; 

  //Fonction pour gérer le changement de plan
  const handleChange = (e) => {
    setFormData({
      ...formData,
      subscription: e.target.value,
    });
  };

  //Fonction pour changer l'état du toggle
  const switchSubscription = () => {
    setFormData({
      ...formData,
      isToggled: !isToggled,
    });
  };

  //Fonction pour soumettre le formulaire et aller à l'étape suivante
  const handleSubmit = (e) => {
    e.preventDefault();
    incrementStep();
  };

  return (
    <section className="step2 wrapper">
      <header className={`step2 step-header-container`}>
        <h2 className="step2 title">Select your plan</h2>
        <p className="step2 parag">
          Choose between monthly or yearly billing.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="step2-form">
        <fieldset className="field-wrapper">
          <legend className="visually-hidden">Choose a subscription plan</legend>
          {step2Data.map((item) => (
            <div key={item.id} className="field step2">
              <input
                type="radio"
                value={item.title}
                checked={subscription === item.title} 
                onChange={handleChange}
                name="subscription"
                id={item.title}
                className="subscription"
                aria-labelledby={`${item.title}-label ${item.title}-price`}
              />
              <label
                className={`sub-label ${subscription === item.title ? "active" : ""}`}
                htmlFor={item.title}
              >
                <div className="content-wrapper">
                  <div className="icon-wrapper">
                    <img
                      src={item.icon}
                      alt={`Icon of ${item.title}`}
                      className="sub-icon"
                    />
                  </div>
                  <div className="step2-text-wrapper">
                    <h3 id={`${item.title}-label`} className="sub-title">
                      {item.title}
                    </h3>
                    <p id={`${item.title}-price`} className="step2-price">
                      {isToggled
                        ? `$${item.price.yearly.yearlyPrice}/yr`
                        : `$${item.price.monthly.monthlyPrice}/mo`}
                    </p>
                    {isToggled && (
                      <p className="discount">{item.price.yearly.discount}</p>
                    )}
                  </div>
                </div>
              </label>
            </div>
          ))}

          <div className="field switch-wrapper">
            <div className="switch-container">
              <span className="toggle-text monthly">Monthly</span>
              <label className="switch" htmlFor="billingToggle">
                <input
                  type="checkbox"
                  onChange={switchSubscription}
                  id="billingToggle"
                  aria-label="Switch between Monthly and Yearly billing"
                  aria-checked={isToggled}
                  checked={isToggled}
                  className="step2-checkbox"
                />
                <span className="slider round"></span>
              </label>
              <span className="toggle-text yearly">Yearly</span>
            </div>
          </div>
        </fieldset>
        
        <div className="field button step2">
          <button
            className="return step2"
            type="button"
            onClick={decrementStep}
            aria-label="Go back to the previous step"
          >
            Go Back
          </button>
          <button className="btn step2" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}

export default Step2;
