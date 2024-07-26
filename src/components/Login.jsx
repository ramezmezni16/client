import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login/", { email, password })
            .then(res => {
                console.log(res.data);
                setEmail('');
                setPassword('');
                navigate('/HomePage');
            })
            .catch(err => {
                const errorResponse = err.response?.data?.errors || {};
                const errorArr = Object.values(errorResponse).map(error => error.message);
                setError(errorArr);
            });
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <Link to={`/Register`}>
                                            <p>You Don't Have an Account ?</p>
                                        </Link>
                                    </div>
                                    <button type="submit" className="btn btn-custom_sub btn-block w-100">Submit</button>
                                    <button type="button" className="btn btn-custom_g btn-block w-100 mt-2">
                                        <img src="/icons/google.png" alt="Icon" width="20" className="mr-2" />
                                        Login with Google
                                    </button>
                                </form>
                                {error && <div className="alert alert-danger mt-3">{error.join(', ')}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;