"use client"

import React, { useState } from 'react';
import { Slide } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'
import './WelcomePage.css'; // Import CSS file for additional styling
import { setSessionStatus } from '../utils/session';

const WelcomePage: React.FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const router = useRouter();
  const navigate = (name: string) => {
    router.push(name);
  };

  const handleNextClick = () => {
    if (pageIndex === 0) {
      if (!validateInput(name)) {
        alert('Please enter a valid name');
      } else {
        setPageIndex(1);
      }
    } else {
      if (!validateInput(city)) {
        alert('Please enter a valid city name');
      } else {
        // Handle next action, maybe submit the form or do something else
        setSessionStatus(true);
        navigate("/landingpage");
      }
    }
  };

  const validateInput = (input: string) => {
    const regex = /^[a-zA-Z][a-zA-Z\s]*$/;
    return input.trim() !== '' && regex.test(input);
  };

  const handlePrevClick = () => {
    setPageIndex(0);
  };

  return (
    <div className="container">
      <form id="msform">
        <Slide direction={pageIndex === 0 ? "left" : "right"} in={pageIndex === 0} style={{ zIndex: 2 }}>
          <center>
            <fieldset style={{ padding: '40px', height: '40%' }}>
              <h2 className="fs-title">Enter Your Name</h2>
              <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <br />
              <button type="button" className="next action-button" onClick={handleNextClick}>Next</button>
            </fieldset>
          </center>
        </Slide>

        <Slide direction={pageIndex === 0 ? "left" : "right"} in={pageIndex === 1} style={{ zIndex: 1 }}>
          <center>
            <fieldset style={{ padding: '40px', height: '40%' }}>
              <h2 className="fs-title">Enter Your City Name</h2>
              <input type="text" name="city" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
              <br />
              <button type="button" className="previous action-button" onClick={handlePrevClick}>Previous</button>
              <button type="button" className="next action-button" onClick={handleNextClick}>Submit</button>
            </fieldset>
          </center>
        </Slide>
      </form>
    </div>
  );
};

export default WelcomePage;
