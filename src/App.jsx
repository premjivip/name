import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="prem.jpg" alt="eye" />
        </div>
        <h2 className="name">Name: premji </h2>
        <p className="registration">Registration No: 212221043004</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            i am studying saveetha engineering college
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
