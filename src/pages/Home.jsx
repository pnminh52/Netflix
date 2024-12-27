import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Skeleton,
  Fade,
} from "@chakra-ui/react";
import { fetchTrending } from "../services/api";
import CardComponent from "../components/CardComponent";
// import PaginationComponent from "../components/PaginationComponent";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeWindow, setTimeWindow] = useState("day");
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetchTrending(timeWindow)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [timeWindow]);
  // useEffect(() => {
  //   fetchTrending(activePage)
  //     .then((res) => {
  //       console.log(res, "res");
  //       setMovies(res?.results);
  //       setActivePage(res?.page);
  //       setTotalPage(res?.total_pages);
  //     })
  //     .catch((err) => {
  //       console.log(err, "err");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [activePage]);
  // console.log(data, "data");

  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my={"10"} mt={"0"}>
        <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
          Trending
        </Heading>
        <Flex alignItems={"center"} gap={"0"} borderRadius={"10px"}>
          <Box
            position="relative"
            as="button"
            px="3"
            py="1"
            color={`${timeWindow != "day" ? "gray.500" : "white"}`}
            // bg={`${timeWindow === "day" ? "gray.800" : ""}`}
            transition="all 0.3s ease-in-out"
            onClick={() => setTimeWindow("day")}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: timeWindow === "day" ? "0" : "50%",
              width: timeWindow === "day" ? "100%" : "0",
              height: "2px",
              backgroundColor: "red",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Today
          </Box>
          <Box
            position={"relative"}
            as="button"
            px="3"
            py="1"
            color={`${timeWindow != "week" ? "gray.500" : "white"}`}
            // bg={`${timeWindow === "week" ? "gray.800" : ""}`}
            transition="all 0.3s ease-in-out"
            onClick={() => setTimeWindow("week")}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: timeWindow === "week" ? "0" : "50%",
              width: timeWindow === "week" ? "100%" : "0",
              height: "2px",
              backgroundColor: "red",
              transition: "all 0.3s ease-in-out",
            }}
          >
            This Week
          </Box>
        </Flex>
      </Flex>
      {/* {loading && <div >Loadin...</div>} */}
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={"4"}
      >
        {/* {data &&
          data?.map((item, i) =>
            loading ? (
              <Skeleton height={300} key={i} />
            ) : (
              <CardComponent
                key={item?.id}
                item={item}
                type={item?.media_type}
              />
            )
          )} */}
        {data?.map((item, i) => (
          <Fade key={item?.id} in={!loading} transition="all 0.3s ease-in-out">
            {loading ? (
              <Skeleton height={300} />
            ) : (
              <CardComponent
                key={item?.id}
                item={item}
                type={item?.media_type}
              />
            )}
          </Fade>
        ))}
      </Grid>
      <Box mt={4} position="relative" mb={4} textAlign="center"></Box>
      {/* <PaginationComponent
        activePage={activePage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      /> */}
    </Container>
  );
};

export default Home;
