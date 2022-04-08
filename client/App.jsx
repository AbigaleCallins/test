import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/ReviewPage.jsx";
import SingleReview from "./pages/UserReview.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:id" element={<SingleReview />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;