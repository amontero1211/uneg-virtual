import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing</h1>} />
      <Route path="/forgot-password" element={<h1>Forgotpasswordφ</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/profile" element={<h1>Perfil</h1>} />
      <Route path="/unit" element={<h1>Unit</h1>} />
      <Route path="/admin" element={<h1>Admin</h1>} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<h1>Home</h1>} />
        <Route path="subject" element={<h1>Subject</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
