import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {


    const nav = useNavigate();
    
    return (
        <header className="custom-header py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src="/icons/smile.jpg" alt="Logo" width="30" className="mr-2" />
                    <span>Reservation.com</span>
                </div>
                <div className="d-flex align-items-center">
                    <span className="mr-3">USD $</span>
                    <a href="#" className="nav-link p-0">About Us</a>
                </div>
                <Link to="/dashboard">My trips</Link>
                <Link to={`/Login`} className="d-flex align-items-center">
                    <p>Login</p>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;