import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import EditProfile from "./components/EditProfile.";
import HomePage from "./components/HomePage";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import EditBooking from "./components/EditBooking";

function App() {
  return (
        <Router>
          <Routes>
            <Route></Route>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/homePage/Profile' element={<EditProfile/>} />
            <Route path='/homePage' element={<HomePage/>}></Route>
            <Route path=':HotelId/reservation' element={<BookingForm/>} />
            <Route path=':HotelId/reservation/confirmation/done' element={<Confirmation/>} />
            <Route path='/editBooking/:hotelId' element={<EditBooking/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/aboutUs' element={<AboutUs/>} />
          </Routes>
        </Router>
  )
}

export default App;
