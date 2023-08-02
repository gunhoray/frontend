import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import CrewWritePage from "../pages/CrewWritePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CrewPage from "../pages/CrewPage";
import CrewDetailPage from "../pages/CrewDetailPage";
import MainLayout from "../components/layout/MainLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/todo/write" element={<TodoWritePage />} />
          <Route path="/crew/write" element={<CrewWritePage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/crew/detail" element={<CrewDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;