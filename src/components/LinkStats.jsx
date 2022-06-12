import React, {useState, useEffect} from 'react'
import { Row, Col, Card, Container} from 'react-bootstrap'


const LinkStats = ({posts, internal, external}) => {



    const [linkCount, setLinkCount] = useState(0)
    const [exteranlLinkCount, setExteranlLinkCount] = useState(0)
    const [internalCount, setInternalCount] = useState(0)


    useEffect(()=>{
        if(posts){
        setLinkCount(posts.posts.filter(post=>post.url!== null).length)
       setExteranlLinkCount(external.length)
       setInternalCount(internal.length)
           
           
        }
    },[posts])

  

  return (
    <div className ="p-5">
        <Container>
            <Row>
                <Col>
                    <Card className="p-3">
                        <h5>Total Links in All Posts</h5>
                        <p>{linkCount}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of External Links</h5>
                        <p>{exteranlLinkCount}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of Internal Links</h5>
                        <p>{internalCount}</p>
                    </Card>
                </Col>
               
            </Row>

           
        </Container>
    </div>
  )
}

export default LinkStats