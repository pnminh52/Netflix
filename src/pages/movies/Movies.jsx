import { Container, Heading } from "@chakra-ui/react";
const Movies = () => {
  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
        Khám phá phim mới
      </Heading>
    </Container>
  );
};

export default Movies;
