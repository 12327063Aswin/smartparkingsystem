import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import TimerSelection from "./components/TimerSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/timer" element={<TimerSelection />} />
    </Routes>
  );
}

export default App;
