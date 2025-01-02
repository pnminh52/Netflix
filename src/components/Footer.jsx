import React from "react";
import { Box, Text, Select, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container mt={14} maxW={"container.xl"} as="footer" id="dynamic">
      <Box
        mb={8}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        alignItems="start"
      >
        <Box>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            FAQ
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Investor Relations
          </Text>
          <Text
            mb={2}
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
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Help Center
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Jobs
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            mb={2}
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
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Account
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Ways to Watch
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            mb={2}
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
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Media Center
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Terms of Use
          </Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          ></Text>
          <Text
            mb={2}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"gray.300"}
          >
            Contact Us
          </Text>
        </Box>
      </Box>
      <Box mb={8} display="flex" justifyContent="left" alignItems="center" gap={4}>
        <Select
          width="auto"
          bg="black"
          color="white"
          borderColor="gray.600"
          borderRadius="md"
          size="sm"
        >
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </Select>
      </Box>
      <Box mb={20}>
        <Text cursor={"pointer"} color={"gray.300"}>
          Netflix Vietnam
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
