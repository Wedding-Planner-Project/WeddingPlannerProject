import reactRouterDom from "react-router-dom";
import {useNavigate, Link} from reactRouterDom

function NavigationBar(){
    const navigate= useNavigate();
    const dispatch=useDispatch();

    const logoutUser = () => {
        // clear the session storage changes
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('mobile')
        sessionStorage.removeItem('profileImage')
    }

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

    dispatch(logoutUser());

    navigate('/');
    }

return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand'>LagnGhar</a>
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

              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='d-flex'>
            <button onClick={logInUser} className='btn'>
              Login
            </button>
          </div>
          <div className='d-flex'>
            <button onClick={logoutUser} className='btn'>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
  