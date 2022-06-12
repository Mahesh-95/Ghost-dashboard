import React from 'react'
import _ from 'lodash'
import {Card, Container} from 'react-bootstrap'

const LatestPosts = ({posts}) => {
    

  return (
    <Container>
        <h1>Latest Posts</h1>
       {posts && _.sortBy(posts.posts, ["published_at"]).reverse().slice(0,5).map((post,i) => { 
        return <Card key={i} className="mb-3">
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
            {post.excerpt}
            </Card.Text>
            <Card.Link href={post.url}>Read more</Card.Link>
        </Card.Body>
        </Card>
        })}
    </Container>
  )
}

export default LatestPosts