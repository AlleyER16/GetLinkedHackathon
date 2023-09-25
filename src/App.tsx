import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RemoveSticky from "./helpers/RemoveSticky/RemoveSticky";

import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  return (
    <BrowserRouter>
      <RemoveSticky />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Preloader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Preloader />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
