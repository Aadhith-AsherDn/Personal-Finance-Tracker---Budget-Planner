import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Budget from "../pages/Budget"
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

            <Route element={<MainLayout />}>

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                    <Dashboard />
                    </ProtectedRoute>
                }
                />

            <Route
                path="/transactions"
                element={
                    <ProtectedRoute>
                    <Transactions />
                    </ProtectedRoute>
                }
                />
            <Route
                path="/budget"
                element={
                    <ProtectedRoute>
                    <Budget />
                    </ProtectedRoute>
                }
                />
            </Route>

        </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;