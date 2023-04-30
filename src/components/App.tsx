import { lazy } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Home = lazy(() => import("./pages/Home/Home"));

function App(): JSX.Element {
  return (
    <>
      <Home />;
      <ToastContainer transition={Zoom} />
    </>
  );
}

export default App;
