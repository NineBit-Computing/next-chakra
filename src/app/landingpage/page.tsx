"use client"
import {useRouter} from 'next/navigation'
import React from 'react';


const LandingPage =() => {
    const router = useRouter();
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      {/* Add your landing page content here */}
    </div>
  );
};

export default LandingPage;
