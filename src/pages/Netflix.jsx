import { Box, Button, Container, Flex, Text, Heading } from "@chakra-ui/react";
import "../css/index.css";

const Netflix = () => {
  return (
    <div>
      <Box position={"relative"} w={"100%"} h={"100%"} overflow={"hidden"}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/VN-en-20241223-TRIFECTA-perspective_b9fd6492-3d40-4af5-8d2d-0a325a17775a_large.jpg"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Box
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          bg={"rgba(0, 0, 0, 0.7)"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"white"}
          textAlign={"center"}
          px={4}
          zIndex={1}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={["2xl", "3xl", "4xl"]}
            mb={4}
          >
            Unlimited movies, TV shows, and more
          </Heading>
          <Text fontSize={["sm", "md"]} fontWeight={"normal"} mb={4}>
            Starts at 70,000 ₫. Cancel anytime
          </Text>
          <Button
            _hover={{ bg: "red.500" }}
            bg={"red.600"}
            borderRadius={0}
            color={"white"}
            px={[6, 8]}
            py={[3, 4]}
          >
            Finish Sign-up
          </Button>
        </Box>
        <div className="default-ltr-cache-dulgtd">
          <div className="curve-container">
            <div className="default-ltr-cache-1f97ztc"></div>
          </div>
          <div className="default-ltr-cache-jtcpfi"></div>
        </div>
      </Box>
      <Container maxW={"container.xl"} px={4}>
        <Box>content from here</Box>
      </Container>
    </div>
  );
};

export default Netflix;
