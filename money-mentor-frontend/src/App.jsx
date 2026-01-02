import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import { Button } from "@mui/material"
function App() {
    return (
    <BrowserRouter>
      <div>
        <Header> 
          
        </Header>
        <nav>
          <Link to="/login">Login</Link>
          <br/>
          <Link to="/signup">SignUp</Link>
        </nav>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
