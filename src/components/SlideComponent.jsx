import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { imagePath } from "../services/api";

const SlideComponent = ({ item, type }) => {
  return (
    <Link to={`/${type}/${item?.id}`}>
      <Flex
        direction={"row"} 
        wrap={"wrap"} 
        justifyContent={"center"} 
        alignItems={"center"} 
        maxW="full" 
        mx="auto" 
        gap={4} 
      >
        <Box
          position={"relative"}
          maxW="300px" 
        >
          <Image
            src={`${imagePath}/${item?.poster_path}`}
            alt={item?.title || item?.name}
            objectFit="cover" 
            width="100%" 
            height="100%" 
            borderRadius="md" 
          />
        
        </Box>
      </Flex>
    </Link>
  );
};

export default SlideComponent;
