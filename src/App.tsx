import Overlay from "./Overlay"
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Overlay pages="Welcome" />} />
          <Route path="/OnElearning" element={<Overlay pages="OnElearning" />} />
          <Route path="/NotElearning" element={<Overlay pages="NotElearning" />} />
          <Route path="/ScrapeItems" element={<Overlay pages="ScrapeItems" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
