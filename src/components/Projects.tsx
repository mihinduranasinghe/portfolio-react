import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { asset } from '../utils/asset';

type Project = {
  title: string;
  tech: string;
  description: string;
  image: string;
  links: { href: string; label: string }[];
};

type ResearchProject = {
  title: string;
  description: string;
  links?: { href: string; label: string }[];
};

const highlightProject = {
  title: 'Elzian Agro',
  image: asset('assets/images/elzian-agro/1.jpg'),
  description:
    'Award-winning machine learning and IoT-driven agricultural platform for early pest prediction. Elzian Agro combines real-time field sensors with external data feeds to monitor weather patterns, soil conditions, and pest/disease propagation. Advanced ML algorithms analyze this data to forecast potential outbreaks, enabling farmers to receive timely alerts and implement targeted preventive measures before crop damage occurs.',
  links: [{ href: 'http://agro.elzian.com/', label: 'agro.elzian.com' }],
};

const researchProjects: ResearchProject[] = [
  {
    title:
      'Comparison of performances of ML-Algorithms in the estimation of the execution time of non-parallel Java programs',
    description:
      'Research on predicting execution time for JVM languages (Java, Ballerina) using advanced ML models to improve performance planning. Presented at ICAPS (International Conference of Pure and Applied Sciences).',
    links: [
      { href: 'https://josuk.sljol.info/articles/10.4038/josuk.v16i1.8074', label: 'Journal of Science (ICAPS)' },
    ],
  },
  {
    title: 'Machine Learning based pest prediction system by analyzing weather patterns (Award Winning Research)',
    description:
      'Built ML models with weather/location/historical crop data to predict pest outbreaks. Won Global 2nd Place at Ericsson Innovation Awards 2020 (EUR 17,000) and ranked top 5 at UNDP GENU.',
    links: [
      { href: 'https://www.ericsson.com/en/careers/eia/past-competitions/eia', label: 'Ericsson Innovation Awards' },
      { href: 'https://undpsrilanka.exposure.co/bringing-ideas-to-life', label: 'UNDP GENU Feature' },
    ],
  },
  {
    title: 'Future Neck IoT Device',
    description:
      'Smart necklace embedded system powered by Generative AI to assist daily life and help visually impaired users with context-aware guidance.',
  },
];

const projectList: Project[] = [
  {
    title: 'Pre-built API CI/CD for WSO2 API Cloud Users',
    tech: 'Shell Script / Docker / GitHub Actions / Git / Linux tools / APIMCLI',
    description:
      'Ready-to-use CI/CD workflow for WSO2 API Cloud/Manager with no extra tooling installs; full client-managed pipeline.',
    image: asset('assets/images/projects/wso2.png'),
    links: [
      { href: 'https://github.com/marketplace/actions/wso2-apimcloud-cicd', label: 'Source Code' },
      { href: 'https://github.com/marketplace/actions/wso2-apimcloud-cicd', label: 'More Details' },
    ],
  },
  {
    title: 'Text Recognizer',
    tech: 'Kotlin / Node.js / Tesseract / Google Vision / MongoDB / Heroku',
    description: 'CamScanner-style OCR app with rich text utilities; backend services hosted on Heroku.',
    image: asset('assets/images/projects/textrecoginzertiny.jpg'),
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.mihinduranasinghe.cybercats.OCR', label: 'Source Code' },
      { href: 'https://play.google.com/store/apps/details?id=com.mihinduranasinghe.cybercats.OCR', label: 'More Details' },
    ],
  },
  {
    title: 'Leta OS',
    tech: 'Assembly Language / Data Structures / Hardware Structures',
    description: 'Simple operating system written in Assembly to display hardware information of the host computer.',
    image: asset('assets/images/projects/ostiny.png'),
    links: [
      { href: 'https://github.com/mihinduranasinghe/LetaOS.ByMihinduRanasinghe', label: 'Source Code' },
      { href: 'https://dev.to/mihinduranasinghe/leta-os-by-mihindu-ranasinghe-1pco', label: 'More Details' },
    ],
  },
  {
    title: 'Team Master',
    tech: 'React / Node.js / Express / axios / Redux / MongoDB',
    description: 'All-in-one team and project management platform (Jira-like) under active development.',
    image: asset('assets/images/projects/TM.png'),
    links: [
      { href: 'http://www.teammaster.xyz/', label: 'Web App' },
      { href: 'http://www.teammaster.xyz/', label: 'More Details' },
    ],
  },
  {
    title: 'Cyber Chats',
    tech: 'Android Studio / Java / Kotlin / Firebase',
    description: 'Multi-user chat application available on Google Play.',
    image: asset('assets/images/projects/cyberchatstiny.jpg'),
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.mihinduranasinghe.cyberchats', label: 'Source Code' },
      { href: 'https://play.google.com/store/apps/details?id=com.mihinduranasinghe.cyberchats', label: 'More Details' },
    ],
  },
  {
    title: 'Corona Dashboard',
    tech: 'JavaScript / Bootstrap / SAAS / WHO API / Arimac HPB API / Location APIs / axios',
    description:
      'National/international COVID-19 live stats with hospital-wise updates and an interactive heat map.',
    image: asset('assets/images/projects/covid19.png'),
    links: [
      { href: 'https://covid19lk.live/', label: 'Web App' },
      { href: 'https://covid19lk.live/', label: 'More Details' },
    ],
  },
];

