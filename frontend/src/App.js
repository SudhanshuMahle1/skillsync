import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
        path="/skills"
        element={
        <PrivateRoute>
          <Skills />
          </PrivateRoute>
        }
        />

        <Route
        path="/projects"
        element={
        <PrivateRoute>
          <Projects />
          </PrivateRoute>
        }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
