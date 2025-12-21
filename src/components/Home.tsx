import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { asset } from '../utils/asset';

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ['', 'Full-Stack Engineer', 'Machine Learning & AI Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ backgroundImage: `url(${asset('assets/images/bg_notebook.jpg')})` }}
    >
      <div className="hero-container" data-aos="fade-in">
        <div className="avatar-container">
          <img src={asset('assets/images/avatar.jpg')} className="avatar me-3" alt="Mihindu Ranasinghe" />
        </div>
        <h1 className="mt-3">Hello, I&apos;m Mihindu Ranasinghe</h1>
        <h5>
          <strong>Senior Software Engineer at Digital Route</strong>
        </h5>
        <p className="text-white">
          <span className="typed" ref={typedRef} />
        </p>
      </div>
    </section>
  );
};

export default Home;
