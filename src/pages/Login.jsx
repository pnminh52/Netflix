import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Icon,
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Adjust the path if needed
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const { user, signInWithGoogle } = useAuth();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/homepage");
      toast({
        title: "Login Successful",
        description: "You have successfully logged in!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      // console.log('err', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sign in using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/homepage");
      // Show success toast
      toast({
        title: "Login Successful",
        description: "You have successfully logged in!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10" p="4" borderWidth="1px" borderRadius="md">
      <Text textAlign={"center"} fontSize={"3xl"} mt={3} mb={4}>
        Log-in to your account
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <Text mb={1} fontWeight={"medium"}>
              Email
            </Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <Text mb={1} fontWeight={"medium"}>
              {" "}
              Password
            </Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            color="white"
            _hover={{ bg: "#b20710" }}
            _active={{
              bg: "red",
            }}
              bg="#E50914"
            isLoading={loading}
            type="submit"
            loadingText="Logging in to your account"
          >
            Log In
          </Button>
        </Stack>
      </form>
      <Text mt={2}>
        Don't have an account?{" "}
        <Button
          variant="link"
          color="red"
          fontWeight={"md"}
          _active={"none"}
          onClick={() => navigate("/register")}
        >
          Register here
        </Button>
      </Text>
      <Box>
        <Flex align="center" mt={4} mb={4}>
          <Box flex="1" borderBottom="1px" borderColor="gray.300" />
          <Text mx={2} textAlign="center" color="gray.300">
            Or login with
          </Text>
          <Box flex="1" borderBottom="1px" borderColor="gray.300" />
        </Flex>
        <Box mb={2} alignItems="center" justifyContent="center" gap={2}>
          <Icon
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            w={"full"}
            borderRadius={'5px'}
            h={"35px"}
            cursor={"pointer"}
            viewBox="0 0 48 48"
            bg="white"
            p="4px"
            onClick={handleGoogleLogin}
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
