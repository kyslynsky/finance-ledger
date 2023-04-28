import { Hero } from "../../layout/Hero";
import { Menu } from "../../layout/Menu";
import { About } from "../../layout/About";

const Home = (): JSX.Element => {
  return (
    <>
      <Menu />
      <Hero />
      <main>
        <About />
      </main>
    </>
  );
};

export default Home;
