import React from 'react'

import { Flex, Heading, Box } from "@chakra-ui/react";

function Toolbar() {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        bg="blue.500"
        p={4}
        boxShadow="md"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        width="100%"
      >
        <Heading size="md" color="white">
        Greetings!
        </Heading>
      </Flex>
      <Box marginTop="60px"> {/* Adjust top margin to fit the height of your toolbar */}
        {/* Your content here */}
      </Box>
    </>
  );
}

export default Toolbar;


