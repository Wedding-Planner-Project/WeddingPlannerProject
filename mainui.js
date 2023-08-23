import Home from './home';
import Footer from './Footer';
import Menubars from './menubars'
import Header from './header';
import CustReg from './custregs';
import Login from './login';
import NotFound from './notfound';
import ProtectedRoute from './protectedRoute';
import ProtectedAdmin from './protectedAdmin';
import ProtectedVendor from './protectedVendor';
import Contact from './contact';
import Customers from './customers';
import Sidebar from './sidebar';
import Vendors from './vendors';
import VendorReg from './vendoreg';
import { Link, Route, Routes, Switch, useHistory } from 'react-router-dom';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';
import AdminDashboard from './adminDashboard';
import Addresses from './addresses';
import ViewPage from './viewpage';
import Orders from './orders';
import Categories from './categories';

import VendorDashboard from './vendorDashboard';
import VendorServices from './vendorServices';
import VendorOrders from './vendorOrders';
import VendorProfile from './vendorProfile';
import VendorMail from './vendorMail';

//import d from './d8.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login,logout  } from './features/authSlice'


import ProtectedCustomer from './protectedCustomer'
import CustomerDashboard from './customerDashboard';
import CutstomerBrowse from './custBrowse';
import CustomerProduct from './custProduct';
import CustomerProfile from './customerProfile';
import CustomerOrders from './customerOrders';
import CustomerMail from './customerMail';

import AboutUs from './aboutUs';
import MenubarLogout from './components/NavBarLogout';
import { Reviews } from '@mui/icons-material';
import CardComponent from './components/ReviewsList';



function Render(){
  if(login==true){
    <MenubarLogout/>}
   else if(logout==false)
     <Menubars/>
  }



function MainUI() {

  //   RenderLogin
  // {loginStatus && <MenubarLogout/>}
  let loginStatus = useSelector((state) => state.auth.status)
  console.log(loginStatus);
  const dispatch = useDispatch()

  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['token'] && sessionStorage['token'].length > 0) {
      // update the auth slice status to true
      dispatch(Login())
    }
  }, [])
  return (<>
  <div>
    {loginStatus ?  logout && <MenubarLogout/> :  login && <Menubars/>}
    <Header></Header>
    <Row>
      {/* <Col md={2}><Sidebar /> 
      </Col>*/}
      <Col md={12}>
      
      <Row>
        {/* <div className=" mb-1'container-fluid'" style={{background: `url(${d})`, zoom: "103%"}}> */}
        <div className=" mb-1'container-fluid'" >
    <Switch>
      {/* <Route path='/' exact component={Home} /> */}
      {/* <Route path='/home' exact component={Home} /> */}
      <Route path='/home' exact component={ViewPage} />
      

      <Route path='/customerReg' exact component={CustReg}></Route>
      <Route path='/vendorReg' exact component={VendorReg}></Route>
      <Route path='/login' exact component={Login}/>
      <Route path='/feedback' exact component={Feedback}/>
      <Route path='/' exact component={ViewPage}/>
      <Route path='/home' exact component={ViewPage}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/aboutus' exact component={AboutUs}/>
      {/* <ProtectedAdmin path='/customers' exact component={Customers}/>
      <ProtectedAdmin path='/vendors' exact component={Vendors}/>
      <ProtectedAdmin path='/admin' exact component={AdminDashboard}/>
      <ProtectedRoute path='/contact' exact component={Contact} />
      <ProtectedRoute path='/addresses' exact component={Addresses} /> */}
      <Route path='/reviews'  component={CardComponent}/>


       <Route path='/admin/categories' exact component={Categories}/>
      <Route path='/admin/customers' exact component={Customers}/>
      <Route path='/admin/orders' exact component={Orders}/>
      <Route path='/admin/vendors' exact component={Vendors}/>
      <Route path='/admin/addresses' exact component={Addresses}/>
      <Route path='/admin' exact component={AdminDashboard}/>

      <Route path='/vendor' exact component={VendorDashboard}/>
      <Route path='/vendor/services' exact component={VendorServices}/>
      <Route path='/vendor/orders' exact component={VendorOrders}/>
      <Route path='/vendor/profile' exact component={VendorProfile}/>
      <Route path='/vendor/mail' exact component={VendorMail}/>


      <Route path='/customer' exact component={CustomerDashboard}/>
      <Route path='/customer/browse' exact component={CutstomerBrowse}/>
      <Route path='/customer/browse/product' exact component={CustomerProduct}/>
      <Route path='/customer/profile' exact component={CustomerProfile}/>
      <Route path='/customer/order' exact component={CustomerOrders}/>
      <Route path='/customer/mail' exact component={CustomerMail}/>





      <Route path='/contact' exact component={Contact} />


      <Route path='*' component={NotFound} />
    </Switch>
    </div>
    </Row>
    </Col>
    </Row>
    {/* <Footer /> */}
    </div>
    <div>
          <Footer />
    </div>
    </>
  )
}

export default MainUI;