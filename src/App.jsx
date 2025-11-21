import './App.css'
import Navbar from './Components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Experience from './Sections/Experience'
import Footer from './Sections/Footer'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Testimonial from './Sections/Testimonial'

function App() {


  return (
    <>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
