import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { asset } from '../utils/asset';

const eiaQaImages = ['/assets/images/ericsson/EIAQA1.jpg', '/assets/images/ericsson/EIAQA2.jpg'].map(asset);

const eiaImages = [
  '/assets/images/ericsson/EIA_UOK_1.jpg',
  '/assets/images/ericsson/EIAfinal6.jpg',
  '/assets/images/ericsson/EIAfinal2.jpg',
  '/assets/images/ericsson/EIA_UOK_5.jpg',
  '/assets/images/ericsson/EIAfinal4.jpg',
  '/assets/images/ericsson/EIAfinal5.jpg',
  '/assets/images/ericsson/EIA_UOK_4.jpg',
].map(asset);

const undpImages = [
  '/assets/images/undp/9.jpg',
  '/assets/images/undp/2.jpg',
  '/assets/images/undp/6.jpg',
  '/assets/images/undp/undp_1.jpg',
  '/assets/images/undp/1.jpg',
  '/assets/images/undp/undp_2.jpg',
].map(asset);

const nobelImages = [
  '/assets/images/nobel-roundtable/3.png',
  '/assets/images/nobel-roundtable/12.jpg',
  '/assets/images/nobel-roundtable/4.png',
  '/assets/images/nobel-roundtable/6.png',
  '/assets/images/nobel-roundtable/9.png',
  '/assets/images/nobel-roundtable/10.png',
  '/assets/images/nobel-roundtable/11.png',
].map(asset);

const gdgImages = ['/assets/images/gdg/1.jpg', '/assets/images/gdg/3.jpg'].map(asset);

