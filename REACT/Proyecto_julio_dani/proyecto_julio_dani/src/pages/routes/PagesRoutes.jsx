import { Routes, Route } from "react-router-dom";

import { Home, Games, Login, Settings, Comments } from "../routes/index";

import { HomeLayout, ProtectedLayout } from "../../components/index";
export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Games" element={<Games />} />
      <Route path="/comments" element={<Comments />} />

      <Route element={<HomeLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};