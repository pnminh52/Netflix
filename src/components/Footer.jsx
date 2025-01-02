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
        gap={1}
        alignItems="start"
      >
        {["FAQ", "Investor Relations", "Privacy", "Speed Test"].map(
          (text, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text
                mb={2}
                cursor={"pointer"}
                textDecoration={"underline"}
                color={"gray.300"}
              >
                {text}
              </Text>
            </Box>
          )
        )}
        {["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"].map(
          (text, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text
                mb={2}
                cursor={"pointer"}
                textDecoration={"underline"}
                color={"gray.300"}
              >
                {text}
              </Text>
            </Box>
          )
        )}
        {[
          "Account",
          "Ways to Watch",
          "Corporate Information",
          "Only on Netflix",
        ].map((text, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Text
              mb={2}
              cursor={"pointer"}
              textDecoration={"underline"}
              color={"gray.300"}
            >
              {text}
            </Text>
          </Box>
        ))}
        {["Media Center", "Terms of Use", "Contact Us"].map((text, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Text
              mb={2}
              cursor={"pointer"}
              textDecoration={"underline"}
              color={"gray.300"}
            >
              {text}
            </Text>
          </Box>
        ))}
      </Box>
      {/* Căn đều các text element trong footer */}
      <Box
        mb={8}
        display="flex"
        justifyContent="left"
        alignItems="center"
        gap={4}
      >
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