const chunk = <T,>(arr: T[], size: number) => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Projects = () => {
  const slides = chunk(projectList, 3);

  return (
    <section id="projects">
      <Container>
        <h2>
          <strong>Researches & Projects</strong>
        </h2>
        <span className="bar-title mb-5" />

        <div className="p-3" data-aos="fade-up" data-aos-delay="200">
          <h4>
            <strong>Research Highlights</strong>
          </h4>
          <Row className="g-3 mt-2 research-grid">
            {researchProjects.map((item) => (
              <Col key={item.title} md={4} sm={12}>
                <Card className="shadow-sm h-100 research-card">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="research-title">{item.title}</Card.Title>
                    <Card.Text className="research-text">{item.description}</Card.Text>
                    {item.links && (
                      <div className="mt-auto d-flex flex-column gap-1">
                        {item.links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="research-link">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="p-3 mt-5" data-aos="fade-up" data-aos-delay="300">
          <div className="mb-3">
            <h4>
              <strong>{highlightProject.title}</strong>
            </h4>
          </div>
          <Row className="p-4">
            <Col md={6}>
              <Card className="card-shadow shadow-lg rounded">
                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img className="d-block w-100 rounder" src={highlightProject.image} alt={highlightProject.title} />
                  </Carousel.Item>
                </Carousel>
              </Card>
            </Col>
            <Col md={6}>
              <p style={{ textAlign: 'justify' }}>{highlightProject.description}</p>
              {highlightProject.links.map((l) => (
                <div key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </div>

        <h4>
          <strong>Other projects</strong>
        </h4>
        <Card className="card-shadow shadow-lg rounded p-3" data-aos="fade-zoom" data-aos-delay="300">
          <Carousel indicators interval={8000}>
            {slides.map((group, idx) => (
              <Carousel.Item key={`slide-${idx}`}>
                <Row className="g-4">
                  {group.map((project) => (
                    <Col key={project.title} lg={4} sm={12}>
                      <Card className="shadow-lg h-100">
                        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            <strong>Technologies:</strong> {project.tech}
                          </Card.Subtitle>
                          <Card.Text>{project.description}</Card.Text>
                          <div className="mt-auto d-flex flex-wrap gap-2">
                            {project.links.map((link) => (
                              <Button key={link.href} as="a" href={link.href} target="_blank" rel="noreferrer" variant="primary" style={{ color: 'white' }}>
                                {link.label}
                              </Button>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>
      </Container>
    </section>
  );
};

export default Projects;
