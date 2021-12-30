import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async distpatch => {
    const response = await jsonPlaceholder.get('/posts');

    distpatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id) => async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch ({
        type: "FETCH_USER",
        payload: response.data
    });
}