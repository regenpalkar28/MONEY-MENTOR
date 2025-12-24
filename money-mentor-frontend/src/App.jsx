import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';


function App() {
    return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
