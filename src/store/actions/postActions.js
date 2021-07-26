import axios from 'axios';

export const getPosts = () => async (dispatch) => {

    try {
        const res = await axios.get('http://localhost:3000/posts')
        console.log(res)
        dispatch({
            type: "GET_POSTS",
            payload: res
        })
    } catch (error) {
        return Promise.reject(error);
    }

    // return (dispatch) => { 
    //     axios.get('http://localhost:3000/posts').then((posts)=>{
    //         console.log(posts)
    //         dispatch({
    //             type:"GET_POSTS",
    //             posts,
    //         });
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // };
}

export const addPost = (newPost) => {
    return (dispatch, getState)=>{
        const title = getState().auth.title;
        const author = getState().auth.author;

        axios.post('http://localhost:3000/posts',{...newPost,author,title})
             .then((obj)=>{
                 dispatch({
                     type:"ADD_POST",
                     obj,
                 })
             }).catch((err)=>{
                 console.log(err.response);
             })
    }
}