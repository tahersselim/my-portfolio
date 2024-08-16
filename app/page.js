import Intro from "./components/Intro/Intro";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Works from "./components/work/Works";
import Contact from "./components/contact/contact";
import Navbar from "./components/Nav bar/navbar";
export default function Home() {
  return (
   <div>
    <Navbar />
    <Intro />
    <Skills />
    <Works />
    <Contact />
    <Footer />
   </div>
  );
}
