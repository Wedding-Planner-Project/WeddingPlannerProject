// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { Table } from "react-bootstrap";

// function AdminDashboard(){
    

//     var history = useHistory();
//     //add customer functions
//     var addCust=()=>{
//         debugger;
//         history.push('/customerReg');
//     }

//     //add vendor
//     var addVend=()=>{
//         history.push('/vendorReg')
//     }
//     //view Vendors
//     var viewCust=()=>{
//         history.push('/admin/customers')
//     }

//     //view Customers
//     var veiwVend=()=>{
//         history.push('/admin/vendors');
//     }
//     //view Orders
//     var veiwOrders=()=>{
//         history.push('/admin/orders');
//     }

//     //view categores
//     var veiwCategories=()=>{
//         history.push('/admin/categories');
//     }

//     //view addresses
//     var viewAddresses=()=>{
//         history.push('/admin/addresses');
//     }

    
//     return(<div className="p-5 mb-1 mx-4">
//         <h1><b><i>Admin Dashboard</i></b></h1>
//              <Table   >
   
//       <tbody>
//         <tr>
//         <td><button onClick={addCust} class="btn btn-dark">Add Customer</button></td>
//         <td><button onClick={addVend} class="btn btn-dark">Add Vendor</button></td>
//         <td><button onClick={viewCust} class="btn btn-dark">Customers</button></td>
//         <td><button onClick={veiwVend} class="btn btn-dark">Vendors</button></td>
//         <td><button onClick={veiwOrders} class="btn btn-dark">Orders</button></td> 
//         <td> <button onClick={veiwCategories} class="btn btn-dark">Categories</button></td>
//         <td><button onClick={viewAddresses} class="btn btn-dark">Addresses</button></td>
        
//         </tr>
//     </tbody>
//     </Table>
//     </div>)
// }


// export default AdminDashboard;



import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./components/AdminDashboard.css"; // Import the custom CSS file
import {
    faUser,
    faStore,
    faUsers,
    faUserTie,
    faClipboardList,
    faListAlt,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";


function AdminDashboard() {
    const history = useHistory();

    const navigateTo = (route) => {
        history.push(route);
    };

    const dashboardOptions = [
        { title: "Add Customer", route: "/customerReg", icon: faUser },
        { title: "Add Vendor", route: "/vendorReg", icon: faStore },
        { title: "Customers", route: "/admin/customers", icon: faUsers },
        { title: "Vendors", route: "/admin/vendors", icon: faUserTie },
        { title: "Orders", route: "/admin/orders", icon: faClipboardList },
        { title: "Categories", route: "/admin/categories", icon: faListAlt },
        { title: "Addresses", route: "/admin/addresses", icon: faMapMarkedAlt },
        // Add more options if needed
    ];

    return (
        <Container className="py-5">
            <h1 className="mb-4">Admin Dashboard</h1>
            <Row>
                {dashboardOptions.map((option, index) => (
                    <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="dashboard-card">
                            <Card.Body>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={option.icon} size="3x" />
                                </div>
                                <Card.Title>{option.title}</Card.Title>
                                <Button
                                    onClick={() => navigateTo(option.route)}
                                    variant="primary" // Set the variant to "primary"
                                    size="sm"
                                    className="card-button-style"
                                    block
                                    style={{ backgroundColor: '#007bff', borderColor: '#007bff' }} // Set blue color
                                >
                                     View
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AdminDashboard;








