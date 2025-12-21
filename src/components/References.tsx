import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Container, Card, Carousel, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import {
  ref as dbRef,
  onValue,
  push,
  set,
  update,
  off,
  DataSnapshot,
} from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { asset } from '../utils/asset';

type Recommendation = {
  id?: string;
  name: string;
  email: string;
  designation: string;
  organization: string;
  recommendation: string;
  avatar?: string;
};

const defaultAvatar =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c8a74.appspot.com/o/default_avatar.jpg?alt=media&token=aed2e21b-0ca6-4aa9-b8cd-b2aa80b16bbf';

const initialForm: Recommendation = {
  name: '',
  email: '',
  designation: '',
  organization: '',
  recommendation: '',
  avatar: '',
};

const staticRecommendation: Recommendation = {
  name: 'Maria Kaed',
  email: 'maria@example.com',
  designation: 'Co-Founder / CMO',
  organization: 'SquareHub | DirectPay | Pay Media',
  recommendation:
    'I had the opportunity to work with Mihindu as a mentor during the Generation Unlimited (GenU) Youth Challenge organized by UNDP. Mihindu and his team underwent a 3-month startup incubation support with SquareHub as a part of the GenU programme. During the incubation, Mihindu showcased great potential as a young innovator. His commitment and resilience will take him a long way in his professional career.',
  avatar: asset('assets/images/recommendations/maria2.jpg'),
};

const References = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [form, setForm] = useState<Recommendation>(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setFile(target.files && target.files[0] ? target.files[0] : null);
  };

  useEffect(() => {
    const recommendationsRef = dbRef(db, '/recommendations');

    const handleSnapshot = (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      if (!data) {
        setRecommendations([]);
        return;
      }
      const items = Object.entries<Recommendation>(data).map(([id, value]) => ({ id, ...value }));
      setRecommendations(items);
    };

    const unsubscribe = onValue(recommendationsRef, handleSnapshot);
    return () => {
      off(recommendationsRef, 'value', handleSnapshot);
      unsubscribe();
    };
  }, []);

  const allRecommendations = useMemo(
    () => [staticRecommendation, ...recommendations],
    [recommendations]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      let avatarUrl = defaultAvatar;
      if (file) {
        const imageRef = storageRef(storage, file.name);
        await uploadBytes(imageRef, file);
        avatarUrl = await getDownloadURL(imageRef);
      }

      const existing = recommendations.find((r) => r.email === form.email);
      if (existing?.id) {
        await update(dbRef(db, `/recommendations/${existing.id}`), {
          ...form,
          avatar: avatarUrl,
        });
      } else {
        const newRef = push(dbRef(db, '/recommendations'));
        await set(newRef, {
          ...form,
          avatar: avatarUrl,
        });
      }
      setMessage({ type: 'success', text: 'Thank you! Your recommendation has been saved.' });
      setForm(initialForm);
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage({ type: 'danger', text: 'Failed to submit recommendation. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="references">
      <Container className="mb-5">
        <h2>
          <strong>Recommendations</strong>
        </h2>
        <span className="bar-title mb-5" />
        <Card className="shadow-lg rounded pb-3" data-aos="fade-up" data-aos-delay="500">
          <Carousel>
            {allRecommendations.map((recommendation, idx) => (
              <Carousel.Item key={`${recommendation.email}-${idx}`}>
                <div className="d-block w-100">
                  <Row>
                    <Col lg={2} className="ms-4 me-4 col-sm-12 d-flex flex-column align-items-center">
                      <div className="mt-4" style={{ width: '120px' }}>
                        <img className="d-block w-100 rounder" src={recommendation.avatar || defaultAvatar} alt="Avatar" />
                      </div>
                      <div className="mt-3 text-center">
                        <h5>{recommendation.name}</h5>
                        <h6 className="mt-2">
                          <small>{recommendation.designation}</small>
                        </h6>
                        <div className="mt-2 text-uppercase">
                          <strong>{recommendation.organization}</strong>
                        </div>
                      </div>
                    </Col>
                    <Col lg={9} className="mt-4 col-sm-12">
                      <div style={{ fontSize: '16px', fontStyle: 'italic', color: '#2d3748', pointerEvents: 'none' }}>
                        {recommendation.recommendation}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>

        <Card className="container mb-5 mt-4">
          <Form className="m-4" onSubmit={handleSubmit}>
            <h4>You are welcome to write me a recommendation.</h4>
            <h6 style={{ color: 'red' }}>
              You can edit your recommendation at any time by re-submitting the form with the same <b>email ID</b>.
            </h6>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>
                <b>Your Name</b>
              </Form.Label>
              <Form.Control
                required
                minLength={4}
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                required
                minLength={4}
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                required
                name="designation"
                type="text"
                value={form.designation}
                onChange={(e) => setForm((prev) => ({ ...prev, designation: e.target.value }))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="organization">
              <Form.Label>Organization</Form.Label>
              <Form.Control
                required
                name="organization"
                type="text"
                value={form.organization}
                onChange={(e) => setForm((prev) => ({ ...prev, organization: e.target.value }))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="recommendation_note">
              <Form.Label>
                <b>Recommendation Note</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                required
                minLength={5}
                name="recommendation"
                value={form.recommendation}
                onChange={(e) => setForm((prev) => ({ ...prev, recommendation: e.target.value }))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>
                <b>Please upload an image of you</b>
              </Form.Label>
              <Form.Control
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
              />
            </Form.Group>

            {message && <Alert variant={message.type}>{message.text}</Alert>}

            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" /> Submitting...
                </>
              ) : (
                <>Give / Edit my recommendation for <b>Mihindu Ranasinghe</b></>
              )}
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default References;
