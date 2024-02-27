import { Spinner, Center, Spacer } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Center h="100vh">
      <div>
        <Spinner size="xl"/>
        <Spacer />
        Loading...
      </div>
    </Center>
  );
};

export default Loading;
