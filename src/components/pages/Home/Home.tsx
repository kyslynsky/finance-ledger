import { Hero } from "../../layout/Hero";
import { Menu } from "../../layout/Menu";
import { About } from "../../layout/About";
import { Cases } from "../../layout/Cases";

const Home = (): JSX.Element => {
  return (
    <>
      <Menu />
      <Hero />
      <main>
        <About />
        <Cases />
      </main>
    </>
  );
};

export default Home;
