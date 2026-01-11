import { useEffect, useMemo, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { asset } from '../utils/asset';

type Certification = {
  title: string;
  provider: string;
  status: string;
  link?: string;
  image?: string;
  embedBadgeId?: string;
};

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    provider: 'AWS',
    status: 'Completed',
    embedBadgeId: '4ced8c62-466e-474a-84ee-b8202e7f85d8',
  },
  {
    title: 'AWS Certified Developer – Associate',
    provider: 'AWS',
    status: 'Completed',
    embedBadgeId: 'dd585eac-1c77-4639-b03b-360c4332ddff',
  },
  {
    title: 'AWS Certified AI – Practitioner',
    provider: 'AWS',
    status: 'Completed',
    embedBadgeId: 'b2a6cd70-449f-47e4-9e67-0799187fab3e',
  },
  {
    title: 'AWS Certified Cloud – Practitioner',
    provider: 'AWS',
    status: 'Completed',
    embedBadgeId: '5717863a-8e3d-4c34-96f5-c3b322004694',
  },
  {
    title: 'AWS Certified ML Engineer – Associate',
    provider: 'AWS',
    status: 'Completed',
    embedBadgeId: '20266bbe-f79f-4afc-b3ca-ad003d0e05ba',
  },
  {
    title: 'Certified WSO2 API Manager Developer',
    provider: 'WSO2',
    status: 'Completed',
    link: 'https://certification.wso2.com/web/certificate/DYG8YD',
    image: asset('assets/images/certificates/CertificateAPIMCroped.png'),
  },
  {
    title: 'Certified WSO2 Identity Server Developer',
    provider: 'WSO2',
    status: 'Completed',
    link: 'https://certification.wso2.com/web/certificate/DYG8YD',
    image: asset('assets/images/certificates/CertificateIAMCroped.png'),
  },
  {
    title: 'Certified WSO2 Enterprise Integrator Developer - Streaming Integrator',
    provider: 'WSO2',
    status: 'Completed',
    link: 'https://certification.wso2.com/web/certificate/DYG8YD',
    image: asset('assets/images/certificates/CertificateIAMCroped.png'),
  },
];

const Certifications = () => {
  const scrollingList = useMemo(() => [...certifications, ...certifications], []);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{ startX: number; scrollLeft: number }>({ startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let frame: number;
    const speed = 2;

    const step = () => {
      if (marquee && !isDragging) {
        marquee.scrollLeft += speed;
        const half = marquee.scrollWidth / 2;
        if (marquee.scrollLeft >= half) {
          marquee.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isDragging]);

  useEffect(() => {
    const existing = document.querySelector('script[data-credly-embed]');
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.setAttribute('data-credly-embed', 'true');
    document.body.appendChild(script);
    return () => {
      // keep script for reuse; no cleanup to avoid reloading
    };
  }, []);

  const startDrag = (clientX: number) => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    setIsDragging(true);
    dragState.current = { startX: clientX, scrollLeft: marquee.scrollLeft };
  };

  const onDrag = (clientX: number) => {
    const marquee = marqueeRef.current;
    if (!marquee || !isDragging) return;
    const dx = clientX - dragState.current.startX;
    marquee.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = () => setIsDragging(false);

  return (
    <section id="certifications">
      <Container className="mb-5">
        <h2>
          <strong>Certifications</strong>
        </h2>
        <span className="bar-title mb-4" />
        <div
          className="cert-marquee"
          ref={marqueeRef}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => isDragging && onDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => onDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
        >
          <div className="cert-track">
            {scrollingList.map((cert, idx) => (
              <div className="cert-card" key={`${cert.title}-${idx}`}>
                {cert.embedBadgeId ? (
                  <iframe
                    className="cert-embed"
                    title={cert.title}
                    src={`https://www.credly.com/embedded_badge/${cert.embedBadgeId}`}
                    width="180"
                    height="220"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                ) : cert.image ? (
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                ) : (
                  <div className="cert-placeholder">{cert.provider}</div>
                )}
                <div className="cert-body">
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-meta">
                    <span className="cert-provider">{cert.provider}</span>
                    <span className="cert-status">{cert.status}</span>
                  </div>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                      View credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
