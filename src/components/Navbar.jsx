import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box py="4" mb="2">
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"}>
            <Link to="/">
              <Box
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"red"}
                letterSpacing={"widest"}
                fontFamily={"mono"}
              >
                NETFLIX
              </Box>
            </Link>
            <Flex gap={4} alignItems={"center"}>
              <Link to={"/"}>Trang chủ</Link>
              <Link to={"/movies"}>Phim</Link>
              <Link to={"/shows"}>TV Series</Link>
              <Link to={"/search"}>Tìm kiếm</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
