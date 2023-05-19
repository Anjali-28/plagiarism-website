import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components';

import { Landing, Login, Signup, Pendingassn, Submitassn } from './pages'

function App() {
  return (
    <div className="app">
      <BrowserRouter>      
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pendingassn" element={<Pendingassn />} />
          <Route path="/submitassn" element={<Submitassn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
