import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Events from './pages/Events/Events';
import MyTasks from './pages/MyTasks/MyTasks';
import Books from './pages/Books/Books';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/mytasks" element={<MyTasks/>}/>
    <Route path="/books" element={<Books/>}/>
   </Routes>
  );
}

export default App;
