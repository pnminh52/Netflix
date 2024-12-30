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

import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../services/firebase"; // Adjust the path if needed
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const {user, signInWithGoogle}=useAuth();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleGoogleLogin=async()=>{
    try {
      await signInWithGoogle();
      navigate("/homepage")
    } catch (error) {
      // console.log('err', error);
      
      
    }
  }
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
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box  maxW="sm" mx="auto" mt="10" p="4" borderWidth="1px" borderRadius="md">
<Text textAlign={'center'} fontSize={'3xl'} mt={3} mb={4}>Log-in to your account</Text> 
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <Text mb={1} fontWeight={'medium'}>Email</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <Text mb={1} fontWeight={'medium'}> Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            color="white"
            bg={"red"}
            _hover={"none"}
            _active={"none"}
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
          fontWeight={'md'}
          _active={'none'}
          onClick={() => navigate("/register")}
        >
          Register here
        </Button>
        
      </Text>
      <Box >
      <Flex align="center" mt={4} mb={4}>
  <Box flex="1" borderBottom="1px" borderColor="gray.300" />
  <Text mx={2} textAlign="center" color="gray.300">
    Or login with
  </Text>
  <Box flex="1" borderBottom="1px" borderColor="gray.300" />
</Flex>      
        <Flex mb={2}  alignItems="center" justifyContent="center" gap={2}>
  <Icon
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    w={'35px'}
    h={'35px'}
    cursor={'pointer'}
    viewBox="0 0 48 48"
    borderRadius="50%"
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

  <Icon
    as="svg"
    cursor={'pointer'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="40px"
    height="40px"
  >
    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#2aa4f4"></stop>
      <stop offset="1" stopColor="#007ad9"></stop>
    </linearGradient>
    <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
    <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
  </Icon>

  <Icon
    as="svg"
    cursor={'pointer'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="40px"
    height="40px"
  >
    <path fill="white" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
  </Icon>
</Flex>
      </Box>
      
    </Box>
  );
};

export default Login;
