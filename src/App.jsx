import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
