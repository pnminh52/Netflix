import React, { useState, useEffect } from "react";
import { Button, Box, Container } from "@chakra-ui/react";

const DynamicItem = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById("dynamic");
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Container
          position="fixed"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="999"
          maxW="container.xl"
          width="full"
          boxShadow="0 0 50px 50px rgba(0, 0, 0, 0.6)"
          display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        >
          <Button
            rounded={"sm"}
            _hover={{ bg: "#b20710" }}
            bg="#E50914"
            size="md"
            width="full"
            fontSize={"md"}
            fontWeight={"normal"}
          >
            Get Started
          </Button>
          <Box
    position="absolute"
    bottom="-20px"
    left="0"
    width="full"
    height="20px" 
    backgroundColor="black" 
    opacity="1" 
  />
        </Container>
      )}
    </>
  );
};

export default DynamicItem;
