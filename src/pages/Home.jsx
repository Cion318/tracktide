import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeContent from "../components/HomeContent";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    try {
      // Make an API call with the entered client ID (replace with your actual API call)
      const response = "123456";

      if (inputValue === response) {
        // If the client ID is valid, navigate to the Dashboard page
        navigate("/dashboard");
      } else {
        setError("Invalid client ID. Please try again.");
      }
    } catch (error) {
      console.error("Error making API call:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <HomeContent />
      <div>
        <label htmlFor="textField">Text Field: </label>
        <input
          type="text"
          id="textField"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text ..."
        />
      </div>
      <div>
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Home;
