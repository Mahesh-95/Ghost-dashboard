import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../redux/actions/postsActions'
import {Row, Col, Container} from 'react-bootstrap'
import LinkStats from '../components/LinkStats'
import LinkCard from '../components/LinkCard'

const Links = () => {
  const dispatch = useDispatch()

  const [externalLink, setExternalLink] = useState([])
  const [internalLink, setInternalLink] = useState([])

  const postsList = useSelector((state) => state.postsList)
  const { loading, error, posts } = postsList

  useEffect(()=>{
    if(!posts){
      dispatch(fetchPosts())
    }else{
      setExternalLink(posts.posts.filter(post=>{
            return post.url.split('/')[2]!== 'ghost-blog.ipxp.in'
        }))

        setInternalLink(posts.posts.filter(post=>{
            return post.url.split('/')[2]=== 'ghost-blog.ipxp.in'
        }))
    }
  },[])

  return (
    <Container className='my-5'>
      {loading? <p>{error}</p> :
    
      <>
        <LinkStats posts={posts} external={externalLink} internal ={internalLink}/>
        <Row>
          <Col> 
            <LinkCard posts ={externalLink} title={"External Broken links"}/>
          </Col>
          <Col> 
            <LinkCard posts ={internalLink} title={"Internal Broken links"}/>
          </Col>
        </Row>
      </>
      }
</Container>
  )
}

export default Links