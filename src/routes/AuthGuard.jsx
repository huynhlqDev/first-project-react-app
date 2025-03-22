import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children, requireAuth }) => {
  const token = localStorage.getItem("TOKEN") || null;
  const logged = useSelector((state) => state.auth.logged)
  
  
  // Nếu yêu cầu đăng nhập nhưng chưa có token -> Chuyển về Login
  if (requireAuth && !token && !logged) return <Navigate to="/login" replace />;

  // Nếu không yêu cầu đăng nhập nhưng đã có token -> Chuyển về Dashboard
  if (!requireAuth && token) return <Navigate to="/dashboard" replace />;

  return children;
};

export default AuthGuard;
