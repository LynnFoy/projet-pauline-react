import React from "react";
import { step3Data } from "./step3Data";
import "../css/step3.css";

function Step3({ formData, setFormData, decrementStep, incrementStep }) {
  //On récupère si l'utilisateur a activé l'option de facturation annuelle
  const isToggled = formData.isToggled;

  //Fonction qui gère le changement des cases à cocher pour les add-ons
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked, 
    });
  };

  //Fonction qui se lance lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); 
    incrementStep();  
  };

  return (
    <section className="step3 wrapper">
      <header className="step3 step-header-container">
        <h2 className="step3 title">Pick add-ons</h2>
        <p className="step3 parag">
          Add-ons help enhance your gaming experience.
        </p>
      </header>

      <form className="step3-form" onSubmit={handleSubmit}>
        <fieldset className="field step3 visually-hidden" aria-labelledby="step3Title">
          <legend id="step3Title" className="visually-hidden">
            Choose additional services
          </legend>

          {step3Data.map((item) => (
            <label 
              key={item.id} 
              htmlFor={item.id} 
              className={`service-item ${formData[item.name] && "active"}`}
            >
              <div className="box-info-wrapper">
                <div className="custom-checkbox">
                  
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={formData[item.name] || false} 
                    onChange={handleCheckboxChange}
                    id={item.id}
                    className="step3-checkbox"
                    aria-labelledby={`${item.id}-name ${item.id}-price`}
                    aria-describedby={`${item.id}-description`}
                  />
                  <span className="checkmark"></span>
                </div>
                <div className="text-wrapper">
                  <h3 id={`${item.id}-name`} className="service-name">
                    {item.service} 
                  </h3>
                  <p id={`${item.id}-description`} className="service-description">
                    {item.description} 
                  </p>
                </div>
              </div>

              <p 
                id={`${item.id}-price`} 
                className="service-price"
                aria-live="polite"
              >
                {isToggled
                  ? `+$${item.price.yearly}/yr`  
                  : `+$${item.price.monthly}/mo`} 
              </p>
            </label>
          ))}

          <div className="field button">
            <button
              className="return step3"
              type="button"
              onClick={decrementStep}
              aria-label="Go back to the previous step"
            >
              Go Back
            </button>
            <button className="btn step3" type="submit">
              Next Step
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default Step3;
