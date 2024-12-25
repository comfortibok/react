import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import ToggleButton from "./ToggleButton";
import Bio from "./Bio";
function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/books" element={<Books />} />
        <Route path="/toogle" element={<ToggleButton />} />
      </Routes>
    </Router>
  );
}

export default App;
