import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));

function App(): JSX.Element {
  return <Home />;
}

export default App;
