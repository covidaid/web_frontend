import React from "react";
import "../../CSS/templandingpage.css";
import {Link} from 'react-router-dom'

export default function TempLandingPage() {
  return (
    <div className="tempLandingPageContainer">
      <div className="tempLandingPageContent">
        <div>
          <p>
            Hi my name is irving im currently offering deliveries for seniors or
            people with disabilities living in bushwick area
          </p>
        </div>

        <div>
          <h2>Please Make an account to get started</h2>
          <button><Link to="/registeruser">register</Link></button>
        </div>
      </div>
    </div>
  );
}
