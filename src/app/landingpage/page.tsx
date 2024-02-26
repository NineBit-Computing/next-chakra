"use client"
import {useRouter} from 'next/navigation'
import React from 'react';
import withAuth from '../withAuth';


const LandingPage =() => {
    const router = useRouter();
  return (
    <div>
      <h1>Welcome to the Protected Page!</h1>
      {/* Add your landing page content here */}
    </div>
  );
};

export default withAuth(LandingPage);
