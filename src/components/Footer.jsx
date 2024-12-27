import React from 'react';
import { Box, Text, Link, Stack, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container
      as="footer"
      bg="black"
      color="white"
      py={4}
      textAlign="center"
    >
      <Stack spacing={2}>
        <hr />
        <Text>&copy; {new Date().getFullYear()} Netflix. All copyrights reserved.</Text>
        <Link href="/" color="red.500">Privacy policy</Link>
      </Stack>
    </Container>
  );
};

export default Footer;