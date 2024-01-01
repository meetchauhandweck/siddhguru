import { Route, Routes } from "react-router-dom";
import "./global.scss";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import LocomotoveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scroll = new LocomotoveScroll({
      smooth: true,
    });
  });
  return (
    <Layout>
      <Routes>
        <Route path="/siddhguru" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
