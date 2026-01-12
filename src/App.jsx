import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Hero />
        <ShowcaseSection />
    </main>
  )
}

export default App