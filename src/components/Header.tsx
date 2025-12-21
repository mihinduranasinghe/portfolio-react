import { Navbar, Nav, Container } from 'react-bootstrap';

const navItems = [
  { href: '#home', label: 'Home', icon: 'bx bx-home' },
  { href: '#about', label: 'About', icon: 'bx bx-user' },
  { href: '#certifications', label: 'Certifications', icon: 'bx bx-award' },
  { href: '#cv', label: 'Work', icon: 'bx bx-briefcase' },
  { href: '#achievements', label: 'Achievements', icon: 'bx bx-trophy' },
  { href: '#projects', label: 'Projects', icon: 'bx bx-book-content' },
  { href: '#articles', label: 'Articles', icon: 'bx bx-book-reader' },
  { href: '#references', label: 'Recommendations', icon: 'bx bxs-badge-check' },
  { href: '#about', label: 'Contact', icon: 'bx bx-envelope' },
];

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <div className="home p-1 rounded">
          <Nav className="me-2">
            <Nav.Link href="#home" className="text-uppercase d-flex align-items-center">
              <i className="bx bx-home me-1" /> Home
            </Nav.Link>
          </Nav>
        </div>
        <Container>
          <Navbar.Toggle aria-controls="main-navbar" className="mb-1" />
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav>
              {navItems.slice(1).map((item) => (
                <Nav.Link
                  key={item.href}
                  href={item.href}
                  className="text-uppercase js-scroll-trigger smooth-scroll d-flex align-items-center"
                >
                  <i className={`${item.icon} me-1`} /> {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
