import React, {useState, useEffect} from 'react'
import { Row, Col, Card, Container} from 'react-bootstrap'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Bar } from 'react-chartjs-2'

const PostStats = ({posts, authors, tags, pages}) => {
    const today = new Date()
    var monthlyCount = []


    const [postCount, setPostCount] = useState(0)
    const [postMonthlyCount, setPostMonthlyCount] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [authorCount, setAuthorCount] = useState(0)
    const [tagCount, setTagCount] = useState(0)

    useEffect(()=>{
        if(posts && authors && tags && pages){
  
            setPageCount(pages && pages.pages.length)
            setPostCount(posts.meta.pagination.pages && posts.posts.length)
            setAuthorCount(authors && authors.authors.length)
            setTagCount(tags && tags.tags.length)

            for (var i = 0; i < 12; i++) {
                var count = 0
                posts.posts.forEach(post => {
                    
                    if (parseInt(post.published_at.split('-')[1]) - 1 === i && 2020 === parseInt(post.published_at.split('-')[0])) {
                        count += 1
                    }
                })
                
                monthlyCount.push(count)
            }
            
            setPostMonthlyCount(monthlyCount)
        }
    },[posts, authors, tags, pages])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    var data = {
        labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Posts per month(2020)",
                data: postMonthlyCount,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.7)",            
                borderColor: "transparent"
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Posts per month',
          },
        },
      };

  return (
    <div className ="p-5">
        <Container>
            <Row>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of Posts</h5>
                        <p>{postCount}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of Pages</h5>
                        <p>{pageCount}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of Authors</h5>
                        <p>{authorCount}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <h5>Total number of Tags</h5>
                        <p>{tagCount}</p>
                    </Card>
                </Col>
            </Row>

            <div className="mt-5">
                <Bar options={options} data={data} />
            </div>
        </Container>
    </div>
  )
}

export default PostStats