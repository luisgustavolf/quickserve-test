import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        {/* Fallback to root */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}