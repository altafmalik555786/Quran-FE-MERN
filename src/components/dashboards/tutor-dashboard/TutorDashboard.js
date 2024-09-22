import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Navbar";
import { Route, Routes } from "react-router-dom";
import StudentHeader from "../../sharedComponents/StudentHeader";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import Dashboard from "./Dashboard";
import TutorHeader from "../../sharedComponents/TutorHeader";
import TutorSidebar from "../../sharedComponents/TutorSidebar";
import EditProfil from "./EditProfil";
import AddSchedule from "./AddSchedule";
import AccountSettings from "./AccountSettings";
import ClassroomDemo from "./ClassroomDemo";
import TrainingArea from "./TrainingArea";
import FindStudents from "./FindStudents";
import Billing from "./Billing";
import Messages from "./Messages";

const StudentDashboard = ({ children }) => {
  return (
    <div>
      <div>
        <TutorHeader/>
      </div>
      <Row>
        <Col className="col-12 col-md-3 col-xl-2">
          <TutorSidebar/>
        </Col>
        <Col md={9} className="content-col">
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/edit-profile" element={<EditProfil />} />
            <Route path="/add-schedule" element={<AddSchedule/>} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/classroom-demo" element={<ClassroomDemo />} /> 
            <Route path="/training-area" element={<TrainingArea />} /> 
            <Route path="/find-quran-students" element={<FindStudents />} /> 
            <Route path="/calls-history" element={<Billing />} /> 
            <Route path="/conversations" element={<Messages />} /> 
            
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default StudentDashboard;
