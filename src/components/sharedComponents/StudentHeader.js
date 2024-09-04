import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import menulogo from "../../assets/menu-logo.png";
import '../../styles/global.css'
import { Badge } from "react-bootstrap";

function StudentHeader() {
  return (
    <div className="p-3 bg-success border-bottom">
      <Nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-around align-items-center col-md-5 col-xl-6">
          <Nav.Item className="" >
            <Link to="/">
              <img src={menulogo} alt="qquranic logo" className="student-dashboard-logo" />
            </Link>
          </Nav.Item>
          {/* <Nav.Item className="text-white">
            <Link className="fs-5 fs-md-4 text-white" href="/home">Home</Link>
          </Nav.Item> */}
          <Nav.Item>
            <Link className='fs-5 text-white' to="/students/dashboard">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='fs-5 text-white' to="/findtutors">Find Quran Teachers</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='fs-5 text-white' to="/priceplan">Plans & Pricing</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='fs-5 text-white' to="/conversations">Messages (6)</Link>
          </Nav.Item>
        </div>
        <div className="d-flex justify-content-around align-items-center col-md-5 col-xl-2">
          <Nav.Item>
            <Link className='fs-5 text-white' href="/home">Username</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='fs-5 text-white' href="/home"> <Badge className="rounded-circle bg-danger me-2 text-white">6</Badge> 
            Notifications</Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default StudentHeader;
