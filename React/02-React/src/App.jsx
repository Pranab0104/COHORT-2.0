import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Reptiles from "./pages/Reptiles";
import Birds from "./pages/Birds";
import Marine from "./pages/Marine";

import Bigcat from "./pages/Bigcat";
import Canines from "./pages/Canines";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/reptiles" element={<Reptiles />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/marine" element={<Marine />} />

        {/* inner pages of a particular card like animal page's Bigcat */}
        <Route path="/bigcat" element={<Bigcat />} />
        <Route path="/cannie" element={<Canines/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
