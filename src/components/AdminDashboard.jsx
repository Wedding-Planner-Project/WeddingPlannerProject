import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylings/AdminDashboardStyle.css"; // Import the custom CSS file
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
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  const dashboardOptions = [
    { title: "Add Customer", route: "/customer-registration", icon: faUser },
    { title: "Add Vendor", route: "/vendor-registration", icon: faStore },
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
                  style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
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
