import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  //const navigate = useNavigate();

  const checkClientId = (clientId) => {
    if (clientId === "123456") {
      //navigate("/dashboard");
    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home checkClientId={checkClientId} />} />
        <Route path="/dashboard" element={<Main clientId={"123456"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
