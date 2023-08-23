// import React from 'react'
// import './footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
// const Footer = () => {
//   return (

//     <div class="footer">
//     <div class="container">
//       <div class="row text-center">
//         <div class="col-lg-12 col-sm-12 col-xs-12">
//           <div class="footer_menu">
//             <ul class="list-unstyled">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">Add Account</a></li>
//               <li><a href="#">Gallery</a></li>
//             </ul>
//           </div>
//           <div class="footer_profile">
//             <ul class="list-inline">
//             <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
//                 <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
//                 <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
//                 <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
//             </ul>
//           </div>
//           <div class="footer_copyright">
//             <p>© 2023 LagnGhar. All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
 
  
  
  
  
    
//   )
// }

// export default Footer;


// import React from 'react';
// import './footer.css'; // Import your custom CSS file
// // import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

// function Footer() {
//     return (
//         <footer className="footer-distributed">
//             <div className="footer-left">
//                 <h3>Sagar<span>Developer</span></h3>
//                 <p className="footer-links">
//                     <a href="#">Home</a> |
//                     <a href="#">About</a> |
//                     <a href="#">Contact</a> |
//                     <a href="#">Blog</a>
//                 </p>
//                 <p className="footer-company-name">
//                     Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved
//                 </p>
//             </div>
//             <div className="footer-center">
//                 <div>
//                     <i className="fa fa-map-marker"></i>
//                     <p><span>Ghaziabad</span> Delhi</p>
//                 </div>
//                 <div>
//                     <i className="fa fa-phone"></i>
//                     <p>+91 74**9**258</p>
//                 </div>
//                 <div>
//                     <i className="fa fa-envelope"></i>
//                     <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
//                 </div>
//             </div>
//             <div className="footer-right">
//                 <p className="footer-company-about">
//                     <span>About the company</span>
//                     <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript and Projects using C/C++.
//                 </p>
//                 <div className="footer-icons">
//                     <a href="#"><i className="fa fa-facebook"></i></a>
//                     <a href="#"><i className="fa fa-instagram"></i></a>
//                     <a href="#"><i className="fa fa-linkedin"></i></a>
//                     <a href="#"><i className="fa fa-twitter"></i></a>
//                     <a href="#"><i className="fa fa-youtube"></i></a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';


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

