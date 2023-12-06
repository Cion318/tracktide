import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
