import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cta from "./components/cta/Cta";
import Homepage from "./components/homepage/Homepage";
import Parallax from "./components/parallax/Parallax";
import Portofolio from "./components/portfolio/Portofolio";
import Design from "./components/skill/Design";
import Programming from "./components/skill/Programming";
import Certification from "./components/certification/Certification";
import Sidebar from "./components/sidebar/Sidebar";

const Home = () => {
    return (
        <div>
            <Sidebar />
            <section id="Homepage">
                <Homepage />
            </section>
            <section>
                <Parallax type="about" />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="skills">
                <Programming />
            </section>
            <section>
                <Design />
            </section>
            <section>
                <Certification />
            </section>
            <section id="Projects">
                <Parallax type="projects" />
            </section>
            <Portofolio />
            <section>
                <Cta />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
