import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();

  const checkClientId = (clientId) => {
    if (clientId === "123456") {
      //navigate("/dashboard");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home checkClientId={checkClientId} />} />
        <Route path="/dashboard" element={<Dashboard clientId={"123456"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
