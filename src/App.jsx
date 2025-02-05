import React from "react";
import "./App.css"
import Registration from "./components/Registration/Registration";


function App() {
 
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
          <Registration/>
        </div>
      </div>
    </main>
  );
}

export default App;