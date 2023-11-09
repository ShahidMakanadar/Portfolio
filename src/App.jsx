import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import BottomContact from "./components/cards/BottomContact";
import RootLayout from "./components/layout";
function App() {
  return (
    <div>
      <RootLayout/>
      <div className="flex flex-col mx-auto justify-center w-full h-full scroll-smooth">
      <section className=" w-full flex justify-center items-center">
        <Hero />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
        <BottomContact />
      </section>
      
    </div>
  </div>
  );
}

export default App;
