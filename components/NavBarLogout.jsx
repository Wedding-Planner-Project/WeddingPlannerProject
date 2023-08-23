import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import { useHistory, Link } from 'react-router-dom';
import appLogo from '../lagnghar-1.png'

import { Row } from 'reactstrap';


function MenubarLogout(){

    var history = useHistory();
  
    var logOut=()=>{
      sessionStorage.clear();
      history.push("/home");
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

    }
    return (
      <div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
          <img src={appLogo} style={{ height: '60px', marginRight: '10px',zoom:'100%' }} />
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
  
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='d-flex'>
              <button onClick={logOut} className='btn'>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    )
  //   return (<div style={{ paddingTop: '120px' }} className="content-wrapper">
  //   <header className="ml-2">
  //   <nav className="navbar navbar-expand-md" style={{ background: 'linear-gradient( gray, white)'}}>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-toggle="collapse"
  //         data-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{textAlign:'center'}}>
  //         <ul className="navbar-nav">
  //           <li className="nav-item active">
  //             <a className="nav-link" href="/home" >
  //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
  //               <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
  //                       <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
  //             </svg>
  //               <i class="bi bi-badge-vr-fill"></i>
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" onClick={routeToDashboard}>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  //                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  //               </svg>
  //               Account
  //             </a>
  //           </li>
  //           <li className="nav-item dropdown">
  //             <a className="nav-link" href="/aboutus">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
  //                 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  //               </svg>
  //               About
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="/contact">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-quote-fill" viewBox="0 0 16 16">
  //                 <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  //               </svg>
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="ml-auto d-flex align-items-center">
  //       <div style={{ flexGrow: 1 }}></div> {/* Empty div to push buttons to the right */}
  //       <button type="button" className="btn" style={{ backgroundColor: 'lightblue', marginRight: '10px' }} onClick={SignIn}>
  //         Sign In
  //       </button>
  //       <button type="button" className="btn" style={{ backgroundColor: 'yellow' }} onClick={logOut}>
  //         Logout
  //       </button>
  //     </div>
  //     </nav>
  //   </header>
  // </div>
  // )
}


export default MenubarLogout;