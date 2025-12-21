import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Carousel, Button, Spinner } from 'react-bootstrap';
import { asset } from '../utils/asset';

type Article = {
  id: number;
  title: string;
  cover_image: string | null;
  url: string;
};

const chunk = <T,>(arr: T[], size: number) => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Articles = () => {
  const [pages, setPages] = useState<Article[][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Article[]>('https://dev.to/api/articles?username=mihinduranasinghe')
      .then((res) => {
        const data = res.data || [];
        setPages(chunk(data, 8));
      })
      .catch((err) => {
        console.error('Failed to load articles', err);
        setPages([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="articles">
      <Container className="mb-5">
        <h2>
          <strong>Technical Articles</strong>
        </h2>
        <span className="bar-title mb-5" />
        <Card className="shadow-lg rounded pb-3" data-aos="fade-up" data-aos-delay="500">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" />
            </div>
          ) : pages.length === 0 ? (
            <div className="text-center py-5">No articles found.</div>
          ) : (
            <Carousel>
              {pages.map((page, pageIndex) => (
                <Carousel.Item key={pageIndex}>
                  <div className="d-block w-100">
                    <Row className="px-3">
                      {page.map((article) => (
                        <Col
                          key={article.id}
                          lg={3}
                          md={6}
                          sm={6}
                          xs={6}
                          className="mb-3"
                          data-aos="flip-up"
                        >
                          <Card className="shadow-sm bg-white rounded h-100">
                            <div style={{ height: 150, width: '100%' }} className="d-flex">
                              <img
                                src={article.cover_image || asset('assets/images/avatar.jpg')}
                                alt={article.title}
                                style={{ objectFit: 'cover', width: '100%' }}
                              />
                            </div>
                            <Card.Body className="d-flex flex-column">
                              <Card.Title as="h6">{article.title}</Card.Title>
                              <div className="mt-auto d-flex justify-content-center">
                                <Button href={article.url} target="_blank" rel="noreferrer" variant="primary">
                                  Article
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Card>
      </Container>
    </section>
  );
};

export default Articles;