const Achievements = () => {
  return (
    <section id="achievements">
      <Container>
        <h2>
          <strong>Achievements</strong>
        </h2>
        <span className="bar-title mb-5" />

        <div className="p-3" data-aos="fade-up" data-aos-delay="300">
          <h5 style={{ textAlign: 'justify' }}>
            <strong>
              🔴 WATCH : Mihindu Ranasinghe joined as a panelist in Ericsson Innovation Awards global live streaming session on{' '}
              <u>11th of August 2021.</u>
            </strong>
          </h5>
          <h6 className="pt-1">If you have missed the live stream, you can watch it here.</h6>
          <Row>
            <Col lg={6} className="py-5">
              <iframe
                src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:6831154100575473664"
                height="354"
                width="99%"
                frameBorder="0"
                allowFullScreen
                title="EIA Q&A"
              />
            </Col>
            <Col lg={6} className="py-5">
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={2800} pause={false}>
                  {eiaQaImages.map((src) => (
                    <Carousel.Item key={src}>
                      <img className="d-block w-100 rounder" src={src} alt="EIA QA" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="p-3" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <strong>ERICSSON INNOVATION AWARDS 2020</strong>
          </h3>
          <div className="mb-3">
            <h5>
              <strong>Global 2nd Place Winner - Prize 17000 EURO </strong>
            </h5>
          </div>

          <div>
            <h5 style={{ textAlign: 'justify' }}>
              The 2020 Ericsson Innovation Awards (EIA) is a call to ‘Reclaim the Future’. The annual global innovation competition
              calls on students around the globe to set major change in motion by committing to addressing the current and future
              challenges of climate action. Focused on how Engineering solutions can provide radical climate change mitigation for
              consumers and industry alike.
            </h5>
          </div>
          <Row>
            <Col lg={8} className="pt-5">
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={3200} pause={false}>
                  {eiaImages.map((src) => (
                    <Carousel.Item key={src}>
                      <img className="d-block w-100 rounder" src={src} alt="Ericsson Innovation Awards" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card>
              <div>
                <h5 className="py-2" style={{ textAlign: 'justify' }}>
                  <strong>
                    🔴 WATCH : Winning moment & cash prize EUR 17000 in Ericsson Innovation Awards 2020 grand finale on{' '}
                    <u>18th of December 2020</u>.
                  </strong>
                </h5>
                <div style={{ textAlign: 'center' }}>
                  <h6>If you have missed the live stream, you can watch it here.</h6>
                  <iframe
                    src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:6744595704343236608"
                    height="384"
                    width="98%"
                    frameBorder="0"
                    allowFullScreen
                    title="EIA Finale"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} className="pt-5">
              <p>
                <strong>Global Winners</strong>
              </p>
              <p>
                1st Place : Queensland University – Australia
                <br />
                <b>2nd Place : University of Kelaniya - Sri Lanka</b>
                <br />
                3rd Place : Stanford University – USA
              </p>
              <p>
                University article:{' '}
                <a
                  href="https://news.kln.ac.lk/index.php/faculties-others/sciences/1068-global-second-place-and-the-most-popular-team-on-instagram-at-the-ericsson-innovation-awards-2020"
                  target="_blank"
                  rel="noreferrer"
                >
                  news.kln.ac.lk
                </a>
              </p>
              <p>
                WSO2 post:{' '}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6745200856070688768/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Winners announcement:{' '}
                <a href="https://www.ericsson.com/en/news/2020/12/ericsson-innovation-awards-2020" target="_blank" rel="noreferrer">
                  ericsson.com
                </a>
              </p>
              <p>
                Grand finale:{' '}
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6744628501690904576/" target="_blank" rel="noreferrer">
                  Watch
                </a>
              </p>
            </Col>
          </Row>
        </div>

        <hr />

        <div className="p-3 mt-5" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <strong>UNDP Generation Unlimited Global Youth Challenge 2020</strong>
          </h3>
          <div className="mb-3">
            <h5>
              <strong>One of the top 5 innovations in Sri-Lanka - Prize 1000 USD </strong>
            </h5>
          </div>

          <Row>
            <Col md={8}>
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={3000} pause={false}>
                  {undpImages.map((src) => (
                    <Carousel.Item key={src}>
                      <img className="d-block w-100 rounder" src={src} alt="UNDP GENU" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card>
            </Col>
            <Col md={4} className="pt-4">
              <p style={{ textAlign: 'justify' }}>
                Generation Unlimited has supported thousands of young innovators across 40 countries to tackle some of the biggest
                challenges facing their generation. It has helped young people understand why these challenges exist and how they can be
                addressed to bring about real change.
              </p>
              <p>A newsletter article published by UNDP in official UNDP website</p>
              <a href="https://undpsrilanka.exposure.co/bringing-ideas-to-life" target="_blank" rel="noreferrer">
                https://undpsrilanka.exposure.co/bringing-ideas-to-life
              </a>
              <br />
              <br />
              <p>Featuring Video</p>
              <div>
                <a href="https://www.facebook.com/baxmultimedia/videos/407608596890493" target="_blank" rel="noreferrer">
                  https://www.facebook.com/baxmultimedia/
                </a>
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </div>

        <hr />

        <div className="p-3 mt-5" data-aos="fade-up" data-aos-delay="300">
          <h2 style={{ color: '#212529' }}>
            <strong>Nobel Prize Round Table 2021</strong>
          </h2>
          <div className="mb-3">
            <h4>
              <strong>Student meet Nobel Laureate (11/02/2021)</strong>
            </h4>
          </div>

          <Row className="p-4">
            <Col md={5} sm={12}>
              <p style={{ textAlign: 'justify' }}>
                Mihindu Ranasinghe got this rare opportunity as one of 16 selected students globally to join a conversation with{' '}
                <b>Professor Queloz</b> on <b>"being a scientist"</b> organized by{' '}
                <a href="https://www.nobelprize.org/" target="_blank" rel="noreferrer">
                  The Nobel Prize Org.
                </a>
              </p>
              <p>
                This was an invite-only event for hand-picked students to meet a Nobel Laureate and engage in a dialogue about their life as a
                scientist on a closed video conference platform.
              </p>
              <a href="https://www.nobelprize.org/" target="_blank" rel="noreferrer">
                https://www.nobelprize.org/
              </a>
              <br />
              <br />
              <p>Featuring Video</p>
              <a href="https://www.youtube.com/user/thenobelprize" target="_blank" rel="noreferrer">
                https://www.youtube.com/user/thenobelprize
              </a>
              <br />
              <br />
            </Col>

            <Col md={7} sm={12}>
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={3000} pause={false}>
                  {nobelImages.map((src) => (
                    <Carousel.Item key={src}>
                      <img className="d-block w-100 rounder" src={src} alt="Nobel Round Table" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card>
            </Col>
          </Row>

          <div data-aos="fade-up" style={{ textAlign: 'justify' }}>
            <h5>
              <strong>About Prof. Didier Queloz</strong>
            </h5>
            <p>
              Didier Queloz is Professor of Physics at the University of Cambridge and Geneva University. He was awarded the 2019 Nobel
              Prize in Physics for the 1995 discovery of exoplanet 51 Pegasi b, the first discovery of a planet outside our solar system
              orbiting a solar-type star. He carried out his Nobel Prize-winning work as a PhD student, and was awarded the Nobel Prize
              alongside his PhD supervisor, Michel Mayor.
            </p>
          </div>
        </div>

        <hr />

        <div className="p-3 mt-5" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <strong>Panel Discussion on Google Cloud Platform (GCP) - 2020</strong>
          </h3>
          <div className="mb-3">
            <h5>
              <strong>Organized by Google Developer Groups (GDG Sri Lanka) | DGD Cloud Sri Lanka</strong>
            </h5>
          </div>

          <Row>
            <Col md={5} sm={12}>
              <p style={{ textAlign: 'justify' }}>
                Mihindu Ranasinghe was invited as a panelist to discuss Google Cloud Platform experience and share knowledge on GCP and
                #CloudKasthiram Cloud Challenge, alongside Google community leaders.
              </p>
              <h5 className="mb-4">
                <strong>Conducted By</strong>
              </h5>
              <h6>1. Shafraz Rahim</h6>
              <p>- Cloud Community Manager at <b>Google (Singapore)</b></p>
              <h6>2. Milindu Sanoj</h6>
              <p>- SRE Team Lead at <b>SyscoLABS</b></p>
            </Col>

            <Col md={7} sm={12}>
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={2800} pause={false}>
                  {gdgImages.map((src) => (
                    <Carousel.Item key={src}>
                      <img className="d-block w-100 rounder" src={src} alt="GCP Panel Discussion" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card>
            </Col>
          </Row>

          <h3 className="py-4">
            <strong>Featuring Video (Panel Discussion)</strong>
          </h3>
          <h4 style={{ textAlign: 'justify' }}>
            <strong>
              🔴 WATCH : Mihindu Ranasinghe as a panelist in GCP Panel Discussion held on <u>06th of November 2020.</u>
            </strong>
          </h4>
          <h5>If you have missed the live stream, you can watch it here.</h5>
          <div style={{ textAlign: 'center' }} className="mt-5">
            <iframe
              width="75%"
              height="515"
              src="https://www.youtube.com/embed/85rg9R9uGQQ?controls=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="GCP Panel"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
