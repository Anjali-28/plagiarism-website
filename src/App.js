import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components';

import { Subcomplete, Pendingassn, Submitassn, Landing, Login, Signup, Contact, TeacherLogin, TeacherSignup, StudentProfile, TeacherProfile, About} from './pages';

function App() {
  return (
    <div className="app">
      <BrowserRouter>      
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/teacherlogin" element={<TeacherLogin/>}/>
          <Route path="/teachersignup" element={<TeacherSignup/>}/>
          <Route path="/studentprofile" element={<StudentProfile/>}/>
          <Route path="/pendingassn" element={<Pendingassn />} />
          <Route path="/submitassn" element={<Submitassn />} />
          <Route path="/subcomplete" element={<Subcomplete />} />
          <Route path="/teacherprofile" element={<TeacherProfile/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
