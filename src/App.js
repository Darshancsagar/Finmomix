import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import More from "./Components/More";

function App() {
  return (
    <div className="App bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/more" element={<More />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
