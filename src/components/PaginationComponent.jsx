import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
const PaginationComponent = ({ activePage, totalPages, setActivePage }) => {
  return (
    <>
      <Flex mt={7} mb={4} gap={2} alignItems={"center"}>
          <Button
            borderRadius={"0"}
            onClick={() => setActivePage(activePage - 1)}
            isDisabled={activePage === 1}
          >
            Prev
          </Button>
          <Button
            borderRadius={"0"}
            onClick={() => setActivePage(activePage + 1)}
            isDisabled={activePage === totalPages}
          >
            Next
          </Button>
      
        <Flex gap={1}>
          <Text>{activePage}</Text>
          <Text>of</Text>
          <Text>{totalPages}</Text>
        </Flex>
      </Flex>
    </>
  );
};

PaginationComponent.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default PaginationComponent;
