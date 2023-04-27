import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { HTag } from "./common/HTag";

const Home = lazy(() => import("./pages/Home/Home"));

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="*"
            element={
              <HTag tag="h1">Page not found or still in development</HTag>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
