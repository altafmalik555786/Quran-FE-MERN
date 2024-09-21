import React from "react";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Navbar";
import StudentHeader from "../../sharedComponents/StudentHeader";
import { Route, Routes } from "react-router-dom";
import EditProfile from "./EditProfile";
import ParentalWatch from "./ParentalWatch";
import StudentArchives from "./StudentArchives";
import QuranRevision from "./QuranRevision";
import Dashboard from "./Dashboard";
const StudentDashboard = ({ children }) => {
  return (
    <div>
      <div>
        <StudentHeader />
      </div>
      <Row>
        <Col className="col-12 col-md-3 col-xl-2">
          <StudentSidebar />
        </Col>
        <Col md={9} className="content-col">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students/edit-profile" element={<EditProfile />} />
            <Route path="/students/parental_watch" element={<ParentalWatch />} />
            <Route path="/students/on_demand" element={<StudentArchives />} />
            <Route path="/students/quran_revision" element={<QuranRevision />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default StudentDashboard;
