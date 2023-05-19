import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components';

import { Landing, Login, Signup, Pendingassn, Submitassn, Contact, TeacherLogin, TeacherSignup, StudentProfile } from './pages'

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
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/teacherlogin" element={<TeacherLogin/>}/>
          <Route path="/teachersignup" element={<TeacherSignup/>}/>
          <Route path="/studentprofile" element={<StudentProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
