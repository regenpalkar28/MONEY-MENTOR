import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Button } from "@mui/material"
function App() {
    return (
    <BrowserRouter>
      <div>
        <Header> 
          
        </Header>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
