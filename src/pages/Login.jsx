import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Adjust the path if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

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
    <Box maxW="md" mx="auto" mt="10" p="4" borderWidth="1px" borderRadius="md">
      <Text >Login Page</Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            color="white"
        bg={'red'}
        _hover={'none'}
        _active={'none'}
            isLoading={loading}
            type="submit"
            loadingText="Logging in"
          >
            Log In
          </Button>
        </Stack>
      </form>
      <Text mt={4}>
        Don't have an account?{" "}
        <Button variant="link" color="red" onClick={() => navigate("/register")}>
          Register here
        </Button>
      </Text>
    </Box>
  );
};

export default Login;
