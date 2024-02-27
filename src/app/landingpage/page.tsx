"use client"
import {useRouter} from 'next/navigation'
import React from 'react';
import withAuth from '../withAuth';
import Table from './Table';


const LandingPage =() => {
    const router = useRouter();
  return (
    <div>
      <h1>Welcome to the Protected Page!</h1>
      <Table/>
      {/* Add your landing page content here */}
    </div>
  );
};

export default withAuth(LandingPage);
