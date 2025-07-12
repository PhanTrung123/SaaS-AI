import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import Blog from "./pages/Blog";
import Images from "./pages/Images";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObj from "./pages/RemoveObj";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="images" element={<Images />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-obj" element={<RemoveObj />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
