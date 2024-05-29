import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
