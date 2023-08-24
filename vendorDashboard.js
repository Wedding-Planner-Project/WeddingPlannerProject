import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome icons
import { faSearch, faEdit, faBoxOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you're using

function VendorDashboard(){
    const history = useHistory(); // Initialize history


    return(<Container className="py-5">
    <h1 className="mb-4">Vendor Dashboard</h1>
    <div className="dashboard-buttons row">
        <div className="col-md-3">
            <Card className="dashboard-card">
                <Card.Body>
                    <FontAwesomeIcon icon={faSearch} className="dashboard-icon" />
                    <Card.Title>Browse Services</Card.Title>
                    <Button
                        variant="primary"
                        size="sm"
                        className="card-button-style"
                        onClick={() => history.push("/vendor/services")}
                        style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
                    >
                        Browse
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
                        variant="primary"
                        size="sm"
                        className="card-button-style"
                        onClick={() => history.push("/vendor/orders")}
                        style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
                    >
                        View Orders
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
                        variant="primary"
                        size="sm"
                        className="card-button-style"
                        onClick={() => history.push("/vendor/profile")}
                        style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
                    >
                        Update
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
                        variant="primary"
                        size="sm"
                        className="card-button-style"
                        onClick={() => history.push("/vendor/mail")}
                        style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
                    >
                        View Mail
                    </Button>
                </Card.Body>
            </Card>
        </div>
    </div>
</Container>
)

}

export default VendorDashboard;