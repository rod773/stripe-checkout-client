import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "components/Checkout";
import Cancel from "./components/Cancel";
import Success from "./components/Success";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
