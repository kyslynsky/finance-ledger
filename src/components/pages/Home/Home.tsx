import { Hero } from "../../layout/Hero";
import { Menu } from "../../layout/Menu";
import { About } from "../../layout/About";
import { Cases } from "../../layout/Cases";
import { Blog } from "../../layout/Blog";
import { Team } from "../../layout/Team";
import { Contact } from "../../layout/Contact";

const Home = (): JSX.Element => {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
      </main>
    </>
  );
};

export default Home;
