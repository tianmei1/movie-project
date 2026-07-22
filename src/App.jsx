import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<PopularPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </div>
  );
};

export default App;
