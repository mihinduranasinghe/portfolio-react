import { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Certifications from './components/Certifications';
import Work from './components/Work';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Articles from './components/Articles';
import References from './components/References';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="page-content">
      <Header />
      <main>
        <Home />
        <About />
        <Certifications />
        <Work />
        <Achievements />
        <Projects />
        <Articles />
        <References />
      </main>
    </div>
  );
};

export default App;
