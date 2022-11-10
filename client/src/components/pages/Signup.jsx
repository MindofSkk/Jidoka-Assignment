import { useEffect, useState } from "react";
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../Redux/auth/auth.action";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Data, setData] = useState({});
  const loacation = useLocation();
 const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);
  const handlecgang = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    axios.post("http://localhost:8080/user/signup",Data)
    .then(res => {
      alert("You are succeffully register");
      navigate("/login")
    })
    .catch(err =>console.log(err));
    
  };


  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handlesubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >


                  {/* -------------------- */}
      <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handlecgang}
                  />
                </InputGroup>
              </FormControl>
      {/* ------------------- */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    onChange={handlecgang}
                  />
                </InputGroup>
              </FormControl>
  

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    name="password"
                    onChange={handlecgang}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link to="/login">
          <strong style={{ color: "teal.500" }}>Login</strong>
        </Link>
      </Box>
    </Flex>
  );
};