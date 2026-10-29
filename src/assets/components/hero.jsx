import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my routing practice project!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h1>Skills Page</h1>
      <p>HTML, CSS, JavaScript, React</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is my Contact page.</p>
    </div>
  );
}

function Hero() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/skills">Skills</Link> {" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default Hero;