// import React, { useState, useEffect } from "react";
// import { fetchUpcomingMovies } from "../services/api";
// import CardComponent from "../components/CardComponent";
// import {
//   Container,
//   Flex,
//   Heading,
//   Box,
//   Grid,
//   Fade,
//   Skeleton,
//   Text
// } from "@chakra-ui/react";
// import PaginationComponent from "../components/PaginationComponent";

// const Upcoming = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activePage, setActivePage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [count, setCount] = useState(0);  
//   useEffect(() => {
//     setIsLoading(true);
//     fetchUpcomingMovies(activePage)
//       .then((data) => {
//         setMovies(data.results);
//         setTotalPages(data.total_pages);
//         setCount(data.results.length || 0)
//       })
//       .catch((err) => {
//         console.error(err);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [activePage]);

//   return (
//     <Container maxW="container.xl">
//       <Flex alignItems={"baseline"} gap={4} my={"10"} mt={"2"}>
//         <Flex gap={2}>
//           <Heading fontSize={"lg"} fontWeight={"medium"}>
//             Upcoming Movies
//           </Heading>
//           {count > 0 && !isLoading && (
//             <Heading textAlign={"right"}
//             as="h3"
//             fontSize={"sm"}
//             fontWeight={"thin"}
//             mt={1}>
//                 <Text>
//                     There are {count} upcoming movies
//                 </Text>
//             </Heading>
//           )}
//         </Flex>
//       </Flex>
//       {count === 0 && !isLoading && (
//         <Heading
//           textAlign={"center"}
//           as="h3"
//           fontSize={"lg"}
//           fontWeight={"thin"}
//           justifyContent="center"
//           alignItems="center"
//         >
//           There is no upcoming movies
//         </Heading>
//       )}
 
//       <Grid
//         templateColumns={{
//           base: "2fr",
//           sm: "repeat(2, 1fr)",
//           md: "repeat(4, 1fr)",
//           lg: "repeat(5, 1fr)",
//         }}
//         gap="4"
//       >
//        {isLoading
//   ? Array.from({ length: 10 }).map((_, i) => (
//       <Skeleton height="300px" key={i} />
//     ))
//   : movies?.length > 0 &&
//     movies.map((item) => (
//       <Fade in={!isLoading} key={item.id}>
//         <CardComponent key={item.id} item={item} type="movie" />
//       </Fade>
//     ))}
//       </Grid>

//       {!isLoading && movies?.length>0 && (
//         <PaginationComponent
//           activePage={activePage}
//           totalPages={totalPages}
//           setActivePage={setActivePage}
//         />
//       )}
//     </Container>
//   );
// };

// export default Upcoming;
