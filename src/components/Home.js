import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeNavbar from '../Layout/HomeNavbar'
import { getPosts } from '../store/actions/postActions';

const Home = () => {

    const posts = useSelector((state=> state.posts))
    console.log(posts)
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <>
            {/* <HomeNavbar />  */}
             {
                posts.map(post=>{
                    return <li key={post.id}> { post.title } , {post.author} </li>
                })
            }
        </>
    )
}

export default Home
