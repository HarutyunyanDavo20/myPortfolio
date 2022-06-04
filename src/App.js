import React from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./pages/apps/Apps";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apps/*" element={<Apps />} />
    </Routes>
  );
}

export default App;
