import axios from "axios"
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL'

export const FETCH_AUTHORS_REQUEST = 'FETCH_AUTHORS_REQUEST'
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS'
export const FETCH_AUTHORS_FAIL = 'FETCH_AUTHORS_FAIL'

export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST'
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS'
export const FETCH_TAGS_FAIL = 'FETCH_TAGS_FAIL'

export const FETCH_PAGES_REQUEST = 'FETCH_PAGES_REQUEST'
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS'
export const FETCH_PAGES_FAIL = 'FETCH_PAGES_FAIL'

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_POSTS_REQUEST
        })

        const {data} = await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')

    

        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: FETCH_POSTS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}

export const fetchAuthors = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_AUTHORS_REQUEST
        })

        const {data} = await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d')

    

        dispatch({
            type: FETCH_AUTHORS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: FETCH_AUTHORS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}

export const fetchTags = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_TAGS_REQUEST
        })

        const {data} = await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d')

    

        dispatch({
            type: FETCH_TAGS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: FETCH_TAGS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}

export const fetchPages = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_PAGES_REQUEST
        })

        const {data} = await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d')

    

        dispatch({
            type: FETCH_PAGES_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: FETCH_PAGES_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}