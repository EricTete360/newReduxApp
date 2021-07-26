const postReducer = (posts = [],action) =>{
    switch (action.type) {
        case "GET_POSTS":
            return action.posts.data;
            // break;
    
        default:
            return posts;
    }
}

export default postReducer;