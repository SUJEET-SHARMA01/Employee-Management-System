import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import LoginLanding from "./pages/LoginLanding";
import Employee from "./pages/Employee";
import Setting from "./pages/Setting";
import Leave from "./pages/Leave";
import Attendance from "./pages/Attendance";
import Payslip from "./pages/Payslip";
import PrintPaySlip from "./pages/PrintPaySlip";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin Portal"
              subtitle="Sign in to manage the organization"
            />
          }
        />
        <Route
          path="login/employee"
          element={
            <LoginForm
              role="employee"
              title="Employee Portal"
              subtitle="Sign in to access your account"
            />
          }
        />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payslip" element={<Payslip />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPaySlip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
