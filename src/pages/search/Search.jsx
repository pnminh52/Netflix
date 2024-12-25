import { Container, Heading } from "@chakra-ui/react";
import React from "react";

const search = () => {
  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
        Tìm kiếm
      </Heading>
    </Container>
  );
};

export default search;
