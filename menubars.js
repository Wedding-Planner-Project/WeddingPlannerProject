import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import { useHistory, Link } from 'react-router-dom';
import appLogo from './lagnghar-1.png';

import { Row } from 'reactstrap';


function Menubars(){

    var history = useHistory();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    var SignIn =()=>{
      history.push("/login")
    }

    var SignUp =()=>{
      history.push("/customerReg")
    }
  
    const handleLogout = () => {
      sessionStorage.clear();
      history.push('/home');
    };
  
    var routeToDashboard=()=>{
      var isLoggedIn = sessionStorage.getItem("isLoggedIn");
      var role = sessionStorage.getItem("role");

      if(isLoggedIn){
        if(role=="ROLE_ADMIN"){
          history.push("/admin");
        }else if(role=="ROLE_VENDOR"){
          history.push("/vendor");
        }else if(role=="ROLE_CUSTOMER"){
          history.push("/customer");
        }
      }else{
        history.push("/login");
      }

    }
    return (
      <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-body-tertiary'>
        <div className='container-fluid'>
          <img src={appLogo} style={{ height: '60px', marginRight: '10px', zoom: '100%' }} />
          <a className='navbar-brand'></a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                  Home
                </Link>
              </li>
    
              <li className='nav-item'>
                <Link className='nav-link' onClick={routeToDashboard}>
                  Account
                </Link>
              </li>
    
              <li className='nav-item'>
                <Link className='nav-link' to='/aboutus'>
                  About Us
                </Link>
              </li>
    
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='contactDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Contact
                </a>
                <div className='dropdown-menu' aria-labelledby='contactDropdown'>
                  <a className='dropdown-item' href='#'>
                    <i className='bi bi-facebook'></i> Facebook
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='bi bi-twitter'></i> Twitter
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='bi bi-instagram'></i> Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>

         <div className='d-flex align-items-center'>
          {isLoggedIn ? (
            // Render Logout button if the user is logged in
            <button
              onClick={handleLogout}
              className='btn btn-outline-primary btn-sm'
              style={{
                marginRight: '15px',
                padding: '5px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          ) : (
            // Render Login and Sign Up buttons if the user is not logged in
            <>
              <button
                onClick={SignIn}
                className='btn btn-outline-primary btn-sm'
                style={{
                  marginRight: '10px',
                  padding: '5px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <i className='bi bi-person' style={{ fontSize: '20px', marginRight: '5px' }}></i>
                Login
              </button>
              <button
              onClick={SignUp}
                className='btn btn-primary btn-sm'
                style={{
                  padding: '5px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                Sign Up
              </button>
            </>
          )}
          </div>
        </div>
      </nav>
    </div>
    )
}


export default Menubars;