import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact">
      <Container className="mb-5">
        <h2>
          <strong>Contact</strong>
        </h2>
        <span className="bar-title mb-4" />
        <p>
          Feel free to reach out at <a href="mailto:mihinduranasinghe@gmail.com">mihinduranasinghe@gmail.com</a> or call (+46) 76 920
          55 96. I&apos;m currently based in Stockholm, Sweden.
        </p>
      </Container>
    </section>
  );
};

export default Contact;
