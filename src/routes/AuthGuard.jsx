import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router";

const AuthGuard = ({ children, requireAuth }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN") || null;
  const logged = useSelector((state) => state.auth.logged)

  useEffect(() => {
    if (!logged) {
      navigate("/login", { replace: true });
    }
  }, [logged]);
  
  // Nếu yêu cầu đăng nhập nhưng chưa có token -> Chuyển về Login
  if (requireAuth && !token && !logged) return <Navigate to="/login" replace />;

  // Nếu không yêu cầu đăng nhập nhưng đã có token -> Chuyển về Dashboard
  if (!requireAuth && token) return <Navigate to="/dashboard" replace />;

  return children;
};

export default AuthGuard;
