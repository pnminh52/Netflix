import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import { fetchTrending } from "../services/api";
import CardComponent from "../components/CardComponent";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeWindow, setTimeWindow] = useState("day");

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

  console.log(data, "data");

  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my={"10"}>
        <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
          Trending
        </Heading>
        <Flex alignItems={"center"} gap={"0"} borderRadius={"10px"}>
          <Box
            as="button"
            px="3"
            py="1"
            borderBottom={
              timeWindow === "day" ? "2px solid red" : "2px solid transparent"
            }
            color={`${timeWindow != "day" ? "gray.500" : "white"}`}
            bg={`${timeWindow === "day" ? "gray.800" : ""}`}
            transition="all 0.5s ease-in-out"
            onClick={() => setTimeWindow("day")}
          >
            Today
          </Box>
          <Box
            as="button"
            px="3"
            py="1"
            borderBottom={
              timeWindow === "week" ? "2px solid red" : "2px solid transparent"
            }
            color={`${timeWindow != "week" ? "gray.500" : "white"}`}
            bg={`${timeWindow === "week" ? "gray.800" : ""}`}
            transition="all 0.5s ease-in-out"
            onClick={() => setTimeWindow("week")}
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
        {data &&
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
          )}
      </Grid>
    </Container>
  );
};

export default Home;
