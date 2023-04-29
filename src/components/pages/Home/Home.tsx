import { Hero } from "../../layout/Hero";
import { Menu } from "../../layout/Menu";
import { About } from "../../layout/About";
import { Cases } from "../../layout/Cases";
import { Blog } from "../../layout/Blog";
import { Team } from "../../layout/Team";

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
      </main>
    </>
  );
};

export default Home;
