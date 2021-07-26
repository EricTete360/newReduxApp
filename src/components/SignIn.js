import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link,useHistory } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Button
  } from "@chakra-ui/react"

import { SignIn  } from "../store/actions/authActions";

const SignInForm = (props) =>{
    const auth = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setuser] = useState({
        email:"",
        password:"",
    });

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = (e) =>{
        // e.preventDefault();
        dispatch(SignIn(user.email,user.password));
        setuser({
            email:"",
            password:"",
        });
      
        history.push('/home');
      
        // alert('Token Loaded')
    }

    return (
        <>
           
            <form onSubmit={handleSubmit}>
 
            {/* <input type='email' placeholder="email" value={user.email} onChange={ (e) => setuser({ ...user,email:e.target.value }) }/><br /><br />
            <input type='password' placeholder="password" value={user.password} onChange={ (e) => setuser({ ...user,password:e.target.value }) }/><br /><br />
 
            <button type="submit" > Signin </button> */}

<FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter Email Address" value={user.email} onChange={ (e) => setuser({ ...user,email:e.target.value }) } />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        value={user.password} onChange={ (e) => setuser({ ...user,password:e.target.value }) }
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button
            mt={4}
            colorScheme="green"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Login
          </Button>
            </form>
      
        </>
    );
     
}

export default SignInForm;