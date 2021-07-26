import axios from 'axios';
import { toast } from 'react-toastify';

export const SignUp = (user) => {
    return (dispatch) => {
        axios.post(`https://myapi.herokuapp.com/api/doctor/register`,user).then((token)=>{ 
            
            dispatch({
                type:"SIGN_UP",
                user: token,
            });
         }).catch((error)=>{
            // console.log(error.response);
            toast.error(error.response ?.data,{
                position: toast.POSITION.TOP_RIGHT,
            });
         });
    }
}

export const SignIn = (email, password) => {
    return (dispatch) => {
        axios.post(`https://myapi.herokuapp.com/api/doctor/login`,{email,password}).then((token)=>{ 
            // console.log(email)
            // console.log(password)
            // console.log(token.data)
            localStorage.setItem("userToken",token.data['token']);
            dispatch({
                type:"SIGN_IN",
                token: token.data,
            });
         }).catch((error)=>{
            // console.log(error.response);
            toast.error(error.response ?.data,{
                position: toast.POSITION.TOP_RIGHT,
            });
         });
    }
}

export const Token = (token) => {
    return (dispatch) => {
        axios.get(`https://myapi.herokuapp.com/api/doctor/`,{
            headers:{
                "Authorization":token,
                'content-type': 'application/json',
            }
        }).then((obj)=>{ 
            // console.log(email)
            // console.log(password)
            // console.log(token.data)
            // localStorage.setItem("userToken",token.data['token']);
            console.log(obj.data['id'])
            console.log(obj.data['email'])
            console.log(obj.data['name'])
            console.log(obj.data['mobile'])
            dispatch({
                type:"TOKEN_DISPLAY",
                // token: token.data,
            });
         }).catch((error)=>{
            // console.log(error.response);
            toast.error(error.response ?.data,{
                position: toast.POSITION.TOP_RIGHT,
            });
         });
    }
}
