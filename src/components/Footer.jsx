import React from 'react';
import '../App.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 footer_cl">
                        <div className="footer_clr">
                            <p className="mb-0">&copy; 2024 Reservation</p>
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                        </div>
                        <div className="float-right">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/icons/facebook.png" alt="Facebook" width="20" className="mx-2" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram.png" alt="Instagram" width="20" className="mx-2" /></a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><img src="/icons/twitter.png" alt="Twitter.png" width="20" className="mx-2" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;