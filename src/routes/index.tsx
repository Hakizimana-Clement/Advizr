import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../components/Pages/Card";
import Dashboard from "../components/Pages/Dashboard";
import Favorite from "../components/Pages/Favorite";
import Login from "../components/Pages/Login";
import NotFound from "../components/Pages/NotFound";
import Setting from "../components/Pages/Setting";
import Signup from "../components/Pages/Signup";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/dashboard" element={<Dashboard />} />
        <Route path="/users/dashboard/favorite" element={<Favorite />} />
        <Route path="/users/dashboard/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routers;
