import {
  Container,
  Flex,
  Grid,
  Heading,
  Select,
  Skeleton,
  Fade,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTvSeries } from "../../services/api";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/PaginationComponent";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTvSeries(activePage, sortBy)
      .then((res) => {
        console.log(res, "res");
        setShows(res?.results);
        setActivePage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => console.log(err, "err"))
      .finally(() => setIsLoading(false));
  }, [activePage, sortBy]);

  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my="10" mt={"2"}>
        <Heading fontSize={"lg"} fontWeight={"medium"}>
         TV-Shows
        </Heading>

        <Flex alignItems={"center"} gap={"0"} borderRadius={"10px"}>
          <Box
            position="relative"
            onClick={() => {
              setActivePage(1);
              setSortBy("popularity.desc");
            }}
            as="button"
            px="3"
            py="1"
            color={sortBy !== "popularity.desc" ? "gray.500" : "white"}
            // bg={sortBy === "popularity.desc" ? "gray.800" : ""}
            transition="all 0.3s ease-in-out"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: sortBy === "popularity.desc" ? "0" : "50%",
              width: sortBy === "popularity.desc" ? "100%" : "0",
              height: "2px",
              backgroundColor: "red",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Popular
          </Box>
          <Box
            position="relative"
            onClick={() => {
              setActivePage(1);
              setSortBy("vote_average.desc&vote_count.gte=1000");
            }}
            as="button"
            px="3"
            py="1"
            color={
              sortBy !== "vote_average.desc&vote_count.gte=1000"
                ? "gray.500"
                : "white"
            }
            // bg={
            //   sortBy === "vote_average.desc&vote_count.gte=1000"
            //     ? "gray.800"
            //     : ""
            // }
            transition="all 0.3s ease-in-out"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left:
                sortBy === "vote_average.desc&vote_count.gte=1000"
                  ? "0"
                  : "50%",
              width:
                sortBy === "vote_average.desc&vote_count.gte=1000"
                  ? "100%"
                  : "0",
              height: "2px",
              backgroundColor: "red",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Vote
          </Box>
          <Box
            position="relative"
            onClick={() => {
              setActivePage(1);
              setSortBy("revenue.desc");
            }}
            as="button"
            px="3"
            py="1"
            color={sortBy !== "revenue.desc" ? "gray.500" : "white"}
            // bg={sortBy === "revenue.desc" ? "gray.800" : ""}
            transition="all 0.3s ease-in-out"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: sortBy === "revenue.desc" ? "0" : "50%",
              width: sortBy === "revenue.desc" ? "100%" : "0",
              height: "2px",
              backgroundColor: "red",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Revenue
          </Box>
        </Flex>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={"4"}
      >
        {shows &&
          shows?.map((item, i) => (
            <Fade
              key={item?.id}
              in={!isLoading}
              transition={"all 0.3s easy-in-out"}
            >
              {isLoading ? (
                <Skeleton height={300} key={i} />
              ) : (
                <CardComponent key={item?.id} item={item} type={"movie"} />
              )}
            </Fade>
          ))}
      </Grid>

          {!isLoading && (
        <PaginationComponent
          activePage={activePage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      )}
    </Container>
  );
};

export default Shows;
