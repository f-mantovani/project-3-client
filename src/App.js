import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
