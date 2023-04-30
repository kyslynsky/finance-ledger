import { Hero } from "../../layout/Hero";
import { Menu } from "../../layout/Menu";
import { About } from "../../layout/About";
import { Cases } from "../../layout/Cases";
import { Blog } from "../../layout/Blog";
import { Team } from "../../layout/Team";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import styles from "./Home.module.css";

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Menu />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
