import React from 'react';
import { Box, Text, Link, Stack, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container maxW={"container.xl"}
      as="footer"
      bg="black"
      color="white"
      
      textAlign="center"
    >
      
        <hr />
        <Text mt={2} mb={2}>&copy; {new Date().getFullYear()} Netflix. All copyrights reserved.</Text>
        <Text mb={4} cursor={'pointer'} color="red.500">Elyz.thedev@gmail.com</Text>
  
    </Container>
  );
};

export default Footer;