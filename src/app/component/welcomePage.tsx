"use client"

import React, { useState } from 'react';
import { Box, Button, Center, Heading, Input, Slide } from '@chakra-ui/react';
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
   <Box>
      <form id="msform">
        <Slide direction={pageIndex === 0 ? "left" : "right"} in={pageIndex === 0} style={{ zIndex: 2 }}>
          <Center>
           
            <fieldset style={{ padding: '40px', height: '40%' }}>
  
              <Heading size="md" color="white">Enter Your Name</Heading>
              <Input type="text" m={4} p={4} name="name" bg="black" color="white" placeholder="Name" _placeholder={{ color: 'inherit' }} maxWidth="300px" value={name} onChange={e => setName(e.target.value)} />
              <br />
              <Button type="button" m={4} p={4} onClick={handleNextClick}>Next</Button>
                
            </fieldset>
          
          </Center>
        </Slide>

        <Slide direction={pageIndex === 0 ? "left" : "right"} in={pageIndex === 1} style={{ zIndex: 1 }}>
          <Center>
            <fieldset style={{ padding: '40px', height: '40%' }}>
            <Heading size="md" color="white">Enter Your City Name</Heading>
              <Input type="text" m={4} p={4} name="city" placeholder="City" bg="black" color="white" _placeholder={{ color: 'inherit' }}  maxWidth="300px" value={city} onChange={e => setCity(e.target.value)} />
              <br />
              <Button type="button" m={4} p={4} onClick={handlePrevClick}>Previous</Button>
              <Button type="button"  p={4} onClick={handleNextClick}>Submit</Button>
            </fieldset>
          </Center>
        </Slide>
      </form>
  </Box>
  );
};

export default WelcomePage;
