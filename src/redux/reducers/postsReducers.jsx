import { 
  FETCH_POSTS_FAIL, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS,
  FETCH_AUTHORS_FAIL, 
  FETCH_AUTHORS_REQUEST, 
  FETCH_AUTHORS_SUCCESS,
  FETCH_TAGS_FAIL, 
  FETCH_TAGS_REQUEST, 
  FETCH_TAGS_SUCCESS,
  FETCH_PAGES_FAIL, 
  FETCH_PAGES_REQUEST, 
  FETCH_PAGES_SUCCESS 
} from "../actions/postsActions";


export const postsListReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
          return { loading: true }
        case FETCH_POSTS_SUCCESS:
          return { loading: false, posts: action.payload }
        case FETCH_POSTS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
}
export const authorsListReducers = (state = {}, action) => {
  switch (action.type) {
      case FETCH_AUTHORS_REQUEST:
        return { loading: true }
      case FETCH_AUTHORS_SUCCESS:
        return { loading: false, authors: action.payload }
      case FETCH_AUTHORS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const tagsListReducers = (state = {}, action) => {
  switch (action.type) {
      case FETCH_TAGS_REQUEST:
        return { loading: true }
      case FETCH_TAGS_SUCCESS:
        return { loading: false, tags: action.payload }
      case FETCH_TAGS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const pagesListReducers = (state = {}, action) => {
  switch (action.type) {
      case FETCH_PAGES_REQUEST:
        return { loading: true }
      case FETCH_PAGES_SUCCESS:
        return { loading: false, pages: action.payload }
      case FETCH_PAGES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}