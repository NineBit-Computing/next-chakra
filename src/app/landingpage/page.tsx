"use client"
import {useRouter} from 'next/navigation'
import React from 'react';
import withAuth from '../withAuth';
import TablePage from './TablePage';
import { Box, Center, Heading } from '@chakra-ui/react';


const LandingPage =() => {
    const router = useRouter();
  return (
    <Box mt={20}>
      <Center>
      <Heading size='lg' >Welcome! to the protected page. You can access your data here.</Heading>
      </Center>
      <TablePage/>
    </Box>
  );
};

export default withAuth(LandingPage);
