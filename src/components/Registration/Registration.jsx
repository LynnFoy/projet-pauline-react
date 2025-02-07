import React, { useState } from "react";
import { regData } from "./regData";
import "../css/registration.css";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

function Registration() {
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      subscription: "Arcade",
      isToggled: false,
      checkbox1: true,
      checkbox2: true,
      checkbox3: false,
    });
    const [isConfirm, setConfirm] = useState(false);
  
    //Fonction pour changer l'étape active
    const handleStepChange = (step) => setActiveStep(step);
  
    //Réinitialiser les données du formulaire
    const resetForm = () => {
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subscription: "Arcade",
        isToggled: false,
        checkbox1: true,
        checkbox2: true,
        checkbox3: false,
      });
    };
  
    //Liste des étapes avec leurs composants
    const steps = [
      { id: 1, component: <Step1 incrementStep={() => handleStepChange(2)} formData={formData} setFormData={setFormData} /> },
      { id: 2, component: <Step2 incrementStep={() => handleStepChange(3)} decrementStep={() => handleStepChange(1)} formData={formData} setFormData={setFormData} /> },
      { id: 3, component: <Step3 incrementStep={() => handleStepChange(4)} decrementStep={() => handleStepChange(2)} formData={formData} setFormData={setFormData} /> },
      { id: 4, component: <Step4 decrementStep={() => handleStepChange(3)} formData={formData} setFormData={setFormData} changeStep={() => handleStepChange(2)} onShow={() => { setConfirm(true); handleStepChange(5); }} /> },
      { id: 5, component: <Step5 onClose={() => { setConfirm(false); resetForm(); handleStepChange(1); }} /> }
    ];
  
    return (
      <div className="reg-wrapper">
        <div className="reg-container">
          <aside className="header-container">
            <div className="steps-container">
              {regData.map((step) => (
                <div key={step.id} className="step-item">
                  <span className={`step-num ${activeStep === step.id ? "active-step" : ""}`}>{step.id}</span>
                  <article className="step-info">
                    <p className="step">{`Step ${step.id}`}</p>
                    <p className="step-title">{step.title}</p>
                  </article>
                </div>
              ))}
            </div>
          </aside>
          <div className="steps-wrapper">
            {steps.find(step => step.id === activeStep)?.component}
          </div>
        </div>
      </div>
    );
  }
  
  export default Registration;
