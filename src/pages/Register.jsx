import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please check your password and confirm password fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Account created.",
        description: "You have successfully registered.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error creating account",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box  maxW="sm" mx="auto" mt="10" p="4" borderWidth="1px" borderRadius="md">

    <Text textAlign={'center'} fontSize={'3xl'} mt={3} mb={4}>Create an Account</Text> 
     
      <form onSubmit={handleRegister}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <Text mb={1} fontWeight={'medium'}>Email</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl isRequired>
            <Text mb={1} fontWeight={'medium'}> Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>

          <FormControl isRequired>
             <Text mb={1} fontWeight={'medium'}> Confirm password</Text>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </FormControl>
              <Button
                      color="white"
                      bg={"red"}
                      _hover={"none"}
                      _active={"none"}
                      isLoading={isLoading}
                      type="submit"
                      loadingText="Logging in to your account"
                    >
                     Register
                    </Button>
        </Stack>
      </form>
      <Text mt={2}>
      Already have an account?{" "}
              <Button
                variant="link"
                color="red"
                fontWeight={'md'}
                _active={'none'}
                onClick={() => navigate("/login")}
              >
                Login here
              </Button>
              
            </Text>
    </Box>
  );
};

export default Register;

