import { BrowserRouter, Routes, Route } from "react-router-dom";

import RemoveSticky from "./helpers/RemoveSticky/RemoveSticky";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <RemoveSticky />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
