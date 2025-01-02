import { useState, useEffect } from "react";
import { useFirestore } from "../services/firestore";
import { useAuth } from "../context/useAuth";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
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
  const itemsPerPage = 5;
  const currentPageData = watchlist.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );
  useEffect(() => {
    if (currentPageData.length === 0 && activePage > 1) {
      setActivePage(activePage - 1); 
      // Function này sẽ chuyển activePage về trang trước đó nếu trang hiện tại không có dữ liệu
    }
  }, [currentPageData, activePage]);
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
      <Flex alignItems={"baseline"} my={"10"} mt={"2"}>
        <Flex gap={2}>
          <Heading fontSize={"lg"} fontWeight={"medium"}>
            Watchlist
          </Heading>
          {count > 0 && !isLoading && (
            <Heading
              textAlign={"right"}
              as="h3"
              fontSize={"sm"}
              fontWeight={"thin"}
              mt={1}
            >
              <Text>
                You have {count} movie{count > 1 ? "s" : ""} in your watchlist
              </Text>
            </Heading>
          )}
        </Flex>
      </Flex>
      {count === 0 && !isLoading && (
        <Heading
          textAlign={"center"}
          as="h3"
          fontSize={"lg"}
          fontWeight={"thin"}
          justifyContent="center"
          alignItems="center"
        >
          Your watchlist is empty
        </Heading>
      )}
      {!isLoading && currentPageData?.length > 0 && (
        // Dùng currentPageData thay vì watchList
        <>
          <Grid
            templateColumns={{
              base: "1fr",
            }}
            gap={"4"}
          >
            {currentPageData?.map((item) => (
              // Dùng currentPageData thay vì watchList
              <WatchlistCard
                key={item?.id}
                item={item}
                type={item?.type}
                setWatchlist={setWatchlist}
                setCount={setCount} // setCount cập nhật số lượng phim trong list
              />
            ))}
          </Grid>
          {!isLoading && (
            <PaginationComponent
              activePage={activePage}
              totalPages={totalPages}
              setActivePage={setActivePage}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Watchlist;
