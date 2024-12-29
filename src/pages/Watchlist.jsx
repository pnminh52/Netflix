import { useState, useEffect } from "react";
import { useFirestore } from "../services/firestore";
import { useAuth } from "../context/useAuth";
import {Box, Container, Flex, Grid, Heading, Spinner, Text } from "@chakra-ui/react";
import WatchlistCard from "../components/WatchlistCard";
import PaginationComponent from "../components/PaginationComponent";
import { fetchTrending } from "../services/api";

const Watchlist = () => {
  const { getWatchlist } = useFirestore();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchTrending(activePage)
      .then((res) => {
        console.log(res, "res");
        setMovies(res?.results);
        setActivePage(res?.page);
        setTotalPage(res?.total_pages);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);
  console.log(data, "data");
  useEffect(() => {
    if (user?.uid) {
      getWatchlist(user?.uid)
        .then((data) => {
          setWatchlist(data);
          setCount(data?.length || 0);
          // console.log(data, "data");
        })
        .catch((err) => {
          // console.log(err, "error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user?.uid, getWatchlist]);

  return (
    <Container maxW={"container.xl"}>
            <Flex alignItems={"baseline"} my={"10"} mt={"0"}>

        <Flex gap={2}>
          <Text  fontSize={"lg"} fontWeight={"medium"}>Watchlist</Text>
          {count > 0 && !isLoading && (
          <Heading
            textAlign={"left"}
            as="h3"
            fontSize={"sm"}
            fontWeight={"thin"}
            mt={1}
          
          >
            <Text>You have {count} movie{count > 1 ? 's' : ''} in your watchlist</Text>
          </Heading>
        )}
        </Flex>
        </Flex>
        {count === 0 && !isLoading && (
          <Heading
            textAlign={"center"}
            as="h3"
            fontSize={"sm"}
            fontWeight={"thin"}
            mt="6"
          >
            Your watchlist is empty
          </Heading>
        )}


      {isLoading && (
        <Flex justify={"center"} >
          {/* <Spinner size={"xl"} color="red" /> */}
          <Heading
          textAlign={"center"}
          as="h3"
          fontSize={"sm"}
          fontWeight={"thin"}
          mb="6"
          
        >You must login to use this feature</Heading>
        </Flex>
      )}
      {!isLoading && watchlist?.length > 0 && (
        <Grid
          templateColumns={{
            base: "1fr",
          }}
          gap={"4"}
        >
          {watchlist?.map((item) => (
            <WatchlistCard
              key={item?.id}
              item={item}
              type={item?.type}
              setWatchlist={setWatchlist}
            />
          ))}
        </Grid>
      )}
      {/* <Box mb={4}></Box> */}
            <PaginationComponent
              activePage={activePage}
              totalPages={totalPages}
              setActivePage={setActivePage}
            />
    </Container>
  );
};

export default Watchlist;
