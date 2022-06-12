import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import LatestPosts from '../components/LatestPosts'
import PostStats from '../components/PostStats'
import { fetchPosts, fetchTags, fetchAuthors, fetchPages } from '../redux/actions/postsActions'

const Dashboard = () => {
    const dispatch = useDispatch()

  const postsList = useSelector((state) => state.postsList)
  const { loading, error, posts } = postsList

  const auhtorsList = useSelector((state) => state.authorsList)
  const {  authors } = auhtorsList

  const tagsList = useSelector((state) => state.tagsList)
  const {  tags } = tagsList

  const pagesList = useSelector((state) => state.pagesList)
  const {  pages } = pagesList

  useEffect(()=>{
    if(!posts){
      dispatch(fetchPosts())
    }
    if(!authors){
      dispatch(fetchAuthors())
    }
    if(!tags){
      dispatch(fetchTags())
    }
    if(!pages){
      dispatch(fetchPages())
    }
  },[])

  return (
    <div>
        {loading? <p>{error}</p> :
        <>
        <PostStats posts={posts} authors={authors} tags={tags} pages={pages}/>
        <LatestPosts posts={posts}/>
        </>
        }
    </div>
  )
}

export default Dashboard