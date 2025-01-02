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
  const reloadPage = () => {
    window.location.reload();
  }
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
          setTotalPage(Math.ceil(data?.length / itemsPerPage));
          // Cập nhật và hiển thị số trang tối đa
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
        <Flex gap={3}>
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
              display={'flex'}
              gap={2}
            >
              <Text>
                You have {count} movie{count > 1 ? "s" : ""} in your watchlist
              </Text>
            </Heading>
          )}
          <Heading textAlign={"right"}
              as="h3"
              fontSize={"sm"}
              fontWeight={"thin"}
              mt={1}
              display={'flex'}
              gap={2}>
          <Text>
              <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="20px"
              height="20px"
              fill="#fff"
              onClick={reloadPage}    
            >
              <path d="M 15 6 C 10.041282 6 6 10.04128 6 15 C 6 19.95872 10.041282 24 15 24 C 16.586491 24 18.07668 23.58246 19.373047 22.857422 L 17.888672 21.375 C 17.00816 21.772814 16.032235 22 15 22 C 11.122162 22 8 18.87784 8 15 C 8 11.12216 11.122162 8 15 8 C 18.877838 8 22 11.12216 22 15 L 19 15 L 23 20 L 27 15 L 24 15 C 24 10.04128 19.958718 6 15 6 z" />
            </svg>
              </Text>
          </Heading>
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
