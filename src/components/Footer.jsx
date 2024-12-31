import React from "react";
import { Box, Text, Link, Stack, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container mt={0} maxW={"container.xl"} as="footer">
      <Box display={"grid"} gridTemplateColumns="repeat(4,1fr)" gap={4}>
        <Box>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            FAQ
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Investor Relations
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Privacy
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Speed Test
          </Text>
        </Box>
        <Box>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Help Center
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Jobs
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Cookie Preferences
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Legal Notices
          </Text>
        </Box>
        <Box>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Account
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Ways to Watch
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Corporate Information
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Only on Netflix
          </Text>
        </Box>
        <Box>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Media Center
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Terms of Use
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Contact Us
          </Text>
        </Box>
      </Box>
      <Box>
        <Text>
          Netflix Vietnam
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
