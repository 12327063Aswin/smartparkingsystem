import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const TimerSelection = () => {
  const navigate = useNavigate();
  const [customTime, setCustomTime] = useState({ hours: "", minutes: "" });

  const presetTimes = [2, 4, 8, 10]; // Preset options in powers of 2

  const handleCustomChange = (e) => {
    setCustomTime({ ...customTime, [e.target.name]: e.target.value });
  };

  const handleSetTimer = (time) => {
    console.log(`Timer set for ${time} hours`);
    navigate("/parking"); // Move to the next step
  };

  return (
    <div className="timer-container">
      <h2>Select Parking Duration</h2>
      <div className="timer-options">
        {presetTimes.map((time) => (
          <button key={time} onClick={() => handleSetTimer(time)}>
            {time} Hours
          </button>
        ))}
      </div>
      <div className="custom-timer">
        <input
          type="number"
          name="hours"
          placeholder="Hours"
          value={customTime.hours}
          onChange={handleCustomChange}
        />
        <input
          type="number"
          name="minutes"
          placeholder="Minutes"
          value={customTime.minutes}
          onChange={handleCustomChange}
        />
        <button onClick={() => handleSetTimer(`${customTime.hours}h ${customTime.minutes}m`)}>
          Set Custom Time
        </button>
      </div>
    </div>
  );
};

export default TimerSelection;
