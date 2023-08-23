import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img from './fotor1.png';
import { useHistory } from 'react-router-dom';
import d from './lagnghar-1.png';
function Header() {

  var history = useHistory();

 

   return (<></>
   //<div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '100', backgroundColor: 'white', height: '60px !important' }} className="navbar-wrapper">
//   <Navbar className="navbar-inverse">
//     <Container>
//       {/* ... */}
//       <Navbar.Brand href="/home" style={{ font: 'initial', fontFamily: 'Garamond, serif' }} className="my-3">
//   <font color="#1d1d1f">
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <img src={d} style={{ height: '60px', marginRight: '10px',zoom:'100%' }} />
//       <h1 style={{ margin: '0' }}><strong>LagnGhar</strong></h1>
//     </div>
//   </font>
// </Navbar.Brand>

//       {/* ... */}
     
      
//     </Container>
//   </Navbar>
// </div>


)
}

export default Header;