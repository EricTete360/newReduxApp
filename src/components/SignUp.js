import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link, useHistory } from "react-router-dom";
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
import { SignUp, Token  } from "../store/actions/authActions";


const SignUpForm = (props) =>{
    const token = localStorage.getItem('userToken');
    const auth = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const [user, setuser] = useState({
        name:"",
        mobile:"",
        email:"",
        password:"",
        password2:"",
    });

    useEffect(() => {
        dispatch(Token(token));
    }, [dispatch])
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const history = useHistory(); 


    const handleSubmit = (e) =>{
        // e.preventDefault();
        dispatch(SignUp(user));
        setuser({
            name:"",
            mobile:"",
            email:"",
            password:"",
            password2:"",
        });
        history.push('/account')

        alert('Data Submitted')
    }

    return (
        <>
            {/* <h1> Signup Form </h1>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Username" value={user.name} onChange={ (e) => setuser({ ...user,name:e.target.value }) }/> <br /><br />
            <input type='text' placeholder="mobile" value={user.mobile} onChange={ (e) => setuser({ ...user,mobile:e.target.value }) }/><br /><br />
            <input type='email' placeholder="email" value={user.email} onChange={ (e) => setuser({ ...user,email:e.target.value }) }/><br /><br />
            <input type='password' placeholder="password" value={user.password} onChange={ (e) => setuser({ ...user,password:e.target.value }) }/><br /><br />
            <input type='password' placeholder="password2" value={user.password2} onChange={ (e) => setuser({ ...user,password2:e.target.value }) }/><br /><br />
            <button type="submit" > Signup </button>
            </form> */}
            <form onSubmit={handleSubmit}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter Your name" value={user.name} onChange={ (e) => setuser({ ...user,name:e.target.value }) } />
                </FormControl>
                <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input placeholder="Enter Your mobile" value={user.mobile} onChange={ (e) => setuser({ ...user,mobile:e.target.value }) } />
                </FormControl>
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
                <FormControl id="password2" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Confirm password"
                        value={user.password2} onChange={ (e) => setuser({ ...user,password2:e.target.value }) }
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
            onClick={handleSubmit}
            colorScheme="green"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Register
          </Button>
            </form> 
        </>
    );
     
}

export default SignUpForm;