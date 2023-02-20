import { Routes, Route } from 'react-router-dom';
import Forgotpassword from './routes/Forgotpassword';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Subject from './routes/Subject';
import Unit from './routes/Unit';
import Admin from './routes/Admin';
import Home from './routes/Landing';

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="Forgotpassword" element={<Forgotpassword />} />
      <Route path="Login" element={<Login />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Subject" element={<Subject />} />
      <Route path="Unit" element={<Unit />} />
      <Route path="Admin" element={<Admin />} />
      <Route path="Home" element={<Home />}  />
    </ Routes>
  );
}

export default App;