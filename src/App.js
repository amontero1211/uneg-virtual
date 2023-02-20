import { Routes, Route } from 'react-router-dom';
import Forgotpassword from './routes/Forgotpassword';
import Home from './routes/Home';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Subject from './routes/Subject';
import Unit from './routes/Unit';
import Admin from './routes/Admin';

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Forgotpassword" element={<Forgotpassword />} />
      <Route path="Login" element={<Login />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Subject" element={<Subject />} />
      <Route path="Unit" element={<Unit />} />
      <Route path="Admin" element={<Admin />} />
    </Routes>
  );
}

export default App;