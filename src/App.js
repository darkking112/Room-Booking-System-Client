import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import GuestHome from './pages/guestHome/GuestHomePage.jsx';
import AdminHome from './pages/adminHome/AdminHomePage.jsx';
import EmployeeHome from './pages/employeeHome/EmployeeHomePage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/guest' element={<GuestHome />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/employee' element={<EmployeeHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
