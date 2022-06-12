import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { postsListReducers, authorsListReducers, tagsListReducers, pagesListReducers } from './redux/reducers/postsReducers'


const reducer = combineReducers({
    postsList: postsListReducers,
    authorsList: authorsListReducers,
    tagsList: tagsListReducers,
    pagesList: pagesListReducers
})


const initialState = {
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store