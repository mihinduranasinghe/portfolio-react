import { useState, type ReactNode } from 'react';
import { Container, Button } from 'react-bootstrap';

type ToggleKey = 'digitalroute' | 'skoolie' | 'tvm' | 'sysco' | 'wso2' | 'slInspire';

type WorkEntry = {
  key: ToggleKey;
  title: string;
  description: ReactNode;
  year: string;
  details: string;
};

const workEntries: WorkEntry[] = [
  {
    key: 'digitalroute' as ToggleKey,
    title: 'Senior Software Engineer at DigitalRoute',
    description: (
      <>
        <a href="https://www.digitalroute.com/" target="_blank" rel="noreferrer">
          <b>DigitalRoute</b>
        </a>{' '}
        provides an AI-powered usage data platform for telecom and SaaS enterprises.
      </>
    ) as ReactNode,
    year: '2024 - Present',
    details:
      'Designing and developing DigitalRoute’s scalable, AI-powered cloud platform for usage data management and billing enabling real-time processing, anomaly detection, and correction of high-volume usage events for enterprise customers. Focus on performance, reliability, and cloud-native architecture. Techstack: Node.js, TypeScript/JavaScript (React/Next.js), Docker/Kubernetes, Generative AI/ML (Amazon Bedrock, AWS SageMaker), AWS, Kafka, MongoDB, Postgres.',
  },
  {
    key: 'skoolie' as ToggleKey,
    title: 'Head of Technology at Skoolie',
    description: (
      <>
        <a href="https://skoolie.se" target="_blank" rel="noreferrer">
          <b>Skoolie</b>
        </a>{' '}
        is an AI-driven EdTech platform for personalized learning experiences.
      </>
    ) as ReactNode,
    year: '2024 - 2024',
    details:
      'Head of Technology for an AI-driven EdTech initiative: set and executed the strategic tech roadmap, led engineering delivery of personalized/adaptive learning features, and oversaw robust AI algorithms, scalability, and performance. Partnered with cross-functional teams to drive innovation and engagement. Techstack: Node.js, Python (FastAPI), TypeScript/JavaScript (React/Next.js), AWS, Docker/Kubernetes, Generative AI/NLP, MongoDB, Postgres.',
  },
  {
    key: 'tvm',
    title: 'Software Engineer at TVM Stockholm Sweden',
    description: (
      <>
        <a href="https://www.tvmmedia.com/" target="_blank" rel="noreferrer">
          <b>TVM</b>
        </a>{' '}
        is a Digital out ot Home (DOOH) advertising platform and a media tech giant.
      </>
    ) as ReactNode,
    year: '2023 - 2024',
    details:
      'Led the TVM AI project: prompt-based AI ad generation, AI-powered menu promotions, image editing, advanced content categorization/archival/retrieval for restaurants and TVM venues. Designed backend schemas and optimized embedded systems; implemented key UI features and generative AI integrations for classification/search. Techstack: Java, Kotlin (Spring Boot), Python (Django), TypeScript/JavaScript (React/Next.js), GCP/AWS, Docker/Kubernetes, Generative AI/NLP, OpenAI / Google Gemini.',
  },
  {
    key: 'sysco' as ToggleKey,
    title: 'Senior Software Engineer at Sysco LABS',
    description: (
      <>
        <a href="https://www.sysco.com/" target="_blank" rel="noreferrer">
          <b>Sysco</b>
        </a>{' '}
        as the global foodservice leader (#56 in Fortune 500).{' '}
        <a href="https://www.syscolabs.com/" target="_blank" rel="noreferrer">
          <b>Sysco LABS</b>
        </a>{' '}
        is the innovation arm transforming traditional foodservice through technology.
      </>
    ) as ReactNode,
    year: '2021 - 2023',
    details:
      'Joined as SE and promoted to Senior Full Stack Engineer. Delivered Sysco Shop (global e-commerce), Sysco Delivery (tracking), and Sysco PMT (pricing) with Kafka streaming and big data handling. Techstack: Apache Kafka, MQ, Java/Kotlin (Spring Boot), Python (Django), React/Redux, AWS/GCP, Docker/Kubernetes.',
  },
  {
    key: 'wso2' as ToggleKey,
    title: 'Full Stack Software Engineer at WSO2 - Internship',
    description: (
      <>
        <strong>
          <a href="https://www.wso2.com/" target="_blank" rel="noreferrer">
            WSO2
          </a>
        </strong>{' '}
        is an open-source technology provider with an enterprise platform for APIs, apps, and services.
      </>
    ) as ReactNode,
    year: '2019 - 2020',
    details:
      'WSO2 Certified API Manager / IAM / Enterprise Integrator Developer. Built pre-built API CI/CD workflows for WSO2 API Cloud with GitHub Actions; implemented API versioning/revisioning and lifecycle features for Choreo Cloud; researched ML-based execution time prediction for the Ballerina language.',
  },
  {
    key: 'slInspire' as ToggleKey,
    title: 'Voluntary Software Engineer at SL INSPIRE',
    description: (
      <>
        <strong>
          <a href="https://slinspire.lk/" target="_blank" rel="noreferrer">
            SL INSPIRE
          </a>
        </strong>{' '}
        is a national project in collaboration with IEEE & SL2College to provide equal access to education in Sri Lanka.
      </>
    ) as ReactNode,
    year: '2018 - 2020',
    details:
      'Contributed as a volunteer engineer building the platform that helps students access critical educational resources.',
  },
];

const Work = () => {
  const [open, setOpen] = useState<Record<ToggleKey, boolean>>({
    digitalroute: true,
    skoolie: false,
    tvm: false,
    sysco: false,
    wso2: false,
    slInspire: false,
  });

  const toggle = (key: ToggleKey) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="cv">
      <Container>
        <h2>
          <strong>Work Experience</strong>&nbsp;
          <a
            href="https://drive.google.com/file/d/1wlxhfPToDyj-3D_qAfRKO9Xof37nFY4v/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm" className="download-btn">
              Download CV
            </Button>
          </a>
        </h2>
        <span className="bar-title mb-4" />
        <div data-aos="fade-up" data-aos-delay="300" className="mb-4">
          <ul className="timeline">
            {workEntries.map((entry) => (
              <li key={entry.key}>
                <h5>
                  <strong>{entry.title}</strong>
                </h5>
                <p className="mb-1">
                  <em>{entry.description}</em>
                </p>
                <div className="d-flex flex-row mt-2 align-items-center">
                  <p className="year p-2 mb-0">{entry.year}</p>
                  <Button className="work-toggle-btn" onClick={() => toggle(entry.key)}>
                    {open[entry.key] ? 'Hide Details' : 'More Details'}
                  </Button>
                </div>
                {open[entry.key] && (
                  <p className="mt-2 work-detail">
                    <em>{entry.details}</em>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Work;
