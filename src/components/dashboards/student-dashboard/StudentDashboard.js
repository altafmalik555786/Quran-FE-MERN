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
            <Route path="/students/dashboard" component={Dashboard} />

            <Route path="/students/edit-profile" component={EditProfile} />
            <Route path="/students/parental_watch" component={ParentalWatch} />
            <Route path="/students/on_demand" component={StudentArchives} />
            <Route path="/students/quran_revision" component={QuranRevision} />
            {/* Add more routes as needed */}
            <Route path="*" render={() => <div>Page not found</div>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default StudentDashboard;
