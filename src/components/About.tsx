import { useMemo } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faCity,
  faMailBulk,
  faMobile,
  faBirthdayCake,
  faGraduationCap,
  faLaptopHouse,
} from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

const calculateAge = (dob: Date) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};

const About = () => {
  const age = useMemo(() => calculateAge(new Date(1997, 9, 4)), []);
  const educationEntries = [
    { title: 'MSc. Computer Science', subtitle: 'Stockholm University, Sweden', year: '2023 - 2025' },
    { title: 'BSc. Software Engineering', subtitle: 'University Of Kelaniya, Sri Lanka', year: '2017 - 2021' },
    {
      title: 'Human Resources Management',
      subtitle: 'CCHRM, CIPM Sri Lanka',
      year: '2018',
    },
  ];

  return (
    <section id="about">
      <Container className="mb-4">
        <h2>
          <strong>About Mihindu</strong>
        </h2>
        <span className="bar-title mb-5" />
        <Row data-aos="fade-zoom" data-aos-anchor-placement="top-center">
          <Col lg={8} md={12} className="pt-4 pt-lg-0" data-aos="fade-zoom">
            <h3>Hello there,</h3>
            <p className="font-italic about-text" style={{ textAlign: 'justify' }}>
              Mihindu Ranasinghe is a Sri Lankan software engineer based in Stockholm, Sweden. He is currently a{' '}
              <b>Senior Fullstack Software Engineer at DigitalRoute</b>, building an AI-powered, cloud-native usage data platform
              for telecom and SaaS enterprises. In 2024 he served as <b>Head of Technology at Skoolie</b>, leading an AI-driven
              EdTech platform, and before that worked at <b>TVM Sweden</b> delivering AI-powered media tech experiences. His past
              experience includes <b>Sysco LABS</b> the innovation arm of <b>Sysco</b>, the world&apos;s largest food service
              company and a Fortune 500 leader where he built global e-commerce, logistics, and pricing products, and <b>WSO2</b>
              (API and cloud platform engineering). <br />
              <br />
              He specializes in fullstack engineering and data platforms with AI/ML and cloud expertise. He has delivered products
              across Node.js, TypeScript/React/Next.js, Java/Kotlin (Spring), Python, Docker/Kubernetes, AWS/GCP, Kafka, and modern
              AI tooling. He is pursuing an <b>MSc in Computer Science</b> at <b>Stockholm University</b> and holds a <b>BSc (Hons)
              in Software Engineering</b> from the <b>University of Kelaniya, Sri Lanka</b>. <br />
              <br />
              He is an active volunteer in professional engineering bodies in Sri Lanka. Mihindu serves as the present{' '}
              <b>IEEE Industry Relations Chairperson of IEEE Sri Lanka Section</b> and he was the <b>Sri Lanka Section Lead at
              IEEEXtreme</b> in 2020. IEEE is the world&apos;s largest technical professional organization dedicated to advancing
              engineering and technology. Mihindu Ranasinghe is the <b>Chair-Person</b> of IEEE Student Branch of University of
              Kelaniya, Sri Lanka. Also he is a core-committee member at <b>Facebook Developer Circles:Colombo</b> and he contributes
              in various technical communities in Sri Lanka such as <b>Google Developer Groups - GDG Sri Lanka</b> and{' '}
              <b>Google Business Groups - GBG Sri Lanka</b>.
            </p>
            <Row>
              <Col lg={6} md={6}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMapMarker} className="info-icon" /> <strong> Sweden (Originally Sri Lankan)</strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCity} className="info-icon" /> <strong> Stockholm, Sweden</strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMailBulk} className="info-icon" />{' '}
                    <strong>
                      <a href="mailto:mihinduranasinghe@gmail.com">mihinduranasinghe@gmail.com</a>
                    </strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMobile} className="info-icon" /> <strong> (+46) 76 920 55 96</strong>
                  </li>
                </ul>
              </Col>
              <Col lg={6} md={6}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faBirthdayCake} className="info-icon" /> <strong> {age} Years Old</strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGraduationCap} className="info-icon" /> <strong> MSc. / BSc. Software Engineering</strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLaptopHouse} className="info-icon" /> <strong> Full Stack Engineer</strong>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="180">
              <SocialLinks />
            </div>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="220">
              <h4>
                <strong>Education</strong>
              </h4>
              <div className="education-cards">
                {educationEntries.map((entry) => (
                  <div className="education-card" key={entry.title}>
                    <div className="education-title">{entry.title}</div>
                    <div className="education-subtitle">{entry.subtitle}</div>
                    <div className="education-year">{entry.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={4} data-aos="fade-zoom" className="about-media">
            <Carousel interval={4000} fade className="mb-3">
              {['/assets/images/tvm.jpeg', '/assets/images/wso2.jpg'].map(
                (src) => (
                  <Carousel.Item key={src}>
                    <img className="d-block w-100 rounder about-media-img" src={src} alt="Mihindu career" />
                  </Carousel.Item>
                )
              )}
            </Carousel>
            <picture>
              <img src="/assets/images/syscocertificate.jpeg" alt="Sysco certificate" className="img-fluid about-media-img" />
            </picture>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
