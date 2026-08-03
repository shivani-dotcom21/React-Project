import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Common/Layout";
import AquaTerra from "./Components/Pages/AquaTerra";
import Details from "./Components/Pages/Details";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="aqua-terra" element={<AquaTerra />} />
            <Route path="details" element={< Details/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
