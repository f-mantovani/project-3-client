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
import books from './books.json'

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path='/private' element={<PrivateOutlet />}>
          <Route path="/private/dashboard" element={<Dashboard/>}/>
          <Route path="/private/events" element={<Events/>}/>
          <Route path="/private/mytasks" element={<MyTasks/>}/>
          <Route path="/private/books" element={<Books/>}/>
          <Route path="/private/book/:id" element={<BookDetails books={books} />} />
        </Route>

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
