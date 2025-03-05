import "./App.css";
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Presentation from "./pages/Presentation";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
