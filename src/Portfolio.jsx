import Nav from './components/Nav';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <div>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <MarqueeStrip reverse />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
