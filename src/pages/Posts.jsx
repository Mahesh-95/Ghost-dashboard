import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PostCard from '../components/PostCard'
import { fetchPosts } from '../redux/actions/postsActions'
import {Row, Col, Container} from 'react-bootstrap'

const Posts = () => {
    const dispatch = useDispatch()

    const [withoutMeta, setWithoutMeta] = useState([])
    const [longMeta, setLongMeta] = useState([])
    const [longUrl, setLongUrl] = useState([])
    const [shortPost, setShortPost] = useState([])
    const [longPost, setLongPost] = useState([])
    const [withoutFeatureImage, setWithoutFeatureImage] = useState([])

    const postsList = useSelector((state) => state.postsList)
    const { loading, error, posts } = postsList
  
    useEffect(()=>{
      if(!posts){
        dispatch(fetchPosts())
      }
      
      else{
        setWithoutMeta(posts.posts.filter(post => post.meta_description === null))
        setWithoutFeatureImage(posts.posts.filter(post => post.feature_image === null))
        setLongMeta(posts.posts.filter(post => {if(post.meta_description !== null){
          return post.meta_description.length > 200
        }}))

        setLongUrl(posts.posts.filter(post => {if(post.url !== null){
          return post.url.length > 100
        }}))

        setLongPost(posts.posts.filter(post => {if(post.html !== null){
          return  (post.html).replace(/<[^>]+>/g, '').split(' ').length > 1500
        }}))

        setShortPost(posts.posts.filter(post => {if(post.html !== null){
          return  (post.html).replace(/<[^>]+>/g, '').split(' ').length < 250
        }}))
        
      }
    },[dispatch, posts])

  return (
    <Container className='my-5'>
        {loading? <p>{error}</p> :
        <Row>
          <Col md={4} className="mb-3">
             <PostCard posts={withoutMeta} title={"Without Meta Description"}/>
           </Col>
           <Col md={4} className="mb-3">
             <PostCard posts={longMeta} title={"Long Meta Description (>200 characters)"}/>
           </Col>
           <Col md={4} className="mb-3">
             <PostCard posts={longUrl} title={"Long Url (>100 characters)"}/>
           </Col>
           <Col md={4} className="mb-3">
             <PostCard posts={withoutFeatureImage} title={"Without Feature Image"}/>
           </Col>
           <Col md={4} className="mb-3">
             <PostCard posts={shortPost} title={"Too Short Posts (below 250 words)"}/>
           </Col>
           <Col md={4} className="mb-3">
             <PostCard posts={longPost} title={"Too Long Posts (more than 1500 wordss)"}/>
           </Col>
        </Row>
        }
    </Container>
  )
}

export default Posts