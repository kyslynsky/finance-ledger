import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { PTag } from "./common/PTag";

const Home = lazy(() => import("./pages/Home/Home"));

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="*"
          element={
            <PTag size="m" color="black">
              Page not found or still in development
            </PTag>
          }
        />
      </Routes>
    </>
  );
}

export default App;
