import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit, faBoxOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./components/CustomerDashboard.css"; // Import the custom CSS file

function CustomerDashboard() {
    var i = 1;

    var history = useHistory();

    //function to view Service, behave api call
    var viewService = (args) => {
        var behaveUrl = "http://localhost:8080/Project/customer/behaviour/" + sessionStorage.getItem("email") + "/" + args.target.value;
        axios.post(behaveUrl)
            .then((response) => {
                var res = response.data;
            })
            .catch((err) => {
                console.log(err);
            })
        var sid = args.target.value;
        history.push({
            pathname: "/customer/browse/product",
            state: { sid }

        });
    }

    useEffect(()=>{
        var url = "http://localhost:8080/Project/customer/p/recommend/"+sessionStorage.getItem("email");
        axios.get(url)
        .then((response)=>{
            var list  = response.data;
            setRecom(list);
        })
        .catch((err)=>{
            alert(err.message);
        })

    },[])

    var [recom, setRecom] = useState([{
        id: 0,
        servName: " ",
        serv_desc: "",
        serv_price: 0,
        creatn_date: "",
        first_name: "",
        cmp_name: "",
        pincode: 0,
        city: "",
        state: "",
        mob_no: 0,
        email: ""
    }])
    
    return (
        <Container className="py-5">
            <h1 className="mb-4">Customer Dashboard</h1>
            <div className="dashboard-buttons row">
                <div className="col-md-3">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <FontAwesomeIcon icon={faSearch} className="dashboard-icon" />
                            <Card.Title>Browse Services</Card.Title>
                            <Button
                                variant="primary" // Set the button color to blue
                                size="sm"
                                className="card-button-style"
                                onClick={() => history.push("/customer/browse")}
                                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
                            >
                                Browse
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <FontAwesomeIcon icon={faEdit} className="dashboard-icon" />
                            <Card.Title>Update Profile</Card.Title>
                            <Button
                                variant="primary" // Set the button color to blue
                                size="sm"
                                className="card-button-style"
                                onClick={() => history.push("/customer/profile")}
                                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
                            >
                                Update
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <FontAwesomeIcon icon={faBoxOpen} className="dashboard-icon" />
                            <Card.Title>Orders</Card.Title>
                            <Button
                                variant="primary" // Set the button color to blue
                                size="sm"
                                className="card-button-style"
                                onClick={() => history.push("/customer/order")}
                                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
                            >
                                View Orders
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <FontAwesomeIcon icon={faEnvelope} className="dashboard-icon" />
                            <Card.Title>Mail</Card.Title>
                            <Button
                                variant="primary" // Set the button color to blue
                                size="sm"
                                className="card-button-style"
                                onClick={() => history.push("/customer/mail")}
                                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
                            >
                                View Mail
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Similar cards for Mail */}
                {/* ... */}
            </div>
            <hr />
         
            <div className="recommendation-table">
                <center>
                <h2 className="mb-3"><b>Recommendations for you</b></h2>
                </center>
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr className="table-primary">
                            <th scope="col">Sr No.</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Location</th>
                            <th scope="col">Price Per Unit</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recom.map((o, index) => (
                            <tr key={o.id}>
                                <td>{index + 1}</td>
                                <td><b>{o.servName}</b></td>
                                <td>{o.serv_desc}</td>
                                <td>{o.city}, {o.state}</td>
                                <td>{o.serv_price}</td>
                                <td>
                                    <button
                                        onClick={() => viewService({ target: { value: o.id } })}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );

}


export default CustomerDashboard;