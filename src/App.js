import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Events from './pages/Events/Events';
import MyTasks from './pages/MyTasks/MyTasks';
import Books from './pages/Books/Books';
import BookDetails from './components/Books/BookDetails';
import PrivateOutlet from './components/PrivateOutlet'


const queryClient = new QueryClient()

function App() {

  return (
    
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/" element={<PrivateOutlet> <Dashboard /> </PrivateOutlet>}/>
          <Route path="events" element={<PrivateOutlet> <Events /> </PrivateOutlet>}/>
          <Route path="mytasks" element={<PrivateOutlet> <MyTasks /> </PrivateOutlet>}/>
          <Route path="books" element={<PrivateOutlet> <Books /> </PrivateOutlet>}/>
          <Route path="book/:id" element={<PrivateOutlet> <BookDetails /> </PrivateOutlet>}/>

        </Routes>
      </QueryClientProvider>
  );
}

export default App;
