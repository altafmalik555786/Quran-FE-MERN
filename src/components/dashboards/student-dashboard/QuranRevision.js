import React from "react";
import StudentHeader from "../../sharedComponents/StudentHeader";
import { Container, Row, Col } from "react-bootstrap";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import QuranMajeed from "../../../assets/QuranMajeed.pdf";
const StudentArchives = () => {
  return (
    <>
      <StudentHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <StudentSidebar />
        </Col>
        <Col md={9} className="content-col">
          <div className="d-flex justify-content-center">
            <iframe
              className="pdf mw-100 mh-100"
              width={800}
              height={500}
              src={QuranMajeed}
            ></iframe>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StudentArchives;
