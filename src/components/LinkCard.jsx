import React, {useState, useEffect} from 'react'
import {Card, Container} from 'react-bootstrap'


const Link = ({posts, title}) => {
  var broken
  const [brokenUrl, setBrokenUrl] = useState([])

  function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status==404;
  }

  

  useEffect(()=>{
   
 if(posts && posts.length>0){ 
  posts.map(post => {
    if(UrlExists(post.url)){
    setBrokenUrl([...brokenUrl, post])
  }})}
  },[])

  return (
    <Container>
        <h5>{title}</h5>
       {brokenUrl && brokenUrl.map((post,i) => { 
        return <Card key={i} className="mb-3">
            <Card.Body>
            <Card.Link href={post.url}>{post.url}</Card.Link>
        </Card.Body>
        </Card>
        })}
    </Container>
  )
}

export default Link