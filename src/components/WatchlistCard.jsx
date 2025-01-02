import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { imagePath } from "../services/api";
import { useFirestore } from "../services/firestore";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { CheckIcon, StarIcon, DeleteIcon } from "@chakra-ui/icons";

const WatchlistCard = ({ type, item, setWatchlist, setCount }) => {
  const { removeFromWatchlist } = useFirestore();
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();
  const handleRemoveClick = (event) => {
    event.preventDefault();
    // Ngăn không cho hành động mặc định (như tải lại trang hoặc điều hướng) xảy ra
    removeFromWatchlist(user?.uid, item.id).then(() => {
    // Hàm gọi API trong file  Firestore.js để xóa mục khỏi danh sách watchlist của người dùng  
      setWatchlist((prev) => {
        const updateList = prev.filter((el) => el.id !== item.id);
    // Tạo một mảng mới (updateList) chỉ chứa các phần tử có id khác với item.id
        setCount(updateList.length);
    // Cập nhật state count để hiển thị số lượng mục còn lại (Đếm số lượng mục còn lại trong danh sách mới)
        return updateList;
    // Trả về danh sách mới
      });
    });
  };
  return (
    <>
      <Box>
        <Link to={`/${type}/${item.id}`}>
          <Flex gap="4">
            <Box position={"relative"} w={"150px"}>
              <Image
                src={`${imagePath}/${item.poster_path}`}
                alt={item.title}
                height={"200px"}
                minW={"150px"}
                objectFit={"cover"}
              />
              <Tooltip label="Remove from watchlist">
                <IconButton
                  borderRadius={0}
                  aria-label="Remove from watchlist"
                  icon={isHovered ? <DeleteIcon /> : <CheckIcon />}
                  size={"sm"}
                  colorScheme={isHovered ? "red" : "green"}
                  position={"absolute"}
                  zIndex={"999"}
                  top="4px"
                  left={"4px"}
                  onClick={handleRemoveClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </Tooltip>
            </Box>

            <Box>
              <Heading fontSize={{ base: "xl", md: "2xl" }} noOfLines={1}>
                {item?.title || item?.name}
              </Heading>
              <Heading
                fontSize={"sm"}
                fontWeight={"md"}
                color={"green.200"}
                mt="2"
              >
                {new Date(
                  item?.release_date || item?.first_air_date
                ).getFullYear() || "N/A"}
              </Heading>
              <Flex alignItems={"center"} gap={2} mt="2">
                <StarIcon fontSize={"small"} />
                <Text textAlign={"center"} fontSize="small">
                  {item?.vote_average?.toFixed(1)}
                </Text>
              </Flex>
              <Text mt="2" fontSize={{ base: "xs", md: "sm" }} noOfLines={5}>
                {item?.overview}
              </Text>
            </Box>
          </Flex>
        </Link>
      </Box>
    </>
  );
};

export default WatchlistCard;
