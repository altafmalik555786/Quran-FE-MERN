import React from "react";
import StudentHeader from "../../sharedComponents/StudentHeader";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { FaEyeSlash, FaRegClock } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={4} xl={4}>
          <div className="d-flex border-bottom mb-3 py-3  px-4 gap-2 align-items-center">
            <p className="m-0">
              <MdMessage size={12} color="#28a745" />
            </p>
            <p className="fs-5 text-secondary m-0"> Current Tutors:</p>
          </div>
          <p className="mb-3">You have not hired anyone yet</p>
          <Link to="/findtutors" className="btn tutor-btn" variant="success">
            Find Tutor
          </Link>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Row className="py-3  px-4 border-bottom">
            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div
               
                className="d-flex border rounded bg-primary-hover border-secondary align-items-center p-2  w-50"
              >
                <FaEyeSlash className="me-2" size={18} color="#6c757d" />

                <p className="m-0">Recommended</p>
              </div>
            </Col>
            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div className="d-flex align-items-center  w-50">
                <Badge className="rounded-circle bg-danger me-2 text-white">
                  6
                </Badge>
                <FaEyeSlash className="me-2" size={14} color="#6c757d" />

                <p className="m-0"> Sent Invites</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
