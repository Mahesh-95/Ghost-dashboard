import React from 'react'
import {Card, Container} from 'react-bootstrap'

const PostCard = ({posts, title}) => {

  return (
    <Container>
        <h5>{title}</h5>
       {posts && posts.map((post,i) => { 
        return <Card key={i} className="mb-3">
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Link href={post.url}>Read more</Card.Link>
        </Card.Body>
        </Card>
        })}
    </Container>
  )
}

export default PostCard