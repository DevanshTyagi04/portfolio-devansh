import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ShowcaseSection />
    </main>
  )
}

export default App