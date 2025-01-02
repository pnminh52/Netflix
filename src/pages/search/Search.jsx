import { useEffect, useState } from "react";
import {
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Skeleton,
  Spinner,
  Fade,
} from "@chakra-ui/react";
import { searchData } from "../../services/api";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/PaginationComponent";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tempSearchValue, setTempSearchValue] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // Lọc mảng theoo điều kiện để trả về những bộ phim có đủ dữ liệu 
  useEffect(() => {
    if (!searchValue.trim()) {
      setData([]);
      return;
    }
    setIsLoading(true);
    searchData(searchValue, activePage)
      .then((res) => {
        // Lọc các bộ phim thỏa mãn điều kiện
        const filteredData = res?.results.filter((item) => {
          return (
            item.adult !== undefined &&
            item.backdrop_path !== undefined &&
            item.genre_ids !== undefined &&
            item.id !== undefined &&
            item.original_language !== undefined &&
            item.original_title !== undefined &&
            item.overview !== undefined &&
            item.popularity !== undefined &&
            item.poster_path !== undefined &&
            item.release_date !== undefined &&
            item.title !== undefined &&
            item.video !== undefined &&
            item.vote_average !== undefined &&
            item.vote_count !== undefined &&
            item.vote_count > 0 &&
            item.vote_average > 0 &&
            item.release_date !== "" &&
            item.adult === false
          );
        });

        setData(filteredData);
        setActivePage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => console.log(err, "err"))
      .finally(() => setIsLoading(false));
  }, [searchValue, activePage]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   searchData(searchValue, activePage)
  //     .then((res) => {
  //       console.log(res, "res");
  //       setData(res?.results);
  //       setActivePage(res?.page);
  //       setTotalPages(res?.total_pages);
  //     })
  //     .catch((err) => console.log(err, "err"))
  //     .finally(() => setIsLoading(false));
  // }, [searchValue, activePage]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(tempSearchValue);
  };

  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my={"10"} mt={"2"}>
        <Heading fontSize={"lg"} fontWeight={"medium"}>
          Search
        </Heading>
      </Flex>

      <form onSubmit={handleSearch}>
        <Input
          borderRadius={"0px"}
          placeholder="Search movies, tv shows..."
          _placeholder={{ color: "gray.400" }}
          value={tempSearchValue}
          onChange={(e) => setTempSearchValue(e.target.value)}
        />
      </form>

      {isLoading && (
        <Flex justifyContent={"center"} mt="10">
          <Spinner size={"xl"} color="red" />
        </Flex>
      )}

      {data?.length === 0 && !isLoading && (
        <Heading
          mt={12}
          textAlign={"center"}
          as="h3"
          fontSize={"lg"}
          fontWeight={"thin"}
          justifyContent="center"
          alignItems="center"
        >
          No results found
        </Heading>
      )}

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={"4"}
        mt="6"
      >
        {data?.length > 0 &&
          !isLoading &&
          data?.map((item, i) => (
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

      {data?.length > 0 && !isLoading && (
        <PaginationComponent
          activePage={activePage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      )}
    </Container>
  );
};

export default Search;
