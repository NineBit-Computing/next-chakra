// component/CityPage.tsx

import React from 'react';
import './CityPage.css';


const CityPage = ({ show }) => {
  return (
    <div className={`city-page ${show ? 'slide-in' : ''}`}>

    <form>
          <label htmlFor="name">Enter Your City name:</label>
          <input type="text" id="name" placeholder="Your City name" required />
          <button>Submit</button>
        </form>
      </div>
   
  );
};

export default CityPage;
