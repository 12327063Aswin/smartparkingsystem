import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically move to the timer selection screen after 3 seconds
    const timer = setTimeout(() => {
      navigate("/timer");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to Smart Parking System</h1>
    </div>
  );
};

export default WelcomeScreen;
