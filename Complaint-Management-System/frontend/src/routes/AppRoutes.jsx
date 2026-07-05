import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import UserDashboard from "../pages/user/UserDashboard";
import SubmitComplaint from "../pages/user/SubmitComplaint";
import MyComplaints from "../pages/user/MyComplaints";
import Profile from "../pages/user/Profile";

import StaffDashboard from "../pages/staff/StaffDashboard";
import AssignedComplaints from "../pages/staff/AssignedComplaints";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AllComplaints from "../pages/admin/AllComplaints";
import Users from "../pages/admin/Users";
import Departments from "../pages/admin/Departments";
import Reports from "../pages/admin/Reports";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/user/dashboard" element={<ProtectedRoute allowedRoles={["user"]}><UserDashboard /></ProtectedRoute>} />
      <Route path="/user/submit" element={<ProtectedRoute allowedRoles={["user"]}><SubmitComplaint /></ProtectedRoute>} />
      <Route path="/user/complaints" element={<ProtectedRoute allowedRoles={["user"]}><MyComplaints /></ProtectedRoute>} />
      <Route path="/user/profile" element={<ProtectedRoute allowedRoles={["user"]}><Profile /></ProtectedRoute>} />

      <Route path="/staff/dashboard" element={<ProtectedRoute allowedRoles={["staff"]}><StaffDashboard /></ProtectedRoute>} />
      <Route path="/staff/complaints" element={<ProtectedRoute allowedRoles={["staff"]}><AssignedComplaints /></ProtectedRoute>} />
      <Route
    path="/admin/profile"
    element={
        <ProtectedRoute allowedRoles={["admin"]}>
            <Profile />
        </ProtectedRoute> 
    }
/>

<Route
    path="/staff/profile"
    element={
        <ProtectedRoute allowedRoles={["staff"]}>
            <Profile />
        </ProtectedRoute>
    }
/>
      <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/complaints" element={<ProtectedRoute allowedRoles={["admin"]}><AllComplaints /></ProtectedRoute>} />
      <Route path="/admin/users" element={<ProtectedRoute allowedRoles={["admin"]}><Users /></ProtectedRoute>} />
      <Route path="/admin/departments" element={<ProtectedRoute allowedRoles={["admin"]}><Departments /></ProtectedRoute>} />
      <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={["admin"]}><Reports /></ProtectedRoute>} />
    </Routes>
  );
}

export default AppRoutes;