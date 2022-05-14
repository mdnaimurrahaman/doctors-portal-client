
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>
      }/>
        <Route path='/reviews' element={<Reviews></Reviews>}/>
        <Route path='contactUs' element={<ContactUs></ContactUs>}/>
        <Route path='about' element={<About></About>}/>
        <Route path='login' element={<Login></Login>}/>
        <Route path='signUp' element={<SignUp></SignUp>}/>
      </Routes>
    </div> 
  );
}

export default App;
 