
import React from 'react';
import '../stylings/footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid"> {/* Use container-fluid to make the footer full width */}
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="footer-about">
                            <h5><b>LagnGhar: Crafting Your Perfect Moment</b></h5>
                            <p>
                            We specialize in turning your wedding dreams into cherished memories.
                            Your vision, our expertise – a match made in wedding heaven.
                            Let us handle the logistics while you savor every moment.
                            More than planning, we capture the essence of your love story.
                            <br></br>
                            Join us for a seamless and magical wedding journey.

                            </p>
                            <div className="footer-social">
                                <Link to='/home'><i className="fab fa-twitter"></i></Link>
                                <Link to='/home'><i className="fab fa-facebook-f"></i></Link>
                                <Link to='/home'><i className="fab fa-instagram"></i></Link>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3  ">
                        <div className="footer-contact">
                            <h5>Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt"></i>Wakad, Pune</p>
                            <p><i className="fa fa-phone-alt"></i>012 4587</p>
                            <p><i className="fa fa-envelope"></i>lagnghar@example.com</p>

                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-right">
                        <div className="footer-links ">
                            <h5>Useful Links</h5>
                            <Link className='nav-link' to='/home'>
                              Home
                            </Link>
                            <Link className='nav-link' to='/home'>
                              Services
                            </Link>
                            <Link className='nav-link' to='/vendor'>
                              Vendor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6" >
                            <div className="copy-text">
                                <p>&copy; <a href="#">LagnGhar</a>. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="copy-menu d-flex justify-content-end">
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <Link className='nav-link' to='/contact'>
                              Contact 
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

