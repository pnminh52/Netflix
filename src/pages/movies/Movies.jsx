import {
  Container,
  Flex,
  Grid,
  Heading,
  Select,
  Box,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/PaginationComponent";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [totalPages, setTotalPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    fetchMovies(activePage, sortBy)
      .then((res) => {
        console.log(res, "res");
        setActivePage(res?.page);
        setMovies(res?.results);
        setTotalPage(res?.total_pages);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage, sortBy]);
  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my="10">
        <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
          Discover Movies
        </Heading>

        <Flex alignItems={"center"} gap={"0"} borderRadius={"10px"}>
          <Box
            onClick={() => {
              setActivePage(1);
              setSortBy("popularity.desc");
            }}
            as="button"
            px="3"
            py="1"
            borderBottom={
              sortBy === "popularity.desc"
                ? "2px solid red"
                : "2px solid transparent"
            }
            color={`${sortBy !== "popularity.desc" ? "gray.500" : "white"}`}
            bg={`${sortBy === "popularity.desc" ? "gray.800" : ""}`}
            transition={"all 0.5s ease-in-out"}
          >
            Popular
          </Box>
          <Box
            onClick={() => {
              setActivePage(1);
              setSortBy("vote_average.desc&vote_count.gte=1000");
            }}
            as="button"
            px="3"
            py="1"
            borderBottom={
              sortBy === "vote_average.desc&vote_count.gte=1000"
                ? "2px solid red"
                : "2px solid transparent"
            }
            color={`${
              sortBy !== "vote_average.desc&vote_count.gte=1000"
                ? "gray.500"
                : "white"
            }`}
            bg={`${
              sortBy === "vote_average.desc&vote_count.gte=1000"
                ? "gray.800"
                : ""
            }`}
            transition={"all 0.5s ease-in-out"}
          >
            Top Rated
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
        {movies &&
          movies?.map((item, i) =>
            isLoading ? (
              <Skeleton height={300} key={i} />
            ) : (
              <CardComponent key={item?.id} item={item} type={"movie"} />
            )
          )}
      </Grid>

      <PaginationComponent
        activePage={activePage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      />
    </Container>
  );
};

export default Movies;
