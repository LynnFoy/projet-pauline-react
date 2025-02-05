import React, { useState } from "react";
import "../css/step1.css"; 

function Step1({ incrementStep, formData, setFormData }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{1,3}(?:\s?\d{1,4})*$/;

  const [isValid, setValid] = useState({
    name: true,
    email: true,
    phoneNumber: true,
  });

  //Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));

    //Mise à jour de la validité des champs
    setValid((prevErr) => ({
      ...prevErr,
      [name]: true,
    }));
  };

  //Fonction qui gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation des champs
    let newFormValid = { ...isValid };

    if (!formData.name) {
      newFormValid.name = false;
      document.getElementById('userName').focus();
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newFormValid.email = false;
      if (newFormValid.name) document.getElementById('userEmail').focus();
    }
    if (!formData.phoneNumber || !phoneNumberRegex.test(formData.phoneNumber)) {
      newFormValid.phoneNumber = false;
      if (newFormValid.name && newFormValid.email) document.getElementById('userNum').focus();
    }

    //Si tout est valide, on passe à l'étape suivante
    if (newFormValid.name && newFormValid.email && newFormValid.phoneNumber) {
      incrementStep();
    }

    //Mise à jour de la validité
    setValid(newFormValid);
  };

  return (
    <section className="step1 wrapper">
      <header className="step1 step-header-container">
        <h1 className="step1 title">Personal info</h1>
        <p className="step1 parag">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <form onSubmit={handleSubmit} autoComplete="off" className="step1-form">
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userName">Name</label>
            {!isValid.name && (
              <span className="error-message" role="alert" aria-live="assertive">
                Please enter a valid user name{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            id="userName"
            className={`step1-input ${!isValid.name && "error-border"}`}
            placeholder="Jenna Ortega"
            aria-invalid={!isValid.name}
          />
        </div>
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userEmail">Email Address</label>
            {!isValid.email && (
              <span className="error-message" role="alert" aria-live="assertive">
                Please enter a valid email address{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
            id="userEmail"
            className={`step1-input ${!isValid.email && "error-border"}`}
            placeholder="JennaOrtega@lorem.com"
            aria-invalid={!isValid.email}
          />
        </div>
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userNum">Phone Number</label>
            {!isValid.phoneNumber && (
              <span className="error-message" role="alert" aria-live="assertive">
                Please enter a valid phone number{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            id="userNum"
            className={`step1-input ${!isValid.phoneNumber && "error-border"}`}
            placeholder="J.N +1 234 567 890"
            aria-invalid={!isValid.phoneNumber}
          />
        </div>
        <div className="field button step1">
          <button className="btn step1" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}

export default Step1;
