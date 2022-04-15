import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  return (
   <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
